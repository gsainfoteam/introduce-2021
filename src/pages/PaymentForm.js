import React from "react";
import axios from "axios";
import { Button, Grid, Typography, TextField } from "@mui/material";
import Text from "../components/Text";

const validator = {
  name: /^[가-힣]{2,4}$/,
  studentId: /20[012][0-9]{5}/,
  phoneNumber: /01[0-9]-?[0-9]{3,4}-?[0-9]{4}/,
};

const PaymentForm = (props) => {
  const [name, setName] = React.useState("");
  const [studentId, setStudentId] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [previousDevCareer, setPreviousDevCareer] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendMessage = () => {
    const endpoint = "https://application.gistory.me";
    const info = {
      project_id: "gsainfoteam_2022",
      name: name,
      student_id: studentId,
      phone_number: phoneNumber,
      misc: [
        {
          question: "개발에 참여하신 경험이 있으시면 적어주세요",
          answer: previousDevCareer,
        },
        {
          question: "하시고 싶으신 말이 있다면 적어주세요",
          answer: message,
        },
      ],
    };

    if (window.confirm("이 양식 그대로 제출하시겠습니까?"))
      axios({
        url: endpoint + "/api/application",
        method: "POST",
        data: info,
      })
        .then(function (response) {
          if (response.data.success) {
            window.alert("문자가 발송되었습니다");
            props.handleNext();
          } else {
            window.alert(response.data.sms_error);
          }
        })
        .catch(function (error) {
          const errorInfo = error.response.data.error;
          switch (errorInfo) {
            case "application_not_opened":
              window.alert("아직 지원 기간이 아닙니다.");
              break;
            case "application_closed":
              window.alert("지원이 마감되었습니다");
              break;
            case "sutdent_id_from_not_valid":
              window.alert("학번이 잘못되었습니다.");
              break;
            case "phone_number_form_not_valid":
              window.alert("휴대전화 서식이 잘못되었습니다.");
              break;
            case "duplicate_input_data":
              window.alert("학번이나 휴대폰 번호가 중복되었습니다.");
              break;
            case "sms_error":
              window.alert("SMS 전송과정에서 오류가 발생하였습니다.");
              break;
            case "unknown_error":
              window.alert("알 수 없는 에러가 발생하였습니다.");
              break;
            default:
              window.alert("에러가 발생했습니다.");
              // 프론트 단에서 에러가 발생해서 아예 전송이 안되거나 할때
              break;
          }
        });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70%",
        maxWidth: "1000px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "gray",
        }}
      />
      <Text size="45px" weight="900" marginTop="75px">
        인포팀에 바로 지원하기
      </Text>
      <Typography variant="subtitle2" gutterBottom color="error" sx={{ mt: 2 }}>
        새로고침하면, 작성중인 내용이 사라집니다
      </Typography>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={5}>
          <TextField
            required
            id="name"
            label="이름"
            value={name}
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            error={!validator["name"].test(name)}
            /*helperText="2 ~ 4글자로 입력해주세요"*/
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="student_id"
            label="학번"
            value={studentId}
            name="studentId"
            onChange={(e) => {
              setStudentId(e.target.value);
            }}
            error={!validator["studentId"].test(studentId)}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="phone_number"
            label="휴대폰 번호"
            value={phoneNumber}
            name="phoneNumber"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            error={!validator["phoneNumber"].test(phoneNumber)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="previous_dev_career"
            label="개발에 참여하신 경험이 있으시면 적어주세요"
            value={previousDevCareer}
            name="previousDevCareer"
            onChange={(e) => {
              setPreviousDevCareer(e.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            id="message"
            label="하시고 싶으신 말이 있다면 적어주세요"
            value={message}
            name="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            fullWidth
          />
        </Grid>
      </Grid>
      <div>
        {/*<Button onClick={props.handleBack}>
          <i class="material-icons">arrow_back</i>
        </Button>*/}
        {validator["phoneNumber"].test(phoneNumber) &&
        validator["studentId"].test(studentId) &&
        validator["name"].test(name) ? (
          <Button
            variant="contained"
            color="primary"
            onClick={sendMessage}
            sx={{ mt: 5, mb: 8, alignSelf: "flex-start" }}
          >
            제출하기
          </Button>
        ) : (
          <>
            <Button variant="contained" disabled sx={{ mt: 5, mb: 8 }}>
              제출하기
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;

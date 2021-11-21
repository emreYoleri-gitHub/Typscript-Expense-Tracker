import { Form, Input, Button, message } from "antd";
import { useHistory } from "react-router";
import { FormValues } from "../../types/userTypes";
import API from "../../utils/api";

export const showError = (errorMessage: string) => {
  message.error(errorMessage);
};

const SignUp = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const history = useHistory();

  const onFinish = async (values: FormValues) => {
    try {
      await API.post("/users/register", values);
      history.push("/login");
    } catch (error) {
      console.log((error as Error).message);
      showError((error as any).response.data.errorMessage);
    }
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <h2 style={{ textAlign: "center", marginBottom: 40 }}>
        Register for an account
      </h2>
      <Form.Item name="username" label="User Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!", min: 6 },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="full_name" label="Full Name">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;

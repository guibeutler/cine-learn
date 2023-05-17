import React from "react";
import { Form, Input, Button } from "antd";
import LogoImg from "../../assets/logo-cine-learn.png";
import "./style.css";

function LoginPage() {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <img src={LogoImg} alt="logo" />
        <h2 className="form-title">Entrar</h2>
        <Form
          name="login_form"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: "Informe seu email!" },
              { type: "email", message: "Informe um email válido!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true, message: "Informe sua senha!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="form-button">
              Log In
            </Button>
          </Form.Item>
        </Form>
        <div className="register-link" style={{ color: "black" }}>
          Ainda não está cadastrado? <a href="/signup">Cadastre-se!</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

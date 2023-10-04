/* Import */
import { useAuthStore } from "@/store";
import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "@/components/common/header";
import { useNavigate } from "react-router-dom";
import { TextInput } from "@/components/common/input";
import { TextButton } from "@/components/common/button";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100vh;
    margin: 0 auto;
    margin-top: 50px;
`;

const LoginHeader = styled.div`
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 30px;
`;
const IDContainer = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
`;
const IDWrapper = styled.div``;
const IDLabel = styled.label`
    font-size: 24px;
    font-weight: 700;
`;
const PWContainer = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
`;
const PWWrapper = styled.div``;
const PWLabel = styled.label`
    font-size: 24px;
    font-weight: 700;
`;

function AdminLogin() {
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        if (username === "ssafy" && password === "dolfin789") {
            login();
            navigate("/admin");
        } else {
            alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        }
    };
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleLogin();
        }
    };
    return (
        <>
            <Header />
            <LoginContainer>
                <LoginHeader>관리자 페이지 로그인</LoginHeader>
                <IDContainer>
                    <IDWrapper>
                        <IDLabel htmlFor="username">아이디</IDLabel>
                    </IDWrapper>
                    <TextInput
                        width="100%"
                        value={username}
                        placeholder="아이디를 입력하세요."
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </IDContainer>
                <PWContainer>
                    <PWWrapper>
                        <PWLabel htmlFor="password">비밀번호</PWLabel>
                    </PWWrapper>
                    <TextInput
                        width="100%"
                        type="password"
                        value={password}
                        placeholder="비밀번호를 입력하세요."
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </PWContainer>
                <TextButton
                    width="25%"
                    height="50px"
                    text="로그인"
                    onKeyDown={handleKeyDown}
                    onClick={handleLogin}
                    tabIndex={0}
                />
            </LoginContainer>
        </>
    );
}

export default AdminLogin;

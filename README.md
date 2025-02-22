## 프로젝트 진행 기간

2023.08.21(월) ~ 2023.10.06(금)



## OASYS 배경
디지털 전환으로 인해 금융업무는 점차적으로 IT 기기로 대체되고 있습니다.
그러나 금융 취약 계층은 이러한 IT기기를 사용하기 어려울 것으로 예상되어, 이러한 고객층을 지원하고자 One-stop Aid System for Senior People (A.K.A OASYS) 프로젝트를 기획하게 되었습니다.

## 현장 조사 및 인터뷰

## OASYS 개요
OASYS는 얼굴 인식과 음성 인식 기술을 활용한 AI 컨시어지 키오스크 서비스입니다. 얼굴 인식을 기반으로 어르신분들이 더 편리하게 이용할 수 있도록 UI가 변환됩니다. 또한, 음성 인식을 통해 고객의 방문 의도를 파악하고 원하는 창구 업무로 연결됩니다. 음성 출력 서비스를 통해 더욱 서비스를 편리하게 이용할 수 있습니다. 더불어 번호표 용지를 최소화하기 위해 문자 및 전화 서비스를 제공하며 고객의 대기 시간을 줄일 수 있습니다.

## OASYS 목표
이 프로젝트는 금융 서비스의 접근성을 높이고, 취약한 고객층이 은행 업무를 훨씬 더 편리하게 이용할 수 있도록 주요 목표로 하고 있습니다.

## 주요 기능


## 영상

## 사용한 버전관리

#### <i>OS</i>
OS : Ubuntu 20.04 LTS

---

#### <i>Servers</i>
Nginx : nginx/1.25.2

JVM : openjdk 11.0.16 2022-07-19 / OpenJDK Runtime Environment 18.9 (build 11.0.16+8) / OpenJDK 64-Bit Server VM 18.9 (build 11.0.16+8, mixed mode, sharing)

Spring boot : 2.7.15

React : 18.2.0

NodeJS : 18.17.1

---

#### <i>Build</i>
Maven : Apache Maven 3.6.4

NPM : 9.8.0

---

#### <i>DB</i>


MariaDB : 11.1.2-MariaDB, client 15.2 for debian-linux-gnu (x86_64) using  EditLine wrapper

Redis : 7.2.1


---

#### <i>extra</i>

Docker : Docker version 24.0.5, build 24.0.5-0ubuntu1~20.04.1

Jenkins : 2.414.1

prometheus : 2.47.0

Grafana : 10.1.4

---

#### <i>IDE</i>

Intellij IDEA 2023.1.3 (Ultimate Edition)

Visual Studio Code 1.82.2

---

#### <i>외부 서비스</i>
얼굴 인식 : sk open api ( NUGU facecan ) 버전 : v1

문자 알림 : coolsms , 버전: 4.3.0

전화 알림 : twilio, 버전 : 9.9.1

GPT API : gpt-3.5-turbo

TTS : google Cloud Text-to-Speech API v1

참고) STT : react speech kit 3.0.1



## 프로젝트 구조

- 전체 프로젝트 구조
![최종_아키텍처](/uploads/ea879e2e120d5c9dfb587a48bbbbd489/최종_아키텍처.png)

- 파일 구조
    - Back
    
        manager-service
        ```
        Back-End (서버에 있는 manager-service)
            ├── Dockerfile
            ├── pom.xml
            ├── src
            │   └── main
            │       ├── java
            │       │   └── com
            │       │       └── dolfin
            │       │           └── oasys
            │       │               ├── OasysApplication.java
            │       │               ├── config
            │       │               │   └── RedisConfig.java
            │       │               ├── controller
            │       │               │   └── ManagerController.java
            │       │               ├── model
            │       │               │   ├── dto
            │       │               │   │   ├── MemberDto.java
            │       │               │   │   └── TellerStatusDTO.java
            │       │               │   └── entity
            │       │               │       ├── Member.java
            │       │               │       └── TellerType.java
            │       │               ├── repository
            │       │               │   ├── MemberRepository.java
            │       │               │   └── TellerTypeRepository.java
            │       │               ├── service
            │       │               │   ├── ManagerService.java
            │       │               │   └── ManagerServiceImpl.java
            │       │               └── util
            │       │                   └── SendMessage.java
            │       └── resources
            │           └── application.yml
            └── target
        ```

        kiosk-service

        ```
        Back-End_AI
            ├── mvnw
            ├── mvnw.cmd
            ├── pom.xml
            └── src
                ├── main
                │   ├── java
                │   │   └── com
                │   │       └── dolfin
                │   │           └── oasys
                │   │               ├── OasysApplication.java
                │   │               ├── config
                │   │               │   └── WebConfigurer.java
                │   │               ├── domain
                │   │               │   ├── face
                │   │               │   │   ├── controller
                │   │               │   │   │   └── FaceController.java
                │   │               │   │   ├── exception
                │   │               │   │   │   ├── APIConnectException.java
                │   │               │   │   │   ├── CommunicationLimitException.java
                │   │               │   │   │   └── InvalidImageException.java
                │   │               │   │   ├── model
                │   │               │   │   │   └── dto
                │   │               │   │   │       ├── DeleteDto.java
                │   │               │   │   │       ├── ExpressionRaw.java
                │   │               │   │   │       ├── FaceBox.java
                │   │               │   │   │       ├── FaceDetect.java
                │   │               │   │   │       ├── FaceRecognize.java
                │   │               │   │   │       ├── FaceResponse.java
                │   │               │   │   │       ├── FaceSaveResponse.java
                │   │               │   │   │       ├── Faces.java
                │   │               │   │   │       └── SubCreate.java
                │   │               │   │   └── service
                │   │               │   │       ├── FaceService.java
                │   │               │   │       └── FaceServiceImpl.java
                │   │               │   ├── gpt
                │   │               │   │   ├── controller
                │   │               │   │   │   └── GptController.java
                │   │               │   │   └── service
                │   │               │   │       ├── GPTService.java
                │   │               │   │       └── PlayerMP3.java
                │   │               │   ├── member
                │   │               │   │   ├── model
                │   │               │   │   │   ├── dto
                │   │               │   │   │   │   └── MemberDto.java
                │   │               │   │   │   └── entity
                │   │               │   │   │       ├── Gender.java
                │   │               │   │   │       ├── Member.java
                │   │               │   │   │       └── Role.java
                │   │               │   │   └── repository
                │   │               │   │       └── MemberRepository.java
                │   │               │   ├── notification
                │   │               │   │   ├── controller
                │   │               │   │   │   └── NotificationController.java
                │   │               │   │   ├── dto
                │   │               │   │   │   └── SMSNotificationRequest.java
                │   │               │   │   └── service
                │   │               │   │       ├── NotificationService.java
                │   │               │   │       └── NotificationServiceImpl.java
                │   │               │   ├── stt
                │   │               │   │   └── controller
                │   │               │   │       ├── NaverCloud.java
                │   │               │   │       ├── NaverController.java
                │   │               │   │       ├── VideoController.java
                │   │               │   │       └── VoiceController.java
                │   │               │   ├── tellertype
                │   │               │   │   └── model
                │   │               │   │       └── entity
                │   │               │   │           └── TellerType.java
                │   │               │   └── tts
                │   │               │       └── TtsController.java
                │   │               └── exception
                │   │                   ├── ControllerAdvice.java
                │   │                   ├── CustomException.java
                │   │                   ├── ErrorCode.java
                │   │                   └── ErrorResponse.java
                │   └── resources
                │       ├── application.yml
                │       ├── confirm.jsonl
                │       ├── ftOasys.jsonl
                │       └── mp3
                └── test
        ```

    - Frontend
        ```
        frontend/oasys
                ├── Dockerfile
                ├── README.md
                ├── index.html
                ├── nginx.conf
                ├── nginx.conf.bak2
                ├── package-lock.json
                ├── package.json
                ├── public
                │   └── favicon.ico
                ├── src
                │   ├── App.tsx
                │   ├── api
                │   │   ├── faces.ts
                │   │   ├── instance.ts
                │   │   ├── manager.ts
                │   │   ├── members.ts
                │   │   ├── notification.ts
                │   │   └── voice.ts
                │   ├── assets
                │   │   ├── fonts
                │   │   ├── icons
                │   │   ├── images
                │   │   ├── sounds
                │   │   └── styles
                │   │       ├── emotion.d.ts
                │   │       ├── global.ts
                │   │       └── theme.ts
                │   ├── components
                │   │   ├── common
                │   │   │   ├── animation
                │   │   │   ├── button
                │   │   │   ├── dropdown
                │   │   │   ├── footer
                │   │   │   ├── header
                │   │   │   ├── input
                │   │   │   └── overlay
                │   │   ├── modal
                │   │   │   ├── Modal.tsx
                │   │   │   └── index.ts
                │   │   └── numpad
                │   │       ├── Numpad.tsx
                │   │       └── index.ts
                │   ├── config
                │   │   └── bankingConfig.ts
                │   ├── customTypes
                │   │   ├── apiTypes.ts
                │   │   ├── componentTypes.ts
                │   │   ├── routerTypes.ts
                │   │   └── storeTypes.ts
                │   ├── hooks
                │   │   └── useRouter.tsx
                │   ├── main.tsx
                │   ├── pages
                │   │   ├── admin
                │   │   │   ├── Admin.tsx
                │   │   │   ├── AdminLogin.tsx
                │   │   │   ├── AdminMain.tsx
                │   │   │   └── index.ts
                │   │   ├── error
                │   │   │   ├── ErrorNotFound.tsx
                │   │   │   └── index.ts
                │   │   ├── home
                │   │   │   ├── Home.tsx
                │   │   │   ├── Test1.tsx
                │   │   │   └── index.ts
                │   │   ├── junior
                │   │   │   ├── Junior.tsx
                │   │   │   └── index.ts
                │   │   └── senior
                │   │       ├── Senior.tsx
                │   │       └── index.ts
                │   ├── router.tsx
                │   ├── store.tsx
                │   ├── utils
                │   │   ├── api.ts
                │   │   └── format.tsx
                │   └── vite-env.d.ts
                ├── tsconfig.json
                ├── tsconfig.node.json
                └── vite.config.ts
        ```
    - ARDUINO
        ```
        arduino
            └── UltraSonic
                └── UltraSonic.ino

        socket/socket-io-server
                ├── app.js
                ├── package-lock.json
                ├── package.json
                └── routes
                    └── index.js
        ```


### 협업 정보
---
#### <i>협업 툴</i>

    이슈 관리 : JIRA

    형상 관리 : GITLAB

    커뮤니케이션 : Notion, Mattermost

    디자인 : figma

---

#### <i>협업 환경</i>
- JIRA
    - 매 주 목표량을 설정하여 Sprint 진행
    - 업무 할당량을 정하여 Story Point 설정
- GITLAB
    - Git-flow전략을 통하여 효율적인 브랜치 관리
    - 코드 검토 및 피드백
- NOTION
    - 데일리 스크럼(일일 스탠드업 미팅) 기록
        - 매일 아침마다 현재 진행 상황과 그 날의 목표 공유
        - 어려움이나 문제점을 공유
        - 특이사항 및 변경사항 공유
    - 일일 회고 기록
        - 하루 동안의 완료한 작업 기록
    - 스프린트 세션 기록
        - 매 주 금요일 오후 5시에 일주일 간의 프로젝트 진행 상황 점검 및 피드백
        - 프로젝트 회고를 진행하며 팀의 성과와 개선점을 공유
    - 회의 기록
        - 회의가 있을 때마다 회의록을 기록하여 보관
    - 그라운드 룰 기록
        - 프로젝트 수칙, 생활 수칙, 마인드셋 수칙 기록
    - 컨벤션 기록
        - 코딩 컨벤션, 브랜치 컨벤션, 커밋 컨벤션, 지라 컨벤션 기록
    - 문서 관리
        - 기능 명세서, ERD, 스토리보드 등 모두가 공유해야하는 문서 관리
        




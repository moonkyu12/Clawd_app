# Clawd Desktop Pet

Anthropic의 AI 코딩 어시스턴트 Claude Code의 마스코트인 Clawd를 데스크톱 화면에서 입양하여 함께 놀고 코딩할 수 있는 인터랙티브 가상 펫 웹 애플리케이션입니다.

외부 라이브러리나 무거운 프레임워크 없이 순수 Vanilla JavaScript, HTML5, CSS3, 그리고 Web Audio API로 구현되어 있어 별도의 복잡한 설치 과정 없이 즉시 실행할 수 있습니다.

---

## 에셋 출처 및 고지 (Credits and Attribution)

본 프로젝트에 사용된 Clawd 캐릭터의 공식 벡터 SVG 애니메이션 에셋과 모션 디자인은 rullerzhou-afk 님의 오픈소스 프로젝트인 [clawd-on-desk](https://github.com/rullerzhou-afk/clawd-on-desk)에서 가져와 본 애플리케이션의 독립 구조에 맞게 최적화하여 적용하였습니다.

- 원작 저장소: https://github.com/rullerzhou-afk/clawd-on-desk
- 원작자: rullerzhou-afk
- 저작권 안내: Clawd 캐릭터 디자인의 원저작권은 Anthropic에 있으며, 벡터 모션 에셋의 1차 제작 저작권은 rullerzhou-afk 님에게 있습니다. 훌륭한 오픈소스 에셋을 공유해주신 원작자분께 깊은 감사를 드립니다.

---

## 주요 기능 (Features)

1. 포물선 공 던지기와 지면 캐치 (Ball Physics and Fetching)
- 공을 던지면 중력과 반발력을 계산하는 2D 물리 엔진을 통해 자연스러운 포물선 궤적을 그리며 튕깁니다.
- 공이 공중에 떠 있는 동안 Clawd는 시선과 고개를 들어 공을 올려다보며 낙하지점으로 달려갑니다.
- 공이 지면에 닿아 튕기는 시점에만 정확하게 공을 물어오며, 공을 머리에 얹고 아장아장 복귀하여 환호 점프 세리머니를 선보입니다.

2. 마우스 실시간 시선 추적 (Eye Tracking)
- 룸 내부에서 마우스 커서를 움직이면 Clawd의 눈동자, 상체, 바닥 그림자가 실시간 각도 계산을 통해 부드럽게 커서를 응시합니다.

3. 유기적인 12가지 벡터 모션 연동
- 기본 대기 (Idle): 부드러운 호흡 애니메이션 및 주기적인 눈 깜빡임
- 꽃게 걸음 (Crabwalk): 네 개의 다리가 교차하며 귀엽게 종종걸음 치는 좌우 이동
- 코딩 모션 (Typing): 미니 노트북을 펼쳐놓고 집게발을 통통 튀기며 작성하는 타건
- 애교 모션 (Aegyo): 쓰다듬을 때 볼을 붉히고 몸을 비비꼬는 부끄러움 표현
- 낮잠과 수면 (Sleeping): 하품 후 코골이 텍스트와 함께 깊은 잠에 빠지는 모션
- 기상 스트레칭 (Wake): 클릭하거나 깨웠을 때 기지개를 켜며 일어나는 모션
- 공 운반 및 환호 (Carrying and Happy): 물어온 공을 들고 기뻐서 방방 뛰는 댄스

4. 순수 Web Audio API 절차적 사운드
- 외부 MP3나 WAV 오디오 파일 없이 브라우저 내장 오디오 오실레이터(Oscillator)를 통해 8비트 레트로 신디사이저 효과음(쓰다듬기 소리, 타건 타자기음, 공 튕김음, 캐치 성공음, 낮잠 멜로디 등)을 실시간으로 합성하여 출력합니다.

5. 독립 데스크톱 앱 창 모드 지원
- Windows Microsoft Edge의 앱 모드 플래그(--app)를 연동하여 상단 브라우저 주소창이나 탭 없이 깔끔한 단독 데스크톱 창 형태로 실행됩니다.

---

## 프로젝트 디렉터리 구조 (Directory Structure)

```text
Clwad_desk/
|-- clawd-app/
|   |-- index.html          # 앱 마크업 구조 및 UI 레이아웃
|   |-- style.css           # 글래스모피즘 테마 및 CSS 스타일링
|   |-- app.js              # 물리 엔진, 상태 머신, 오디오, 렌더링 로직
|   `-- assets/
|       `-- svg/            # clawd-on-desk 기반 12종 공식 벡터 에셋
|-- run_app.bat             # Edge 앱 모드로 즉시 실행하는 런처 스크립트
|-- app.py                  # 크로스 플랫폼 파이썬 런처
|-- image.png               # Clawd 오리지널 레퍼런스 이미지
`-- README.md               # 프로젝트 안내 문서
```

---

## 실행 방법 (Quick Start)

### 1. 윈도우 단독 앱 모드 실행 (가장 권장)
프로젝트 루트 경로에 있는 `run_app.bat` 파일을 더블 클릭합니다.
주소창이 없는 독립된 깔끔한 데스크톱 펫 창이 즉시 실행됩니다.

### 2. 파이썬을 통한 실행
파이썬 환경이 설치되어 있는 경우 터미널에서 아래 명령어를 실행합니다.
```bash
python app.py
```

### 3. 브라우저에서 직접 열기
`clawd-app/index.html` 파일을 더블 클릭하여 Chrome, Edge, Safari, Firefox 등 원하는 브라우저에서 직접 실행할 수도 있습니다.

---

## 조작 및 단축키 안내 (Controls)

| 동작 | 단축키 | 마우스 조작 | 상세 설명 |
| :--- | :--- | :--- | :--- |
| 쓰다듬기 | Space | Clawd 캐릭터 클릭 | 애교 모션 전환 및 하트 이펙트 분출 |
| 공 던지기 | B | 바닥 영역 클릭 | 클릭한 지점으로 공을 던져 물어오기 놀이 진행 |
| 코딩 시작 | C | Start Coding 버튼 클릭 | 노트북을 펼치고 코딩 타건 모드 돌입 |
| 낮잠 자기 | S | Sleep / Nap 버튼 클릭 | 하품 모션 후 깊은 수면 모드로 전환 |
| 간식 주기 | F | Feed Snack 버튼 클릭 | 위에서 떨어지는 간식을 다가가서 섭취 |
| 좌우 산책 | A / D 또는 방향키 | - | 4족 꽃게 걸음으로 좌우 산책 |
| 효과음 토글 | M | Sound 버튼 클릭 | Web Audio 8비트 사운드 음소거 및 해제 |

---

## 기술 스택 (Tech Stack)

- Language: JavaScript (ES6+), HTML5, CSS3
- Graphics: Inline SVG Vector with Dynamic CSS Transforms and Animations
- Physics: Custom 2D Trajectory and Collision Engine (Euler Integration)
- Audio: Web Audio API (Synthesized Oscillators and Gain Nodes)
- Execution: Windows Edge App Container / Standalone Web Browser

---

## 라이선스 및 면책 (License)

- 이 프로젝트의 소스 코드는 학습 및 개인 데스크톱 펫 용도로 자유롭게 수정 및 활용하실 수 있습니다.
- Clawd 마스코트 캐릭터의 상표권 및 지식재산권은 Anthropic에 귀속되어 있습니다.
- 벡터 SVG 리소스의 저작권은 [clawd-on-desk](https://github.com/rullerzhou-afk/clawd-on-desk) 제작자에게 있습니다.

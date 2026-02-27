# White Light Studio - Class & Instructor Update Guide

이 문서는 새로운 클래스(강사)를 추가하거나 기존 강사 정보를 수정할 때, 동일한 화이트 라이트 스튜디오만의 **고급스러운 에디토리얼 무드**를 완벽하게 유지하기 위한 필수적인 디자인 가이드라인입니다. 나중에 페이지를 추가하실 때 꼭 참고해 주세요!

---

## 1. 강사 리스트 페이지 반영 (`src/app/class/page.tsx`)

새로운 강사를 등록하기 위해 가장 먼저 해야 할 일은 메인 클래스 목록(그리드)에 강사 카드를 추가하는 것입니다.

### 1-1. 강사 배열(Array) 데이터 추가
코드 상단의 `CLASSES` 배열에 새로운 강사 객체를 추가합니다.

```tsx
const CLASSES = [
    {
        id: "acoustic-kimsa-t",
        category: "ACOUSTIC GUITAR CLASS", // 영문 대문자 카테고리
        instructor: "김수안 (Kim Su-an)",   // 강사명 (한/영 병기 추천)
        title: "통기타 맞춤형 레슨 과정",    // 레슨 타이틀
        image: "/images/KimSA_T.jpg",      // public/images 내의 사진 경로
        link: "/class/kimsa_t",            // 클릭 시 이동할 상세 페이지 라우트
    },
    // ... 새로운 강사 객체 추가 (여기에 이어서 추가하시면 됩니다)
];
```

### 1-2. 썸네일 호버 효과 디자인 원칙
강사 썸네일은 스튜디오의 차분한 브랜드 무드를 위해 다음의 CSS 클래스 조합을 강제합니다.
*   **기본 상태**: `grayscale opacity-90 mix-blend-multiply` (약간 어두운 흑백 상태로 차분함 유지)
*   **호버(Hover) 상태**: `group-hover:grayscale-0 group-hover:opacity-100` (마우스를 올리면 원본 컬러로 스르륵 변하며 생동감 부여)
*   **금지 사항 (중요)**: 사진이 커지는 줌(Zoom/Scale) 효과는 여러 사진이 나열된 그리드에서 시선을 지나치게 분산시키므로 절대 사용하지 않습니다. (예: `group-hover:scale-105` 금지)

---

## 2. 강사 상세 페이지 생성 (`src/app/class/[강사id]/page.tsx`)

새로운 라우트 폴더(예: `src/app/class/new_teacher/`)를 만들고 내부에 `page.tsx`를 생성합니다. (가장 좋은 방법은 **기존 `kimsa_t/page.tsx` 파일의 코드를 전체 복사하여 내용만 수정**하는 것입니다.)

상세 페이지 레이아웃을 구성하는 **3대 핵심 섹션**의 디자인 가이드입니다.

### 2-1. 최상단 프로필 (Hero Profile Section)
강사의 얼굴과 핵심 타이틀이 노출되는 가장 중요한 첫인상 영역입니다.
*   **프로필 사진 원칙**: 리스트 페이지와 달리, 상세 페이지에서는 방문자에게 온기와 신뢰감을 주기 위해 **"항상 풀 컬러"**로 노출합니다. (`grayscale` 클래스 삭제 필수)
*   **둥근 사진 프레임**: `w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl` 테일윈드 클래스를 사용하여, 액자처럼 고급스럽게 돋보이게 만듭니다.

### 2-2. 커리큘럼 소개 (About Lesson & Process)
가장 많은 텍스트가 들어가는 곳으로, 가독성과 일관된 폰트 굵기가 생명입니다.
*   **잡지식 분할 레이아웃(Editorial Grid)**: 좌측 1칸(소제목), 우측 3칸(내용)의 비대칭 그리드를 사용합니다. (`grid-cols-1 lg:grid-cols-4`, `lg:col-span-1 / lg:col-span-3`)
*   **세그먼트 세로선**: 섹션 제목("ABOUT LESSON", "PROCESS") 앞에는 검은색 두꺼운 세로선을 배치합니다. (`border-l-[3px] border-black pl-4`)
*   **본문 폰트 강제 (Pretendard)**: 한글과 영문/숫자의 굵기 불균형(Mac 환경 브라우저 버그)을 방지하기 위해 반드시 **Pretendard 폰트를 강제 적용**해야 합니다. 본문 텍스트를 감싸는 부모 `div` 태그에 `font-pretendard text-lg font-light leading-relaxed` 클래스를 반드시 포함해야, 가늘고 세련된 느낌이 유지됩니다.

### 2-3. 하단 포트폴리오 섹션 (Instructor's Works)
강사의 역량을 확인하고 실제 레슨 문의로 이어지는 전환 영역(CTA)입니다.
*   **배경 분리**: 본문이 끝나면 백그라운드를 살짝 어두운 톤(`bg-neutral-50`)으로 깔아 흰색 본문 영역과 분리합니다. 
*   **타이트한 상하 여백 유지**: 위아래 섹션 간격이 너무 멀어지지 않도록 패딩을 `py-16 mb-16` 정도로 컴팩트하게 조절합니다. 상단 과정(Process)을 다 읽은 후의 흐름이 포트폴리오(사운드클라우드) 버튼까지 긴장감 있게 이어지도록 합니다. (예전에 사용했던 `py-32` 같은 과도한 여백은 공간이 비어 보이므로 피해야 합니다.)

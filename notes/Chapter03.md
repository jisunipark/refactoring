# Chapter 3 - 코드에서 나는 악취

[velog](https://velog.io/@jisunipark/%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81-2%ED%8C%90-Chapter-3-%EC%BD%94%EB%93%9C%EC%97%90%EC%84%9C-%EB%82%98%EB%8A%94-%EC%95%85%EC%B7%A8)

코드에서 악취가 날 때 그것이 무엇 때문에 나는 냄새인지 찾을 수 있도록(ㅋㅋ) 코드 악취의 요소 24가지를 설명한다. 개인적으로 이번 챕터는 저자가 너무 말을 웃기게 해서 재밌게 읽은 챕터다. (일단 코드 악취라는 말부터가 재미있음)

그런데 각각의 문제 유형에 대한 해결책으로 구체적 리팩터링 단계를 언급하는 부분이 많아서 책을 끝까지 읽은 후에 다시 돌아와서 재차 읽어보면 더 제대로 이해할 수 있을 것 같다. 우선은 쭉 훑어보는 식으로 읽었다.

우선 악취 요소 24가지는 다음과 같다:

1. 기이한 이름
2. 중복 코드
3. 긴 함수
4. 긴 매개변수 목록
5. 전역 데이터
6. 가변 데이터
7. 뒤엉킨 변경
8. 산탄총 수술
9. 기능 편애
10. 데이터 뭉치
11. 기본형 집착
12. 반복되는 switch문
13. 반복문
14. 성의 없는 요소
15. 추측성 일반화
16. 임시 필드
17. 메세지 체인
18. 중개자
19. 내부자 거래
20. 거대한 클래스
21. 서로 다른 인터페이스의 대안 클래스들
22. 데이터 클래서
23. 상속 포기
24. 주석

## Quotes & Notes

> 코드를 명료하게 표현하는 데 가장 중요한 요소 하나는 바로 ‘**이름**’이다. 그래서 함수, 모듈, 변수, 클래스 등은 그 이름만 보고도 각각이 무슨 일을 하고 어떻게 사용해야 하는지 명확히 알 수 있도록 엄청나게 신경 써서 이름을 지어야 한다.
> \- 3.1 기이한 이름

> 똑같은 코드 구조가 여러 곳에서 반복된다면 하나로 **통합**하여 더 나은 프로그램을 만들 수 있다.
> \- 3.2 중복 코드

> 짧은 함수로 구성된 코드를 이해하기 쉽게 만드는 가장 확실한 방법은 좋은 이름이다. **함수 이름**을 잘 지어두면 본문 코드를 볼 이유가 사라진다. 그러기 위해서는 훨씬 적극적으로 함수를 쪼개야 한다. 우리는 **주석을 달아야 할 만한 부분은 무조건 함수로** 만든다. 그 함수 본문에는 원래 주석으로 설명하려던 코드가 담기고, 함수 **이름은 동작이 아닌 ‘의도’가 드러나게 짓는다.** (…) 여기서 핵심은 함수의 길이가 아닌, 함수의 목적(의도)과 구현하는 코드의 괴리가 얼마나 큰가다. 즉, ‘무엇을 하는지’를 코드가 잘 설명해주지 못할수록 함수로 만드는 게 유리하다.
> \- 3.3 긴 함수

> 매개변수 목록이 길어지면 그 자체로 이해하기 어려울 때가 많았다. (…) 클래스는 **매개변수 목록을 줄이는** 데 효과적인 수단이기도 하다.
> \- 3.4 긴 매개변수 목록

> 값을 다른 곳에서 설정할 수 있는 **가변 데이터가 풍기는 악취**는 특히 고약하다.
> \- 3.6 가변 데이터

> 뒤엉킨 변경은 **단일 책임 원칙(SRP)**이 제대로 지켜지지 않았을 때 나타난다.
> \- 3.7 뒤엉킨 변경

![](https://velog.velcdn.com/images/jisunipark/post/1222b059-2684-4b7e-a3c8-49dcac893f6c/image.png)

> 프로그램을 모듈화할 때는 코드를 여러 영역으로 나눈 뒤 영역 안에서 이뤄지는 상호작용은 최대한 늘리고 영역 사이에서 이뤄지는 상호작용은 최소로 줄이는 데 주력한다.
> \- 3.9 기능 편애

> 이 냄새는 ‘나중에 필요할 거야’라는 생각으로 당장은 필요 없는 모든 종류의 후킹 포인트와 특이 케이스 처리 로직을 작성해둔 코드에서 풍긴다. (…) **당장 걸리적거리는 코드는 눈앞에서 치워버리자.**
> \- 3.15 추측성 일반화

> 주석이 많으면 이 장에서 소개한 온갖 악취를 풍기는 코드가 나오기 쉽다.
> \- 3.24 주석

> **주석을 남겨야겠다는 생각이 들면, 가장 먼저 주석이 필요 없는 코드로 리팩터링해본다.**
> \- 3.24 주석
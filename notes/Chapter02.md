# Chapter 2 - 리팩터링 원칙

[velog](https://velog.io/@jisunipark/%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81-2%ED%8C%90-Chapter-2-%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81-%EC%9B%90%EC%B9%99)

리팩터링을 ‘왜’ 해야 하는지 납득이 되게 하는 챕터다. 리팩터링을 왜 해야하는지, 그리고 어떻게 해야 하는지를 말한다. 개인적으로 ‘아하!’ 모먼트와 ‘오호~’ 모먼트가 많았던 챕터다.

## Quotes & Notes

> **리팩터링**: 소프트웨어의 **겉보기 동작은 그대로 유지**한 채, 코드를 이해하고 수정하기 쉽도록 내부 구조를 변경하는 기법
> (…) ‘겉보기 동작’이란 표현을 썼다. 리팩터링하기 전과 후의 코드가 똑같이 동작해야 한다는 뜻이다.

> 누군가 “리팩터링하다가 코드가 깨져서 며칠이나 고생했다”라고 한다면, 십중팔구 리팩터링한 것이 아니다.

![](https://velog.velcdn.com/images/jisunipark/post/6e4f8b46-0156-4b30-9479-8f504afb71de/image.jpeg)

> 기능을 추가할 때는 **‘기능 추가’ 모자**를 쓴 다음 기존 코드는 절대 건드리지 않고 새 기능을 추가하기만 한다. (…) 반면 리팩터링 할 때는 **‘리팩터링’ 모자**를 쓴 다음 기능 추가는 절대 하지 않기로 다짐한 뒤 오로지 코드 재구성에만 전념한다.

_→ ‘모자’라고 표현한 게 귀엽기도 하고 적절한 비유인 것 같다. 무슨 말인지 확 와닿는다. 나는 기능 추가를 하다가 거슬리는 코드가 보이면 리팩터링 자주 했는데.. 코드 작성을 할 때 목적을 정확하게 두자. 모자 쓰고 코드 짜기!_

> **중복 코드를 제거**하면 모든 코드가 언제나 고유한 일을 수행함을 보장할 수 있으며, 이는 바람직한 설계의 핵심이다.

![](https://velog.velcdn.com/images/jisunipark/post/cd25bfc5-434f-4422-b62a-ac6a0048b9d6/image.jpeg)

> (좋은 설계를 한) 이들은 기존에 작성한 코드를 최대한 활용할 수 있어서 새 기능을 더 빨리 추가한다. (…) 나는 이 효과를 **설계 지구력 가설**(Design Stamina Hypothesis)라고 부른다. **내부 설계**에 심혈을 기울이면 소프트웨어의 지구력이 높아져서 **빠르게 개발할 수 있는 상태**를 더 오래 지속할 수 있다.

> 비슷한 일을 **세 번째** 하게 되면 리팩터링 한다. (3의 법칙)

> 리팩터링의 멋진 점은 각각의 작은 단계가 **코드를 깨뜨리지 않는다**는 사실이다.

> 나는 리팩터링 시간을 일정에 따로 잡아두지 않고, 대부분의 리팩터링을 다른 일을 하는 중에 처리한다.

> 보기 싫은 코드를 **발견하면 리팩터링** 하자. 그런데 잘 작성된 코드 역시 수많은 리팩터링을 거쳐야 한다.

> 무언가 수정하려 할 때는 **먼저 수정하기 쉽게 정돈**하고(단, 만만치 않을 수 있다) 그런 다음 쉽게 수정하자.
> \_ 켄트 백

> 계획된 리팩터링을 하게 되는 일은 최소한으로 줄여야 한다. 리팩터링 작업 대부분은 **드러나지 않게, 기회가 될 때마다** 해야 한다.

> 나는 **기회가 닿는 대로 코드 리뷰**를 한다.

> 내가 경험한 가장 좋은 방법은 작성자와 나란히 앉아서 코드를 훑어가면서 리팩터링하는 것이다. 이렇게 하면 자연스럽게 (프로그래밍 과정 안에 지속적인 코드 리뷰가 녹아 있는) **짝 프로그래밍**이 된다.

> 내 경험상 리팩터링하면 소프트웨어를 **빠르게** 만드는 데 아주 효과적이다.

> 리팩터링의 궁극적인 목적은 **개발 속도를 높여서, 더 적은 노력으로 더 많은 가치**를 창출하는 것이다.

> 나는 **준비를 위한 리팩터링**을 하면 변경을 훨씬 쉽게 할 수 있다고 확신한다. 그래서 새 기능을 구현해넣기 편해지겠다 싶은 리팩터링이라면 주저하지 않고 리팩터링부터 한다.

> 리팩터링하도록 이끄는 동력은 어디까지나 **경제적인 효과**에 있다.

> 내가 선호하는 방식은 **코드의 소유권을 팀에 두는 것**이다. 그래서 팀원이라면 누구나 팀이 소유한 코드를 수정할 수 있게 한다. 설사 다른 사람이 작성했더라도 말이다.

_→ 공감하는 게, 몇 차례 팀 프로젝트를 진행하면서 리팩터링을 하려면 다른 사람이 작성한 코드를 건드려야 해서 일단 두었던 적이 꽤 있었던 것 같다. 코드의 “소유권”은 크게 생각해보지 못했던 것 같은데 협업 전 이런 부분을 먼저 함께 얘기해보는 것도 좋겠다._

> 머지가 복잡해지는 문제는 기능별 브랜치들이 독립적으로 개발되는 기간이 길어질수록 기하급수적으로 늘어난다. (…) 나와 같은 사람들은 **(브랜치 통합 주기가) 더 짧아야 한다**고 주장한다. 이 방식을 지속적 통합(CI), 또는 트렁크 기반 개발(TBD)이라 한다. (…) 머지의 복잡도를 줄일 수 있어서 CI를 선호하기도 하지만, 가장 큰 이유는 리팩터링과 궁합이 아주 좋기 때문이다.

_→ 이것도 팀 프로젝트 경험을 토대로 생각했을 때 아주 공감하는 내용이다. 아무래도 브랜치가 메인 브랜치에서 나가 오랫동안 있으면 머지할 때 컨플릭트가 많아지니 자연스레 통합 주기를 짧게 유지하려고 하게 되었던 것 같다._

> 팀으로 개발하면서 리팩터링을 하려면 각 팀원이 다른 사람의 작업을 방해하지 않으면서 언제든지 리팩터링할 수 있어야 한다. 지속적 통합(CI)을 적극 권장하는 이유도 바로 이 때문이다.

> **자가 테스트 코드**는 리팩터링을 할 수 있게 해줄 뿐만 아니라, 새 기능 추가도 훨씬 안전하게 진행할 수 있도록 도와준다. 실수로 만든 버그를 빠르게 찾아서 제거할 수 있기 때문이다. 이때 핵심은 테스트가 실패한다면 가장 최근에 통과한 버전에서 무엇이 달라졌는지 살펴볼 수 있다는 데 있다.

> 데이터베이스 리팩터링은 프로덕션 환경에 여러 단계로 나눠서 릴리스하는 것이 대체로 좋다는 점에서 다른 리팩터링과 다르다.

> 리팩터링하면 소프트웨어가 느려질 수도 있는 건 사실이다. 하지만 그와 동시에 성능을 튜닝하기는 더 쉬워진다. 하드 리얼타임 시스템을 제외한 소프트웨어를 빠르게 만드는 비결은, 먼저 튜닝하기 쉽게 만들고 나서 원하는 속도가 나게끔 튜닝하는 것이다.

> 나는 빠른 소프트웨어를 작성하는 방법 세 가지를 경험했다.

1. 그 중 가장 엄격한 방법은 시간 **예산 분배 방식**으로, 하드 리얼타임 시스템에서 많이 사용한다. (…)
2. 두 번째 방법은 **끊임없이 관심을 기울이는 것**이다. (…)
3. 의도적으로 성능 최적화에 돌입하기 전까지는 **성능에 신경쓰지 않고 코드를 다루기 쉽게 만드는 데** 집중한다. (…)
   >

> 성능에 대한 흥미로운 사실은, 대부분 프로그램은 전체 코드 중 극히 일부에서 대부분의 시간을 소비한다는 것이다. 그래서 코드 전체를 고르게 최적화한다면 그중 90%는 효과가 거의 없기 때문에 시간 낭비인 셈이다.

> 프로그램을 잘 리팩터링해두면 이런 식의 최적화에 두 가지 면에서 도움이 된다.

1. 첫째, 성능 튜닝에 투입할 **시간**을 벌 수 있다. (…)
2. 둘째, 리팩터링이 잘 되어 있는 프로그램은 성능을 더 **세밀**하게 분석할 수 있다. (…)
   >

> 리팩터링은 성능 좋은 소프트웨어를 만드는 데 기여한다. 단기적으로 보면 리팩터링 단계에서는 성능이 느려질 수도 있다. 하지만 최적화 단계에서 코드를 튜닝하기 훨씬 쉬워지기 때문에 결국 더 빠른 소프트웨어를 얻게 된다.

> 자동 리팩터링을 제대로 구현하려면 코드를 텍스트 상태가 아닌, 구문 트리로 해석해서 다뤄야 한다. 구문 트리를 조작하는 방식이 코드의 원래 의미를 보존하는 데 훨씬 유리하기 때문이다.

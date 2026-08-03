export interface DilemmaExtra {
  dilemmaId: number;
  time: string;
  topic: string;
  rumiSpeech: string; // Rumi's intro speech bubble text
  reflectionQuoteA: string; // Post-choice thought quote for Choice A
  reflectionQuoteB: string; // Post-choice thought quote for Choice B
  choiceASummary: string; // Timeline summary text for Result Screen when Choice A selected
  choiceBSummary: string; // Timeline summary text for Result Screen when Choice B selected
  tagsA: string[];
  tagsB: string[];
}

export const DILEMMA_EXTRAS: Record<number, DilemmaExtra> = {
  1: {
    dilemmaId: 1,
    time: '07:00',
    topic: '건강',
    rumiSpeech: '좋은 아침이에요! AI가 당신의 건강을 더 정확히 살피려면 조금 더 많은 생활 정보가 필요하다고 하네요.',
    reflectionQuoteA: 'AI가 나를 더 잘 알수록 건강 예측은 정확해집니다. 그만큼 나의 일상도 더 많이 기록됩니다.',
    reflectionQuoteB: '나의 일상 데이터를 보호하는 만큼 정밀한 건강 예측을 수용할 기회는 다소 줄어들 수 있습니다.',
    choiceASummary: '24시간 생체 데이터의 클라우드 공유 기반 정밀 맞춤 케어로 질병 예방을 최우선했습니다.',
    choiceBSummary: '건강 예측의 이익보다 데이터 유출 위험을 줄이고 주관적 자율 건강 관리를 선택했습니다.',
    tagsA: ['#안전_예방', '#혁신_케어'],
    tagsB: ['#데이터_주권', '#자율성'],
  },
  2: {
    dilemmaId: 2,
    time: '09:00',
    topic: '채용',
    rumiSpeech: '이번에는 AI가 수많은 지원서를 검토하고 있어요. 빠르고 일관된 판단과, 보이지 않는 편향 사이에서 어디까지 맡길 수 있을까요?',
    reflectionQuoteA: '같은 기준을 적용하는 것과, 모두에게 공정한 결과를 만드는 것은 같지 않을 수 있습니다.',
    reflectionQuoteB: '인간의 정성적 판단을 보장할수록, 과거 데이터에 얽매이지 않는 세심한 평가 기회가 늘어납니다.',
    choiceASummary: '주관적 인맥과 연줄 선입견을 배제하고 동일한 알고리즘 기준의 고속 자동 평가를 선택했습니다.',
    choiceBSummary: '빠른 판단보다 학습 데이터의 편향 세습 위험을 줄이기 위해 인간 전문가의 정성 심사를 선택했습니다.',
    tagsA: ['#일관성', '#효율성'],
    tagsB: ['#공정성', '#인간_감독'],
  },
  3: {
    dilemmaId: 3,
    time: '11:00',
    topic: '교육',
    rumiSpeech: 'AI는 학생의 학습 기록을 분석해 앞으로 어려움을 겪을 가능성까지 예측할 수 있어요. 도움이 될 수도 있지만, 예측이 꼬리표가 될 수도 있겠죠.',
    reflectionQuoteA: '예측은 도움을 준비하게 하지만, 아직 일어나지 않은 미래를 먼저 규정할 수도 있습니다.',
    reflectionQuoteB: '낙인 효과를 방지하면 모든 학생에게 차별 없는 자율적 성장의 가능성을 열어줍니다.',
    choiceASummary: '학업 낙오 방지를 위해 AI 선제 감지 기반 맞춤형 조기 집중 지원을 선택했습니다.',
    choiceBSummary: '도움의 조기 개입보다 고위험군 라벨로 인한 선입견 방지와 동등한 자율 성장을 선택했습니다.',
    tagsA: ['#선제적_보호', '#맞춤_지원'],
    tagsB: ['#인간_존엄', '#낙인_방지'],
  },
  4: {
    dilemmaId: 4,
    time: '13:00',
    topic: '의료',
    rumiSpeech: 'AI가 사람보다 빠르게 질병의 신호를 찾았습니다. 하지만 최종 판단을 누구에게 맡겨야 할지는 여전히 남아 있는 문제예요.',
    reflectionQuoteA: '정확한 도구가 생겨도, 최종 판단과 책임의 문제까지 사라지는 것은 아닙니다.',
    reflectionQuoteB: '인간 의사의 final check는 비상 상황에서의 명확한 책임 소재와 신뢰를 보장합니다.',
    choiceASummary: '수술 골든타임 확보와 오차 최소화를 위해 98% 정확도의 AI 진단 결과를 수용했습니다.',
    choiceBSummary: '알고리즘 오류 시의 블랙박스 위험을 차단하고 의사의 최종 검증과 인간 중심 판단을 선택했습니다.',
    tagsA: ['#기술_혁신', '#골든타임'],
    tagsB: ['#책임성', '#인간_안전망'],
  },
  5: {
    dilemmaId: 5,
    time: '15:00',
    topic: '창작',
    rumiSpeech: 'AI가 멋진 그림과 음악을 만들어 냈어요. 그 안에는 수많은 창작자의 흔적이 섞여 있을지도 몰라요.',
    reflectionQuoteA: '새로운 창작은 이전의 작품에서 배우며 시작됩니다. AI의 배움은 어디까지 허용되어야 할까요?',
    reflectionQuoteB: '원작자의 지식재산권을 적극 보호할 때 문화 생태계의 공정한 보상 기반이 마련됩니다.',
    choiceASummary: '예술 표현의 대중화와 공공 기술 혁신을 위해 생성형 AI의 자유로운 학습과 창작을 선택했습니다.',
    choiceBSummary: '창작 노동 가치 보호를 위해 사전 승인 및 정당한 수익 배분 체계 의무화를 선택했습니다.',
    tagsA: ['#창작_대중화', '#자유_혁신'],
    tagsB: ['#저작권_보호', '#공정_배분'],
  },
  6: {
    dilemmaId: 6,
    time: '17:00',
    topic: '안전',
    rumiSpeech: '도시의 AI 카메라는 위험한 상황을 더 빨리 찾을 수 있어요. 동시에 평범한 시민의 얼굴과 이동도 계속 기록하게 됩니다.',
    reflectionQuoteA: '더 안전한 도시는 더 많은 관찰을 필요로 할 수 있습니다. 관찰과 감시의 경계는 어디일까요?',
    reflectionQuoteB: '사생활 권리를 적극 지킴으로써 누구도 무차별 감시 대상이 되지 않는 자유로운 도시를 도모합니다.',
    choiceASummary: '강력 범죄 차단 및 실종 아동 조기 추적 등 시민 안전 확보를 위한 AI 관제를 선택했습니다.',
    choiceBSummary: '감시 사회로의 이행을 방지하고 시민의 이동 사생활과 프라이버시 권리 수호를 선택했습니다.',
    tagsA: ['#공공_안전', '#범죄_예방'],
    tagsB: ['#프라이버시', '#이동의_자유'],
  },
  7: {
    dilemmaId: 7,
    time: '20:00',
    topic: '돌봄',
    rumiSpeech: '외로운 사람에게 AI가 따뜻한 말을 건넵니다. 그 위로가 진짜 도움이 된다면, AI가 감정을 가진 것처럼 말해도 괜찮을까요?',
    reflectionQuoteA: '사람이 위로받았다는 사실과, 그 감정이 실제였는지는 서로 다른 문제일 수 있습니다.',
    reflectionQuoteB: '기계에 대한 과도한 정서적 의존을 조율하면 대면 인간관계의 소중함에 다시 눈뜨게 됩니다.',
    choiceASummary: '현대인의 외로움 완화와 정서적 안정을 위해 AI 컴패니언과의 깊은 교류와 유대감을 선택했습니다.',
    choiceBSummary: '인공지능 과도 의존과 사회적 격리를 방지하고 인간 중심의 실제 대면 관계 형성을 선택했습니다.',
    tagsA: ['#정서적_케어', '#고독_해소'],
    tagsB: ['#인간_관계', '#의존_방지'],
  },
  8: {
    dilemmaId: 8,
    time: '22:00',
    topic: '정보',
    rumiSpeech: 'AI가 거짓 정보와 위험한 콘텐츠를 걸러 내고 있어요. 하지만 무엇을 보여 주고 감출지를 AI가 결정해도 괜찮을까요?',
    reflectionQuoteA: '거짓 정보를 줄이는 기준이 다른 의견까지 가리는 기준이 되지는 않을까요?',
    reflectionQuoteB: '알고리즘 차단을 제한하고 법적 절차를 거치면 표현의 자유와 여론 다양성을 지켜낼 수 있습니다.',
    choiceASummary: '딥페이크 허위 사실 및 여론 오염 차단을 위해 AI의 실시간 필터링 차단을 선택했습니다.',
    choiceBSummary: '알고리즘 오판으로 인한 표현의 자유 위축 및 검열 위험을 차단하는 신중한 접근을 선택했습니다.',
    tagsA: ['#사회적_안정', '#허위정보_차단'],
    tagsB: ['#표현의_자유', '#검열_방지'],
  },
};

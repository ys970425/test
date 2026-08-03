import { ResultTypeData, CalculatedScores } from '../types';

export const RESULT_TYPES: Record<string, ResultTypeData> = {
  HD: {
    code: 'HD',
    title: 'HD 인간존엄 수호자 🛡️',
    subtitle: '기술보다 사람이 중심에 서야 함을 굳건히 믿는 가치 수호자',
    emoji: '🛡️',
    badgeBg: 'bg-amber-100 border-amber-300',
    badgeText: 'text-amber-800',
    oneLiner: '아무리 뛰어난 AI 기술이라도 인간의 자율성과尊嚴(존엄)을 넘어서서는 안 된다고 믿는 수호자입니다.',
    coreValues: ['인간의 자율적 결정권', '자기 결정 권리', '인격적 가치 존중'],
    traits: [
      'AI의 자동 판단에 주도권을 넘겨주기보다, 인간의 최종 선택과 재량을 강조했습니다.',
      '효율성이나 속도보다는 인간의 존엄성과 낙인 효과 방지, 정서적 유대의 순수성을 우선했습니다.'
    ],
    strengths: [
      '기술 만능주의에 휩쓸리지 않고 비판적 태도를 유지하는 원칙 중심적 사고',
      '인간의 소외와 자동화 시스템에 의한 권리 침해를 예민하게 감지하는 통찰력'
    ],
    blindSpots: [
      '기술 도입을 과도하게 견제하다 보면, 사회 전체가 얻을 수 있는 안전이나 효율성의 이익을 놓칠 수 있습니다.'
    ],
    reflectionQuestion: '인간의 자율성을 지키면서도 기술이 가져다주는 대규모 안전과 효율혜택을 함께 품을 방법은 무엇일까요?'
  },
  FE: {
    code: 'FE',
    title: 'FE 공정성 설계자 ⚖️',
    subtitle: '모두에게 편향 없이 균등한 기회가 돌아가야 함을 지향하는 설계자',
    emoji: '⚖️',
    badgeBg: 'bg-indigo-100 border-indigo-300',
    badgeText: 'text-indigo-800',
    oneLiner: 'AI가 만드는 미래 사회가 차별 없이 누구에게나 공평하고 포용적이어야 한다고 강조하는 가치관입니다.',
    coreValues: ['데이터 편향 차단', '기회의 균등 및 포용성', '소수자 권익 보호'],
    traits: [
      'AI 학습 데이터 속에 숨겨진 편향이나 저작권 침해, 차별 유발 요소를 심각하게 검토했습니다.',
      '기술의 이익이 특정 계층에 편중되거나 누군가를 소외시키지 않도록 사회적 공정성을 최우선으로 두었습니다.'
    ],
    strengths: [
      '약자와 소수자의 관점을 배려하며 알고리즘의 공정성을 다각도로 검증하려는 공감 능력',
      '기술이 가져올 사회적 파급력과 형평성에 대한 구조적 분석력'
    ],
    blindSpots: [
      '완벽한 절차적 공정성만을 추구하다 보면 신속한 기술 보급이나 혁신의 타이밍을 다소 늦출 수 있습니다.'
    ],
    reflectionQuestion: '완벽한 데이터 공정성을 기다리는 동안 늦어지는 기술 혁신의 기회비용을 어떻게 보완할 수 있을까요?'
  },
  DS: {
    code: 'DS',
    title: 'DS 데이터 주권자 🔐',
    subtitle: '내 정보와 프라이버시는 스스로 통제해야 한다고 믿는 파수꾼',
    emoji: '🔐',
    badgeBg: 'bg-emerald-100 border-emerald-300',
    badgeText: 'text-emerald-800',
    oneLiner: '데이터가 곧 권력이 되는 시대, 나의 민감 정보와 사생활 보호를 확고히 주장하는 주권자입니다.',
    coreValues: ['개인정보 자기결정권', '디지털 프라이버시', '과잉 감시 경계'],
    traits: [
      '편리함이나 맞춤형 서비스의 달콤함보다 데이터 유출 및 감시 사회에 대한 위험을 엄격히 경계했습니다.',
      '얼굴 인식, 생체 정보 전송 등 사생활 영역에 대한 AI 시스템의 무분별한 개입을 저지하려 했습니다.'
    ],
    strengths: [
      '거대 데이터 플랫폼이나 디지털 감시망으로부터 개인의 자유와 독립성을 지켜내는 경계심',
      '자신의 개인정보에 대해 높은 주체적 책임감을 발휘하는 태도'
    ],
    blindSpots: [
      '데이터 공유를 철저히 차단할 경우, 맞춤형 의료나 정밀 건강 관리 등 데이터 기반 서비스의 수혜가 제한될 수 있습니다.'
    ],
    reflectionQuestion: '안전한 프라이버시 보호 장치를 전제로 하면서도 개인화된 AI 혜택을 누리는 타협점은 어디일까요?'
  },
  SR: {
    code: 'SR',
    title: 'SR 안전 항해사 🚦',
    subtitle: '예측하지 못한 위험과 오작동으로부터 사회를 보호하는 파수꾼',
    emoji: '🚦',
    badgeBg: 'bg-rose-100 border-rose-300',
    badgeText: 'text-rose-800',
    oneLiner: '기술의 발전 속도보다 중요한 것은 단 한 건의 사고도 방지하는 철저한 안전망이라고 생각하는 항해사입니다.',
    coreValues: ['사회적 안전망 구축', '위험 및 사고 방지', '시스템 신뢰성'],
    traits: [
      '의료 진단, 공공 안전, 허위 정보 차단 등 위험 요소가 존재하는 상황에서 통제와 안전 대책을 선택했습니다.',
      'AI 오작동이나 딥페이크 확산 등으로 인한 사회적 질서 혼란을 가장 큰 위협으로 인식했습니다.'
    ],
    strengths: [
      '기술의 잠재적 부작용과 위험 요소를 체계적으로 예측하고 방지하는 신중함',
      '공공의 안정과 시스템의 신뢰도를 확실하게 다져나가는 리스크 관리 능력'
    ],
    blindSpots: [
      '안전과 통제에 지나치게 치중하다 보면 시민의 표현의 자유나 개인의 사생활 권리가 다소 위축될 수 있습니다.'
    ],
    reflectionQuestion: '위험을 통제하는 과정에서 시민들의 자율적인 표현의 자유와 프라이버시가 침해받지 않으려면 무엇이 필요할까요?'
  },
  AT: {
    code: 'AT',
    title: 'AT 책임 추적자 🔍',
    subtitle: '알고리즘 뒤에 숨은 책임의 주체를 분명히 밝혀내려는 탐정',
    emoji: '🔍',
    badgeBg: 'bg-sky-100 border-sky-300',
    badgeText: 'text-sky-800',
    oneLiner: 'AI가 내린 판단의 결과에 대해 누가 책임질 것인가를 투명하게 규명하는 것을 최우선으로 여깁니다.',
    coreValues: ['책임 소재 투명성', '설명 가능성', '검증과 인간 감독'],
    traits: [
      'AI가 높은 정확도를 내더라도 ‘블랙박스’ 오판 위험에 대비해 인간 의사나 전문가의 최종 검증 책임을 요구했습니다.',
      '기술의 편리함 뒤에 숨겨진 책임 소재의 모호함을 차단하고 투명한 관리 시스템을 선호했습니다.'
    ],
    strengths: [
      '기술적 결과에 무비판적으로 의존하지 않고 법적·윤리적 책임 주체를 투명하게 세우는 책임감',
      '알고리즘의 오류 가능성을 꼼꼼하게 검증하려는 신중함'
    ],
    blindSpots: [
      '모든 과정에 복잡한 인간 검증과 책임을 요구하다 보면, AI 시스템의 신속한 응답성과 이점을 반감시킬 수 있습니다.'
    ],
    reflectionQuestion: '실시간으로 빠르게 움직이는 AI 기술 환경에서 책임의 투명성을 확보함과 동시에 신속성을 살릴 방안은 무엇일까요?'
  },
  PI: {
    code: 'PI',
    title: 'PI 공공혁신가 🌐',
    subtitle: '기술의 과감한 활용으로 사회 전체의 이익과 혁신을 이끄는 개척자',
    emoji: '🌐',
    badgeBg: 'bg-purple-100 border-purple-300',
    badgeText: 'text-purple-800',
    oneLiner: 'AI 기술을 주저 없이 도입하여 사회 전반의 문제를 해결하고 새로운 가능성을 열어야 한다고 믿는 혁신가입니다.',
    coreValues: ['기술의 파급 효과', '사회적 효용 극대화', '과감한 도전'],
    traits: [
      '생성형 AI의 가치, 맞춤형 헬스케어, 대규모 공공 안전 등 AI 도입에 따른 커다란 유용성과 혁신성을 높이 평가했습니다.',
      '소소한 규제나 불확실성 때문에 대승적 차원의 기술적 편의와 사회적 효용을 포기해선 안 된다고 보았습니다.'
    ],
    strengths: [
      '과감한 기술 수용을 통해 생산성과 사회적 삶의 질을 대폭 끌어올리는 미래지향적 추진력',
      '새로운 기술적 시도에 대한 유연한 수용성과 열린 시각'
    ],
    blindSpots: [
      '속도감 있는 혁신을 추진하는 과정에서 소수의 저작권자, 사생활 권리, 소외 계층의 목소리가 묻힐 수 있습니다.'
    ],
    reflectionQuestion: '빠른 기술 혁신의 그늘 아래에 소외되거나 상처 입을 수 있는 소수 권리자들을 어떻게 어루만질 수 있을까요?'
  },
  TR: {
    code: 'TR',
    title: 'TR 기술 현실주의자 ⚙️',
    subtitle: '이념보다 실제적 성능과 통계적 효과를 균형 있게 측정하는 실용주의자',
    emoji: '⚙️',
    badgeBg: 'bg-slate-100 border-slate-300',
    badgeText: 'text-slate-800',
    oneLiner: '추상적인 윤리 담론보다 객관적인 데이터와 실질적인 수치적 수혜를 근거로 유연하게 판단하는 실용주의자입니다.',
    coreValues: ['실용적 효율성', '통계적 성능', '합리적 균형'],
    traits: [
      '특정 원칙이나 감정에 치우치지 않고, AI의 우수한 진단율(98%)이나 실제 데이터 효율성을 객관적으로 수용했습니다.',
      '상황에 따라 이득과 손실을 냉철하게 비교하여 현실적으로 가장 효과적인 선택을 내리고자 했습니다.'
    ],
    strengths: [
      '도그마에 갇히지 않고 실제 수치와 통계에 기반하여 유연하고 효율적인 의사결정을 내리는 합리성',
      '현실적 대안을 조속히 찾아내는 실용적 문제 해결력'
    ],
    blindSpots: [
      '숫자로 측정하기 어려운 인간의 존엄, 마음의 상처, 문화적 신뢰와 같은 질적 가치를 간과할 위험이 있습니다.'
    ],
    reflectionQuestion: '통계 수치로 다 담아낼 수 없는 인간 존엄과 정서적 가치를 의사결정에 어떻게 포함할 수 있을까요?'
  },
  CM: {
    code: 'CM',
    title: 'CM 맥락 조정자 🧭',
    subtitle: '양극단의 딜레마 속에서 상황별 균형과 맥락을 세심하게 조율하는 중용의 조종사',
    emoji: '🧭',
    badgeBg: 'bg-violet-100 border-violet-300',
    badgeText: 'text-violet-800',
    oneLiner: '어느 한쪽에 쏠리지 않고, 질문의 고유한 맥락과 조건에 따라 다각도로 고민하며 최선의 균형을 찾는 조율자입니다.',
    coreValues: ['상황적 맥락 존중', '다각적 균형', '유연한 사고'],
    traits: [
      '5가지 윤리 축 전반에서 튀지 않고 치우침 없는 균형 잡힌 가치 지향점을 보였습니다.',
      '선과 악의 일방적 선택이 아닌, 각 상황의 장단점과 위험 요소를 세밀하게 비교하며 고심한 흔적이 드러납니다.'
    ],
    strengths: [
      '극단적인 가치 충돌 사이에서 중재안을 마련하고 다각적 이해관계를 완충해 내는 대화와 조정 능력',
      '복잡한 상황을 복합적으로 이해하는 경직되지 않은 유연성'
    ],
    blindSpots: [
      '상황별 유연함이 자칫 명확한 주관이나 원칙이 부재하다는 오해를 받거나, 단호한 결정이 필요한 순간을 지체시킬 수 있습니다.'
    ],
    reflectionQuestion: '상황에 따른 유연함을 지키면서도, 결코 타협할 수 없는 절대적 윤리선은 무엇인가요?'
  }
};

export function calculateEthicsScores(answers: { dilemmaId: number; selectedChoice: 'A' | 'B' }[], dilemmas: any[]): CalculatedScores {
  const totals = {
    dignity: 0,
    fairness: 0,
    privacy: 0,
    safety: 0,
    innovation: 0
  };

  const maxTotals = {
    dignity: 0,
    fairness: 0,
    privacy: 0,
    safety: 0,
    innovation: 0
  };

  // Calculate total chosen score & max possible score across 8 dilemmas
  dilemmas.forEach(dilemma => {
    const maxDig = Math.max(dilemma.choiceA.scores.dignity, dilemma.choiceB.scores.dignity);
    const maxFair = Math.max(dilemma.choiceA.scores.fairness, dilemma.choiceB.scores.fairness);
    const maxPriv = Math.max(dilemma.choiceA.scores.privacy, dilemma.choiceB.scores.privacy);
    const maxSafe = Math.max(dilemma.choiceA.scores.safety, dilemma.choiceB.scores.safety);
    const maxInno = Math.max(dilemma.choiceA.scores.innovation, dilemma.choiceB.scores.innovation);

    maxTotals.dignity += maxDig;
    maxTotals.fairness += maxFair;
    maxTotals.privacy += maxPriv;
    maxTotals.safety += maxSafe;
    maxTotals.innovation += maxInno;

    const ans = answers.find(a => a.dilemmaId === dilemma.id);
    if (ans) {
      const choice = ans.selectedChoice === 'A' ? dilemma.choiceA : dilemma.choiceB;
      totals.dignity += choice.scores.dignity;
      totals.fairness += choice.scores.fairness;
      totals.privacy += choice.scores.privacy;
      totals.safety += choice.scores.safety;
      totals.innovation += choice.scores.innovation;
    }
  });

  return {
    dignity: Math.round((totals.dignity / (maxTotals.dignity || 1)) * 100),
    fairness: Math.round((totals.fairness / (maxTotals.fairness || 1)) * 100),
    privacy: Math.round((totals.privacy / (maxTotals.privacy || 1)) * 100),
    safety: Math.round((totals.safety / (maxTotals.safety || 1)) * 100),
    innovation: Math.round((totals.innovation / (maxTotals.innovation || 1)) * 100)
  };
}

export function determineResultType(scores: CalculatedScores): ResultTypeData {
  const { dignity, fairness, privacy, safety, innovation } = scores;

  const entries = [
    { key: 'dignity', value: dignity },
    { key: 'fairness', value: fairness },
    { key: 'privacy', value: privacy },
    { key: 'safety', value: safety },
    { key: 'innovation', value: innovation }
  ];

  entries.sort((a, b) => b.value - a.value);

  const highest = entries[0];
  const second = entries[1];

  // If score variance is very small (< 12 between highest and lowest), CM (Context Harmonizer)
  const lowest = entries[entries.length - 1];
  if (highest.value - lowest.value <= 14) {
    return RESULT_TYPES.CM;
  }

  // Primary mapping based on highest / combined dimension
  if (highest.key === 'dignity') {
    if (second.key === 'privacy') return RESULT_TYPES.DS;
    return RESULT_TYPES.HD;
  }

  if (highest.key === 'fairness') {
    return RESULT_TYPES.FE;
  }

  if (highest.key === 'privacy') {
    return RESULT_TYPES.DS;
  }

  if (highest.key === 'safety') {
    if (second.key === 'dignity' || second.key === 'privacy') return RESULT_TYPES.AT;
    return RESULT_TYPES.SR;
  }

  if (highest.key === 'innovation') {
    if (second.key === 'safety' || second.key === 'fairness') return RESULT_TYPES.TR;
    return RESULT_TYPES.PI;
  }

  return RESULT_TYPES.CM;
}

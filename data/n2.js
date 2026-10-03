const n2Questions = [
   {
    question: "彼の成功は努力の結果（　　）。",
    choices: ["にほかならない", "にちがいない", "にすぎない", "ことになる"],
    answer: 0,
    explanation: "〜にほかならない＝まさに〜である"
},
{
    question: "十分に準備した（　　）、試験では緊張してしまった。",
    choices: ["ものの", "ところで", "うえに", "かわりに"],
    answer: 0,
    explanation: "〜ものの＝しかし"
},
{
    question: "この仕事は経験者（　　）任せる予定だ。",
    choices: ["向けに", "に限り", "に応じて", "に比べて"],
    answer: 1,
    explanation: "〜に限り＝〜だけ"
},
{
    question: "彼は疲れている（　　）、最後まで働いた。",
    choices: ["わりに", "ものの", "にもかかわらず", "ところで"],
    answer: 2,
    explanation: "〜にもかかわらず＝それでも"
},
{
    question: "この薬を飲まないことには、病気は治らない（　　）。",
    choices: ["だろう", "まい", "はずだ", "ものだ"],
    answer: 0,
    explanation: "〜ないことには＝〜しなければ"
},
{
    question: "景気は悪化する（　　）だ。",
    choices: ["一方", "うち", "きり", "際"],
    answer: 0,
    explanation: "〜一方だ＝ますます〜"
},
{
    question: "慎重に確認した（　　）、間違いが見つかった。",
    choices: ["ところ", "末", "うえ", "かわり"],
    answer: 2,
    explanation: "〜うえ＝そのうえ"
},
{
    question: "長い話し合いの（　　）、ようやく結論が出た。",
    choices: ["末", "際", "うち", "次第"],
    answer: 0,
    explanation: "〜末に＝最後に"
},
{
    question: "あの人なら成功する（　　）。",
    choices: ["にちがいない", "にすぎない", "にほかならない", "かねない"],
    answer: 0,
    explanation: "〜に違いない＝きっと"
},
{
    question: "そんな危険な運転では事故を起こし（　　）。",
    choices: ["かねない", "かねる", "がたい", "きれない"],
    answer: 0,
    explanation: "〜かねない＝悪い結果になる可能性"
},
{
    question: "年齢（　　）誰でも参加できます。",
    choices: ["を問わず", "に応じて", "に対して", "につれて"],
    answer: 0,
    explanation: "〜を問わず＝関係なく"
},
{
    question: "状況（　　）対応してください。",
    choices: ["に応じて", "を問わず", "にかわって", "に反して"],
    answer: 0,
    explanation: "〜に応じて＝〜に合わせて"
},
{
    question: "彼は医者である（　　）、作家としても有名だ。",
    choices: ["一方", "反面", "うえに", "以上"],
    answer: 2,
    explanation: "〜うえに＝その上"
},
{
    question: "予定より早く終わった（　　）、内容も良かった。",
    choices: ["うえに", "末に", "うちに", "際に"],
    answer: 0,
    explanation: "〜うえに＝さらに"
},
{
    question: "彼の説明は分かりやすい（　　）、実践的だった。",
    choices: ["うえに", "ものの", "ところで", "わりに"],
    answer: 0,
    explanation: "二つの長所を並べる"
},
{
    question: "雨が降った（　　）、試合は続けられた。",
    choices: ["ものの", "うえ", "末", "次第"],
    answer: 0,
    explanation: "〜ものの＝けれども"
},
{
    question: "日本に来て以来、寿司が好きになった（　　）。",
    choices: ["ものだ", "ものの", "ものを", "ものか"],
    answer: 0,
    explanation: "〜ものだ＝感慨・当然"
},
{
    question: "彼の話は事実に（　　）。",
    choices: ["相違ない", "限らない", "かねない", "違わない"],
    answer: 0,
    explanation: "〜に相違ない＝間違いない"
},
{
    question: "その決定には反対せざるを（　　）。",
    choices: ["えない", "得ない", "いられない", "かねない"],
    answer: 0,
    explanation: "〜ざるを得ない"
},
{
    question: "彼は約束を守らないことがある（　　）、信用できない。",
    choices: ["ことから", "ことに", "ことなく", "ことだ"],
    answer: 0,
    explanation: "理由を表す"
},
{
    question: "この制度は来月を（　　）廃止される。",
    choices: ["もって", "通じて", "通して", "問わず"],
    answer: 0,
    explanation: "〜をもって＝その時を最後に"
},
{
    question: "努力なくして成功はあり（　　）。",
    choices: ["えない", "かねない", "かねる", "がたい"],
    answer: 0,
    explanation: "ありえない"
},
{
    question: "詳細は担当者に聞く（　　）。",
    choices: ["べきだ", "ほかない", "ばかりだ", "ことはない"],
    answer: 1,
    explanation: "〜ほかない＝他に方法がない"
},
{
    question: "彼の能力からすれば当然の結果といっても過言では（　　）。",
    choices: ["ない", "ある", "ならない", "いけない"],
    answer: 0,
    explanation: "過言ではない"
},
{
    question: "健康のために禁煙する（　　）決めた。",
    choices: ["ことに", "ものの", "うえに", "かわりに"],
    answer: 0,
    explanation: "〜ことにする"
},
{
    question: "彼は見た目に（　　）若い。",
    choices: ["反して", "つれて", "応じて", "比べて"],
    answer: 0,
    explanation: "〜に反して"
},
{
    question: "会議の内容をめぐって意見が対立した。",
    choices: ["〜について", "〜をめぐって", "〜に応じて", "〜に際して"],
    answer: 1,
    explanation: "〜をめぐって＝中心として"
},
{
    question: "卒業に（　　）先生方へ感謝申し上げます。",
    choices: ["際して", "応じて", "従って", "つれて"],
    answer: 0,
    explanation: "〜に際して＝〜の時に"
},
{
    question: "景気の回復に（　　）求人も増えている。",
    choices: ["つれて", "反して", "かわって", "応じて"],
    answer: 0,
    explanation: "〜につれて＝一緒に変化"
},
{
    question: "年を取る（　　）体力が低下した。",
    choices: ["につれて", "に対して", "を問わず", "かわりに"],
    answer: 0,
    explanation: "変化の並行"
},

// 31〜50

{
    question: "そんな無責任なことは言う（　　）。",
    choices: ["べきではない", "ものではない", "にすぎない", "ことになる"],
    answer: 1,
    explanation: "〜ものではない＝強い禁止"
},
{
    question: "彼は日本語ばかりか英語も話せる。",
    choices: ["だけ", "ばかりか", "しか", "ほど"],
    answer: 1,
    explanation: "〜ばかりか＝その上"
},
{
    question: "ここまで来た（　　）は最後まで頑張ろう。",
    choices: ["以上", "うち", "ところ", "末"],
    answer: 0,
    explanation: "〜以上＝以上は"
},
{
    question: "忙しいからといって、約束を破っていい（　　）。",
    choices: ["わけがない", "わけではない", "ものではない", "ことではない"],
    answer: 0,
    explanation: "当然だめ"
},
{
    question: "この製品は高価な（　　）品質が高い。",
    choices: ["わりに", "だけに", "ものの", "反面"],
    answer: 1,
    explanation: "〜だけに＝それに応じて"
},
{
    question: "その映画は期待したほど面白い（　　）。",
    choices: ["わけではない", "に違いない", "ほかない", "ことになる"],
    answer: 0,
    explanation: "部分否定"
},
{
    question: "彼の説明は納得できるものがある。",
    choices: ["理由がある", "説得力がある", "面白い", "難しい"],
    answer: 1,
    explanation: "ものがある＝強く感じる"
},
{
    question: "学生である（　　）、時間を守らなければならない。",
    choices: ["以上", "ものの", "末に", "わりに"],
    answer: 0,
    explanation: "当然"
},
{
    question: "彼の話が本当かどうか疑問の（　　）がある。",
    choices: ["余地", "末", "際", "ほか"],
    answer: 0,
    explanation: "余地がある"
},
{
    question: "彼女は泣き（　　）喜んだ。",
    choices: ["ながら", "つつ", "つつも", "わりに"],
    answer: 0,
    explanation: "同時動作"
},
{
    question: "彼の成功は努力の積み重ねにほかならない。",
    choices: ["単なる努力", "努力そのもの", "偶然", "才能"],
    answer: 1,
    explanation: "まさに努力によるもの"
},
{
    question: "この問題は簡単そうに見えて、実は難しい。",
    choices: ["反対", "原因", "逆接", "条件"],
    answer: 2,
    explanation: "見た目と実際が異なる"
},
{
    question: "彼は疲れていたにもかかわらず働いた。",
    choices: ["順接", "逆接", "原因", "例示"],
    answer: 1,
    explanation: "それでも"
},
{
    question: "予定を変更せざるを得なかった。",
    choices: ["変更した", "変更しなかった", "悩んだ", "相談した"],
    answer: 0,
    explanation: "仕方なく変更した"
},
{
    question: "春になるにつれて暖かくなる。",
    choices: ["反対に変化", "同時に変化", "停止", "条件"],
    answer: 1,
    explanation: "一緒に変わる"
},
{
    question: "彼は遅刻しがちだ。",
    choices: ["よく遅刻する", "絶対遅刻しない", "一回だけ遅刻", "遅刻予定"],
    answer: 0,
    explanation: "〜しがち"
},
{
    question: "そんなことを言おうものなら大変だ。",
    choices: ["もし言えば", "言わない", "言った", "言いたい"],
    answer: 0,
    explanation: "仮定"
},
{
    question: "彼の説明は分かりやすいわりに内容が浅い。",
    choices: ["予想以上", "予想と違う", "当然", "比較"],
    answer: 1,
    explanation: "〜わりに"
},
{
    question: "その事件をめぐって議論が続いている。",
    choices: ["中心にして", "終了して", "避けて", "忘れて"],
    answer: 0,
    explanation: "〜をめぐって"
},
{
    question: "長年の研究の末に発見された。",
    choices: ["最初に", "途中で", "最後に", "偶然"],
    answer: 2,
    explanation: "〜末に＝長い過程の結果"
},
{
    question: "この作業は今日中に終わらせなければならない。難しい（　　）、やるしかない。",
    choices: ["にしても", "とはいえ", "ものの", "ながら"],
    answer: 0,
    explanation: "〜にしても＝たとえそうでも"
},
{
    question: "彼の実力から（　　）、今回の結果は意外だった。",
    choices: ["すると", "しても", "すれば", "してみれば"],
    answer: 3,
    explanation: "〜からしてみれば＝〜の立場で考えると"
},
{
    question: "この問題は簡単そうに見えるが、実際にやってみると難しい（　　）。",
    choices: ["ものだ", "ものがある", "ものではない", "ものだった"],
    answer: 1,
    explanation: "〜ものがある＝そう感じられる"
},
{
    question: "彼は社長である（　　）、会社の創業者でもある。",
    choices: ["反面", "一方で", "上に", "ばかりか"],
    answer: 3,
    explanation: "〜ばかりか＝その上"
},
{
    question: "そんな危険な橋を渡るなんて無謀（　　）。",
    choices: ["きわまりない", "ものだ", "ことだ", "かぎりだ"],
    answer: 0,
    explanation: "〜きわまりない＝非常に〜だ"
},
{
    question: "彼の説明は納得できる（　　）があった。",
    choices: ["こと", "もの", "ところ", "わけ"],
    answer: 1,
    explanation: "ものがある＝強く感じられる"
},
{
    question: "どんなに反対されようと、この計画は実行する（　　）。",
    choices: ["までだ", "ものだ", "ことだ", "ばかりだ"],
    answer: 0,
    explanation: "〜までだ＝そうするだけだ"
},
{
    question: "今回の失敗は、私の不注意にほかなら（　　）。",
    choices: ["ない", "ぬ", "ず", "かねない"],
    answer: 0,
    explanation: "〜にほかならない"
},
{
    question: "彼は忙しいといい（　　）、いつも誘いを断る。",
    choices: ["ながら", "つつ", "わけで", "わけには"],
    answer: 0,
    explanation: "〜といいながら"
},
{
    question: "勉強した（　　）では、合格は難しい。",
    choices: ["つもり", "ところ", "ほど", "だけ"],
    answer: 3,
    explanation: "〜だけでは"
},
{
    question: "この仕事は経験がない私には難しい（　　）。",
    choices: ["にすぎない", "にほかならない", "といわざるをえない", "としたら"],
    answer: 2,
    explanation: "〜といわざるをえない"
},
{
    question: "彼の話は本当だ（　　）証拠がない。",
    choices: ["とすると", "にしても", "としても", "とはいえ"],
    answer: 3,
    explanation: "〜とはいえ＝そうはいっても"
},
{
    question: "年齢を（　　）応募できます。",
    choices: ["問わず", "応じて", "めぐって", "通じて"],
    answer: 0,
    explanation: "〜を問わず"
},
{
    question: "この制度は全国を（　　）導入された。",
    choices: ["問わず", "通じて", "めぐって", "応じて"],
    answer: 1,
    explanation: "〜を通じて＝全体にわたって"
},
{
    question: "本人の努力（　　）、家族の支えも大きかった。",
    choices: ["ばかりか", "ものの", "かわりに", "うちに"],
    answer: 0,
    explanation: "〜ばかりか＝その上"
},
{
    question: "説明を聞いた（　　）、よく理解できなかった。",
    choices: ["ものの", "うえ", "末", "ことなく"],
    answer: 0,
    explanation: "逆接"
},
{
    question: "彼は日本語（　　）英語も話せる。",
    choices: ["ばかりか", "のみ", "しか", "ほど"],
    answer: 0,
    explanation: "〜ばかりか"
},
{
    question: "景気は悪化する（　　）だ。",
    choices: ["一方", "つもり", "ほど", "わけ"],
    answer: 0,
    explanation: "〜一方だ"
},
{
    question: "そんな無礼な言い方をする（　　）。",
    choices: ["ものではない", "ことではない", "わけではない", "ほどではない"],
    answer: 0,
    explanation: "強い禁止"
},
{
    question: "彼が犯人でないとは言い切れない（　　）がある。",
    choices: ["余地", "末", "際", "反面"],
    answer: 0,
    explanation: "余地がある"
},
{
    question: "何度も練習した（　　）、本番では失敗した。",
    choices: ["ものの", "うえに", "末に", "一方で"],
    answer: 0,
    explanation: "逆接"
},
{
    question: "親として当然そう考える（　　）。",
    choices: ["ものだ", "ことだ", "ばかりだ", "までだ"],
    answer: 0,
    explanation: "当然"
},
{
    question: "彼女は歌が上手な（　　）、踊りも得意だ。",
    choices: ["うえに", "ところで", "ものの", "かわりに"],
    answer: 0,
    explanation: "〜うえに"
},
{
    question: "この仕事は今日中に終える（　　）がある。",
    choices: ["必要", "予定", "余地", "見込み"],
    answer: 0,
    explanation: "必要がある"
},
{
    question: "彼は失敗を認めようと（　　）。",
    choices: ["しない", "もしない", "できない", "かねない"],
    answer: 1,
    explanation: "〜ようともしない"
},
{
    question: "試験が近づく（　　）、緊張してきた。",
    choices: ["につれて", "に対して", "に応じて", "に反して"],
    answer: 0,
    explanation: "変化の並行"
},
{
    question: "病気の母に（　　）、旅行を断念した。",
    choices: ["かわって", "かわりに", "対して", "際して"],
    answer: 0,
    explanation: "〜にかわって"
},
{
    question: "彼の話し方は失礼（　　）。",
    choices: ["きわまりない", "ほかない", "にすぎない", "ばかりだ"],
    answer: 0,
    explanation: "非常に失礼"
},
{
    question: "この結果は努力の成果（　　）。",
    choices: ["にほかならない", "にすぎない", "に違いない", "かねない"],
    answer: 0,
    explanation: "まさに〜である"
},
{
    question: "事故が増える（　　）があるので注意してください。",
    choices: ["恐れ", "余地", "末", "際"],
    answer: 0,
    explanation: "恐れがある"
},
{
    question: "この問題は簡単なようでいて、実は難しい。",
    choices: ["逆接", "順接", "条件", "例示"],
    answer: 0,
    explanation: "見た目と実際の違い"
},
{
    question: "彼は忙しい（　　）、引き受けてくれた。",
    choices: ["ながらも", "ものを", "ところを", "うちに"],
    answer: 0,
    explanation: "〜ながらも"
},
{
    question: "そんなに心配する（　　）。",
    choices: ["ことはない", "わけがない", "ものではない", "ことではない"],
    answer: 0,
    explanation: "〜ことはない"
},
{
    question: "これは一人で解決できる問題（　　）。",
    choices: ["にすぎない", "ではない", "のほかない", "というものだ"],
    answer: 1,
    explanation: "〜ではない"
},
{
    question: "彼は約束を守る（　　）人だ。",
    choices: ["べき", "ような", "らしい", "そうな"],
    answer: 2,
    explanation: "らしい＝典型的"
},
{
    question: "何事もやってみないことには結果は分からない。",
    choices: ["条件", "原因", "逆接", "推量"],
    answer: 0,
    explanation: "〜ないことには"
},
{
    question: "大学卒業に（　　）、感謝の言葉を述べた。",
    choices: ["際して", "つれて", "反して", "応じて"],
    answer: 0,
    explanation: "〜に際して"
},
{
    question: "状況に（　　）対応してください。",
    choices: ["応じて", "問わず", "反して", "めぐって"],
    answer: 0,
    explanation: "〜に応じて"
},
{
    question: "努力したからといって必ず成功する（　　）。",
    choices: ["わけではない", "に違いない", "ものだ", "ほかない"],
    answer: 0,
    explanation: "部分否定"
},
{
    question: "彼は怒られると分かっていながら、その行動をやめなかった。",
    choices: ["逆接", "並列", "原因", "条件"],
    answer: 0,
    explanation: "〜ながら"
},
{
    question: "そんなに急ぐことはない。時間は十分ある。",
    choices: ["不要", "義務", "推量", "命令"],
    answer: 0,
    explanation: "〜ことはない"
},
{
    question: "あの態度は失礼という（　　）だ。",
    choices: ["もの", "こと", "ほか", "ものの"],
    answer: 0,
    explanation: "というものだ"
},
{
    question: "長い検討の末に計画は中止された。",
    choices: ["途中で", "最終的に", "偶然", "過去に"],
    answer: 1,
    explanation: "〜末に"
},
{
    question: "彼は会議中であるにもかかわらず電話に出た。",
    choices: ["逆接", "順接", "比較", "例示"],
    answer: 0,
    explanation: "〜にもかかわらず"
},
{
    question: "学生である以上、規則を守るべきだ。",
    choices: ["当然", "推量", "可能", "依頼"],
    answer: 0,
    explanation: "〜以上"
},
{
    question: "その話を聞いて驚きを禁じ得なかった。",
    choices: ["とても驚いた", "全く驚かない", "否定した", "理解できない"],
    answer: 0,
    explanation: "禁じ得ない＝抑えられない"
},
{
    question: "彼の成功は努力の結果にほかならない。",
    choices: ["偶然", "努力の結果", "運", "才能"],
    answer: 1,
    explanation: "まさに努力の結果"
},
{
    question: "その発言は誤解を招きかねない。",
    choices: ["誤解を防ぐ", "誤解を招く可能性がある", "誤解された", "誤解しない"],
    answer: 1,
    explanation: "〜かねない"
},
{
    question: "物価が上がるにつれて生活は苦しくなる。",
    choices: ["同時変化", "逆変化", "停止", "推量"],
    answer: 0,
    explanation: "〜につれて"
},
{
    question: "彼は最後まで諦めることなく走り続けた。",
    choices: ["諦めながら", "諦めずに", "諦めたあと", "諦めたい"],
    answer: 1,
    explanation: "〜ことなく＝〜ないで"
},
{
    question: "彼は政治家（　　）、環境保護活動家としても知られている。",
    choices: ["ばかりか", "どころか", "だけに", "ものの"],
    answer: 0,
    explanation: "〜ばかりか＝その上"
},
{
    question: "この問題は難しいという（　　）、不可能ではない。",
    choices: ["ものか", "ものの", "ほど", "まで"],
    answer: 1,
    explanation: "〜ものの＝しかし"
},
{
    question: "部長の指示（　　）、計画を変更した。",
    choices: ["に際して", "に基づいて", "に反して", "に先立って"],
    answer: 1,
    explanation: "〜に基づいて＝〜を根拠として"
},
{
    question: "そんな失礼なことは言う（　　）。",
    choices: ["ものではない", "ことではない", "わけではない", "ほどではない"],
    answer: 0,
    explanation: "〜ものではない＝強い禁止"
},
{
    question: "景気は回復するどころか、悪化する（　　）だ。",
    choices: ["限り", "一方", "次第", "ばかり"],
    answer: 1,
    explanation: "〜一方だ＝ますます〜"
},
{
    question: "彼の努力には頭が下がる（　　）。",
    choices: ["ばかりだ", "一方だ", "ものがある", "ものだ"],
    answer: 3,
    explanation: "感心や感慨を表す"
},
{
    question: "練習（　　）本番で成功は望めない。",
    choices: ["なしに", "に対して", "をめぐって", "に際して"],
    answer: 0,
    explanation: "〜なしに＝〜しないで"
},
{
    question: "その噂は事実に（　　）。",
    choices: ["ほかならない", "相違ない", "すぎない", "かねない"],
    answer: 1,
    explanation: "〜に相違ない＝間違いない"
},
{
    question: "彼は疲れている（　　）、仕事を続けた。",
    choices: ["ながらも", "のみならず", "どころか", "ばかりか"],
    answer: 0,
    explanation: "逆接"
},
{
    question: "試験前日は勉強する（　　）早く寝たほうがいい。",
    choices: ["どころか", "より", "に対して", "に応じて"],
    answer: 1,
    explanation: "比較"
},

{
    question: "この件については今さら後悔しても始まらない（　　）。",
    choices: ["ものだ", "ものではない", "ことだ", "までだ"],
    answer: 3,
    explanation: "〜までだ＝そうするしかない"
},
{
    question: "彼女は日本語のみならず、中国語（　　）話せる。",
    choices: ["だけは", "さえも", "ばかりで", "ながらも"],
    answer: 1,
    explanation: "〜のみならず〜さえ"
},
{
    question: "事故の原因を（　　）調査が行われた。",
    choices: ["めぐって", "通じて", "問わず", "応じて"],
    answer: 0,
    explanation: "〜をめぐって"
},
{
    question: "彼は人前で話すことを苦手と（　　）。",
    choices: ["する", "なる", "いる", "おく"],
    answer: 0,
    explanation: "〜とする"
},
{
    question: "十分な説明がないことには納得でき（　　）。",
    choices: ["ない", "かねない", "うる", "そうだ"],
    answer: 0,
    explanation: "〜ないことには"
},
{
    question: "日本で働く（　　）ビザが必要だ。",
    choices: ["に際して", "に先立って", "にあたって", "に基づいて"],
    answer: 2,
    explanation: "〜にあたって"
},
{
    question: "今回の結果は努力の成果（　　）。",
    choices: ["にほかならない", "にすぎない", "かねない", "どころか"],
    answer: 0,
    explanation: "まさに〜である"
},
{
    question: "彼の話は信用するに（　　）。",
    choices: ["足りる", "及ぶ", "及ばない", "こしたことはない"],
    answer: 0,
    explanation: "〜に足りる＝十分価値がある"
},
{
    question: "彼は約束を破り（　　）人だ。",
    choices: ["がちの", "きりの", "つつの", "ぎみの"],
    answer: 0,
    explanation: "〜がち"
},
{
    question: "その問題は議論の余地がない（　　）明らかだ。",
    choices: ["ほど", "ばかり", "のみ", "くらい"],
    answer: 0,
    explanation: "程度を表す"
},

{
    question: "彼女は親切な（　　）、厳しいところもある。",
    choices: ["反面", "上に", "末に", "どころか"],
    answer: 0,
    explanation: "〜反面＝一方で"
},
{
    question: "大学卒業後、進学する（　　）就職するか迷っている。",
    choices: ["べく", "ものの", "か", "どころか"],
    answer: 2,
    explanation: "AかBか"
},
{
    question: "その説明では納得できないと（　　）を得ない。",
    choices: ["言わ", "言う", "言って", "言わざる"],
    answer: 3,
    explanation: "〜ざるを得ない"
},
{
    question: "どんな事情があるにせよ、約束は守る（　　）だ。",
    choices: ["もの", "ものの", "べき", "かねない"],
    answer: 2,
    explanation: "当然・義務"
},
{
    question: "彼は経験者だけ（　　）、仕事が早い。",
    choices: ["あって", "いて", "して", "なって"],
    answer: 0,
    explanation: "〜だけあって"
},
{
    question: "これは初心者向けという（　　）難しすぎる。",
    choices: ["わりには", "ばかりか", "ものの", "にしては"],
    answer: 3,
    explanation: "〜にしては"
},
{
    question: "会議の開始に（　　）、資料を配布した。",
    choices: ["応じて", "つれて", "先立って", "反して"],
    answer: 2,
    explanation: "〜に先立って"
},
{
    question: "彼の発言は誤解を招き（　　）。",
    choices: ["かねない", "かねる", "がたい", "ざるを得ない"],
    answer: 0,
    explanation: "〜かねない"
},
{
    question: "努力した（　　）の結果、合格できた。",
    choices: ["末", "際", "反面", "のみ"],
    answer: 0,
    explanation: "〜末に"
},
{
    question: "その映画は見るに（　　）作品だった。",
    choices: ["足りる", "値する", "及ぶ", "違いない"],
    answer: 1,
    explanation: "〜に値する"
},

{
    question: "今となっては後悔する（　　）。",
    choices: ["ほかない", "のみだ", "ことだ", "べきだ"],
    answer: 0,
    explanation: "他に方法がない"
},
{
    question: "彼は怒られると分かっていながら、その行為をやめなかった。",
    choices: ["逆接", "原因", "条件", "列挙"],
    answer: 0,
    explanation: "〜ながら"
},
{
    question: "この町は交通が便利な（　　）、家賃が高い。",
    choices: ["反面", "ばかりか", "末に", "うえに"],
    answer: 0,
    explanation: "良い面と悪い面"
},
{
    question: "彼の実力からすれば当然の結果といっても過言では（　　）。",
    choices: ["ない", "ある", "なる", "いけない"],
    answer: 0,
    explanation: "過言ではない"
},
{
    question: "この仕事は私には荷が重いという（　　）だ。",
    choices: ["もの", "こと", "だけ", "ばかり"],
    answer: 0,
    explanation: "〜というものだ"
},
{
    question: "年齢を問わず利用できる。",
    choices: ["制限なく", "高齢者のみ", "子どものみ", "学生のみ"],
    answer: 0,
    explanation: "年齢に関係なく"
},
{
    question: "その結果は予想に反して悪かった。",
    choices: ["予想どおり", "予想とは違って", "予想以上に", "予想以下に"],
    answer: 1,
    explanation: "〜に反して"
},
{
    question: "彼は留学経験がある（　　）、発音が自然だ。",
    choices: ["だけに", "ものの", "どころか", "反面"],
    answer: 0,
    explanation: "〜だけに"
},
{
    question: "そんなことを言おう（　　）大騒ぎになる。",
    choices: ["ものなら", "だけなら", "からには", "ところで"],
    answer: 0,
    explanation: "仮定"
},
{
    question: "社長に代わって私が挨拶した。",
    choices: ["代理で", "一緒に", "反対して", "比較して"],
    answer: 0,
    explanation: "〜に代わって"
},

{
    question: "景気の悪化に伴って失業者が増えた。",
    choices: ["同時に増加", "逆に減少", "一時停止", "比較"],
    answer: 0,
    explanation: "〜に伴って"
},
{
    question: "その映画は一度見るに値する。",
    choices: ["見る価値がある", "見てはいけない", "無料である", "長い"],
    answer: 0,
    explanation: "〜に値する"
},
{
    question: "どれほど努力しても成功するとは限らない。",
    choices: ["必ず成功する", "成功しない", "成功するとは言えない", "絶対成功する"],
    answer: 2,
    explanation: "〜とは限らない"
},
{
    question: "彼は経験不足とはいえ、よく頑張った。",
    choices: ["逆接", "原因", "条件", "列挙"],
    answer: 0,
    explanation: "〜とはいえ"
},
{
    question: "この製品は価格のわりに性能が高い。",
    choices: ["予想より良い", "予想より悪い", "同程度", "無料"],
    answer: 0,
    explanation: "〜わりに"
},
{
    question: "彼の態度には納得できないものがある。",
    choices: ["強くそう感じる", "完全に理解する", "全く問題ない", "安心する"],
    answer: 0,
    explanation: "ものがある"
},
{
    question: "こんな重要なことは忘れようがない。",
    choices: ["絶対忘れない", "忘れたい", "忘れた", "忘れられる"],
    answer: 0,
    explanation: "〜ようがない"
},
{
    question: "試験当日に備えて早く寝た。",
    choices: ["準備して", "反対して", "比較して", "終了して"],
    answer: 0,
    explanation: "〜に備えて"
},
{
    question: "彼ほど努力する人は見たことがない。",
    choices: ["最も努力する", "努力しない", "普通", "嫌い"],
    answer: 0,
    explanation: "〜ほど〜ない"
},
{
    question: "会社の発展は社員の努力によるものだ。",
    choices: ["原因・理由", "逆接", "比較", "推量"],
    answer: 0,
    explanation: "による＝原因"
},
{
    question: "彼ほど努力する人はほかにいない（　　）。",
    choices: ["くらいだ", "ものだ", "ほどだ", "限りだ"],
    answer: 0,
    explanation: "〜くらいだ＝非常に程度が高いことを表す。"
},
{
    question: "彼は政治家として（　　）、人間としても尊敬されている。",
    choices: ["のみならず", "ばかりで", "どころか", "反面"],
    answer: 0,
    explanation: "〜のみならず＝〜だけでなく。"
},
{
    question: "社長の説明を聞く（　　）、計画はかなり厳しいようだ。",
    choices: ["にしても", "にしたら", "にしてみれば", "につけ"],
    answer: 2,
    explanation: "〜にしてみれば＝〜の立場で考えると。"
},
{
    question: "この製品は値段のわりに品質が高い（　　）。",
    choices: ["ものがある", "ことがある", "ところがある", "わけがある"],
    answer: 0,
    explanation: "〜ものがある＝強くそう感じる。"
},
{
    question: "今さら謝った（　　）、許してもらえるとは思えない。",
    choices: ["ところで", "ものの", "ところが", "ところを"],
    answer: 1,
    explanation: "逆接の〜ものの。"
},
{
    question: "彼は失敗したとはいえ、それを経験として生かす（　　）。",
    choices: ["しかない", "ことはない", "ほどだ", "わけだ"],
    answer: 0,
    explanation: "〜しかない＝他に方法がない。"
},
{
    question: "彼女は日本語はもちろん、韓国語（　　）話せる。",
    choices: ["のみならず", "さえ", "すら", "ほど"],
    answer: 1,
    explanation: "〜さえ＝〜ですら。"
},
{
    question: "この資料は会議に（　　）作成された。",
    choices: ["際して", "先立って", "応じて", "伴って"],
    answer: 0,
    explanation: "〜に際して＝〜の機会に。"
},
{
    question: "ここから先は関係者以外立ち入る（　　）。",
    choices: ["べきではない", "ものではない", "ことはない", "わけではない"],
    answer: 1,
    explanation: "〜ものではない＝強い禁止。"
},
{
    question: "その発言は誤解を招く（　　）がある。",
    choices: ["恐れ", "余地", "末", "際"],
    answer: 0,
    explanation: "〜恐れがある＝悪い可能性。"
},

{
    question: "彼は責任者である（　　）、もっと慎重であるべきだ。",
    choices: ["からには", "うちに", "末に", "ばかりに"],
    answer: 0,
    explanation: "〜からには＝その立場なら当然。"
},
{
    question: "努力したからといって成功する（　　）。",
    choices: ["わけではない", "ものではない", "ことはない", "ものだ"],
    answer: 0,
    explanation: "部分否定。"
},
{
    question: "この地域では高齢化が進む（　　）だ。",
    choices: ["一方", "ばかり", "次第", "もの"],
    answer: 0,
    explanation: "〜一方だ＝ますます。"
},
{
    question: "彼は疲れている（　　）、最後まで仕事を終わらせた。",
    choices: ["ながらも", "のみならず", "どころか", "だけに"],
    answer: 0,
    explanation: "〜ながらも＝逆接。"
},
{
    question: "彼の能力から（　　）、今回の結果は不思議ではない。",
    choices: ["すると", "してみれば", "してから", "したところ"],
    answer: 1,
    explanation: "〜からしてみれば。"
},
{
    question: "どんなに忙しくても、健康管理を怠る（　　）。",
    choices: ["べきではない", "わけではない", "ものではない", "ことはない"],
    answer: 0,
    explanation: "義務・助言。"
},
{
    question: "彼女は歌が上手な（　　）、作曲もできる。",
    choices: ["反面", "ばかりか", "どころか", "ものの"],
    answer: 1,
    explanation: "〜ばかりか＝その上。"
},
{
    question: "その問題については改めて検討する（　　）がある。",
    choices: ["余地", "恐れ", "末", "結果"],
    answer: 0,
    explanation: "〜余地がある。"
},
{
    question: "そんな重要なことは忘れよう（　　）。",
    choices: ["がない", "もない", "にはない", "とはない"],
    answer: 0,
    explanation: "〜ようがない＝不可能。"
},
{
    question: "彼の行動は理解に苦しむ（　　）。",
    choices: ["ものがある", "ものだ", "ことだ", "ばかりだ"],
    answer: 0,
    explanation: "強い評価。"
},

{
    question: "その映画は一見面白そうだが、実際はそれほどでもない（　　）。",
    choices: ["ものだ", "ものの", "ところだ", "ことだ"],
    answer: 1,
    explanation: "逆接表現。"
},
{
    question: "結果がどうであれ、最後までやり抜く（　　）だ。",
    choices: ["のみ", "つもり", "べき", "もの"],
    answer: 1,
    explanation: "意志を表す。"
},
{
    question: "この制度は時代の変化に（　　）見直しが必要だ。",
    choices: ["応じて", "問わず", "反して", "伴わず"],
    answer: 0,
    explanation: "〜に応じて。"
},
{
    question: "社長のあいさつに（　　）、会議が始まった。",
    choices: ["先立って", "続いて", "応じて", "つれて"],
    answer: 1,
    explanation: "〜に続いて。"
},
{
    question: "彼は自分が悪いと知り（　　）、謝ろうとしない。",
    choices: ["ながら", "つつ", "ながらも", "つつも"],
    answer: 0,
    explanation: "〜ながら＝〜のに。"
},
{
    question: "その事件を（　　）、様々な意見が出された。",
    choices: ["めぐって", "応じて", "問わず", "反して"],
    answer: 0,
    explanation: "〜をめぐって。"
},
{
    question: "病気の回復に（　　）、食欲も戻ってきた。",
    choices: ["伴って", "問わず", "めぐって", "対して"],
    answer: 0,
    explanation: "〜に伴って。"
},
{
    question: "彼の説明は納得できる（　　）がある。",
    choices: ["もの", "こと", "ところ", "わけ"],
    answer: 0,
    explanation: "〜ものがある。"
},
{
    question: "その話が本当だとは信じ（　　）。",
    choices: ["がたい", "かねる", "きれる", "かねない"],
    answer: 0,
    explanation: "〜がたい＝難しい。"
},
{
    question: "そこまで言う（　　）、何か理由があるのだろう。",
    choices: ["からには", "だけに", "ほどに", "以上に"],
    answer: 0,
    explanation: "〜からには。"
},

{
    question: "これは初心者には難しすぎるといわざるを（　　）。",
    choices: ["得ない", "しない", "いかない", "ならない"],
    answer: 0,
    explanation: "〜ざるを得ない。"
},
{
    question: "試験当日はもちろん、前日（　　）体調管理に注意した。",
    choices: ["すら", "さえ", "まで", "しか"],
    answer: 2,
    explanation: "〜まで。"
},
{
    question: "彼は反省する（　　）、同じ失敗を繰り返した。",
    choices: ["どころか", "のみならず", "に対して", "にして"],
    answer: 0,
    explanation: "〜どころか＝逆に。"
},
{
    question: "その決断は勇気ある行動といえる（　　）。",
    choices: ["ものだ", "ことだ", "ところだ", "限りだ"],
    answer: 0,
    explanation: "評価。"
},
{
    question: "彼女の努力には感心する（　　）。",
    choices: ["ばかりだ", "限りだ", "ものだ", "次第だ"],
    answer: 1,
    explanation: "〜限りだ＝非常に。"
},
{
    question: "この問題は今後の課題として検討していく（　　）。",
    choices: ["次第だ", "限りだ", "ものだ", "ばかりだ"],
    answer: 0,
    explanation: "〜次第だ＝そういう状況だ。"
},
{
    question: "彼ほど真面目な人は見たことがない。",
    choices: ["比較", "逆接", "列挙", "条件"],
    answer: 0,
    explanation: "〜ほど〜ない。"
},
{
    question: "その話を聞いたとたん、皆が笑い出した。",
    choices: ["直後", "原因", "列挙", "対比"],
    answer: 0,
    explanation: "〜とたん。"
},
{
    question: "今さら後悔したところで結果は変わらない。",
    choices: ["仮定", "逆接", "列挙", "比較"],
    answer: 0,
    explanation: "〜たところで。"
},
{
    question: "長年の夢がかなったときの喜びは言葉では表せない。",
    choices: ["非常に嬉しい", "残念", "怒り", "不安"],
    answer: 0,
    explanation: "喜びの強調。"
},

{
    question: "彼は責任感が強いだけ（　　）、周囲から信頼されている。",
    choices: ["あって", "いて", "して", "なって"],
    answer: 0,
    explanation: "〜だけあって。"
},
{
    question: "その映画は期待した（　　）面白くなかった。",
    choices: ["ほど", "だけ", "くらい", "ばかり"],
    answer: 0,
    explanation: "〜ほど〜ない。"
},
{
    question: "どんな事情がある（　　）、ルールは守るべきだ。",
    choices: ["にせよ", "として", "ながら", "うちに"],
    answer: 0,
    explanation: "〜にせよ。"
},
{
    question: "彼が失敗したのは経験不足という（　　）だ。",
    choices: ["もの", "こと", "ところ", "わけ"],
    answer: 0,
    explanation: "〜というものだ。"
},
{
    question: "この地域では冬になると雪が降る（　　）。",
    choices: ["ものだ", "ことだ", "ところだ", "までだ"],
    answer: 0,
    explanation: "一般的傾向。"
},
{
    question: "彼は疲れているに（　　）ない。",
    choices: ["違い", "限り", "すぎ", "ほか"],
    answer: 0,
    explanation: "〜に違いない。"
},
{
    question: "努力なくして成功はあり（　　）。",
    choices: ["えない", "うる", "かねない", "がたい"],
    answer: 0,
    explanation: "ありえない。"
},
{
    question: "その説明では納得できない（　　）がない。",
    choices: ["わけ", "もの", "こと", "ところ"],
    answer: 0,
    explanation: "〜わけがない。"
},
{
    question: "彼女はうれしさのあまり涙を流した。",
    choices: ["程度が大きい", "比較", "条件", "理由"],
    answer: 0,
    explanation: "〜のあまり。"
},
{
    question: "今後ともよろしくお願いいたします。",
    choices: ["依頼表現", "禁止表現", "逆接表現", "比較表現"],
    answer: 0,
    explanation: "丁寧な依頼・挨拶表現。"
}
,
{
    question: "親の立場（　　）、子どもの将来が心配になるのも無理はない。",
    choices: ["にしては", "にしても", "にしたって", "にしてみれば"],
    answer: 3,
    explanation: "〜にしてみれば＝〜の立場で考えると。"
},
{
    question: "いくら説明された（　　）、納得できないものは納得できない。",
    choices: ["にしても", "にしては", "にしたって", "にすると"],
    answer: 0,
    explanation: "〜にしても＝たとえ〜でも。"
},
{
    question: "この研究成果は高く評価する（　　）する。",
    choices: ["に足りる", "に応じる", "に関する", "に際する"],
    answer: 0,
    explanation: "〜に足りる＝十分その価値がある。"
},
{
    question: "今さら後悔した（　　）、結果は変わらない。",
    choices: ["ところで", "ところが", "ところを", "ところでさえ"],
    answer: 0,
    explanation: "〜たところで＝〜しても無駄だ。"
},
{
    question: "彼の態度には理解しがたい（　　）がある。",
    choices: ["もの", "こと", "わけ", "ところ"],
    answer: 0,
    explanation: "〜ものがある＝強くそう感じる。"
},
{
    question: "この問題は専門家ですら判断しかねる（　　）。",
    choices: ["ほどだ", "のみだ", "ものだ", "ことだ"],
    answer: 0,
    explanation: "程度の強調。"
},
{
    question: "社長の決定に反対する社員もいる（　　）、賛成する社員も多い。",
    choices: ["反面", "一方で", "ばかりか", "にしても"],
    answer: 1,
    explanation: "対比を表す。"
},
{
    question: "雨が降ろうと降る（　　）、試合は実施される。",
    choices: ["まいと", "ものを", "ものなら", "ものの"],
    answer: 0,
    explanation: "〜ようと〜まいと＝〜してもしなくても。"
},
{
    question: "彼は謝るどころか、責任を他人に押し付ける（　　）だった。",
    choices: ["ばかり", "始末", "限り", "末"],
    answer: 1,
    explanation: "〜始末だ＝悪い結果。"
},
{
    question: "これは冗談では（　　）、本気で言っている。",
    choices: ["すまない", "ならない", "いられない", "おかない"],
    answer: 1,
    explanation: "冗談ではない。"
},

{
    question: "彼女は努力家である（　　）、結果が出るまで諦めない。",
    choices: ["だけあって", "だけに", "ばかりに", "からには"],
    answer: 0,
    explanation: "〜だけあって＝期待通り。"
},
{
    question: "日本に来て初めて、日本文化の奥深さを知った（　　）。",
    choices: ["というものだ", "というわけだ", "ということだ", "というものではない"],
    answer: 1,
    explanation: "前の内容を説明する。"
},
{
    question: "その話が本当だとしても、すぐに信じる（　　）。",
    choices: ["わけにはいかない", "ことはない", "ものではない", "ものだ"],
    answer: 0,
    explanation: "〜わけにはいかない＝できない。"
},
{
    question: "彼の説明は理論的で分かりやすい（　　）、少し長すぎる。",
    choices: ["ものの", "ばかりか", "だけあって", "のみならず"],
    answer: 0,
    explanation: "逆接。"
},
{
    question: "試験前日になって慌てる（　　）、普段から準備しておくべきだ。",
    choices: ["くらいなら", "ものだから", "かぎり", "うえは"],
    answer: 0,
    explanation: "〜くらいなら。"
},
{
    question: "彼が成功したのは才能というより、努力の結果といった（　　）だ。",
    choices: ["ところ", "もの", "わけ", "こと"],
    answer: 1,
    explanation: "〜といったものだ。"
},
{
    question: "この仕事は一人でやるには負担が大き（　　）。",
    choices: ["すぎる", "まる", "きわまる", "かねる"],
    answer: 2,
    explanation: "〜きわまる＝非常に〜だ。"
},
{
    question: "彼は忙しいと言いながら、遊びに行ってばかりいる（　　）。",
    choices: ["ではないか", "ばかりだ", "というものだ", "にすぎない"],
    answer: 0,
    explanation: "非難・驚き。"
},
{
    question: "彼ほど経験がある人にしてみれば、その問題は簡単だっただろう。",
    choices: ["経験が少ない人から見て", "経験者の立場から見て", "客観的に見て", "結果として"],
    answer: 1,
    explanation: "〜にしてみれば。"
},
{
    question: "その事件については、今後も調査を続ける（　　）。",
    choices: ["しまつだ", "しだいだ", "ところだ", "ばかりだ"],
    answer: 1,
    explanation: "〜次第だ＝そういう状況だ。"
},

{
    question: "彼の実力なら合格して当然だといっても過言では（　　）。",
    choices: ["ない", "ある", "ならない", "いけない"],
    answer: 0,
    explanation: "過言ではない。"
},
{
    question: "その計画は失敗するおそれがある（　　）、慎重に進める必要がある。",
    choices: ["からして", "だけに", "にしても", "ものの"],
    answer: 0,
    explanation: "〜からして＝それだけで判断できる。"
},
{
    question: "彼女は親切という（　　）、誰にでも優しい。",
    choices: ["ものだ", "ものの", "ことだから", "わけではない"],
    answer: 2,
    explanation: "〜ことだから＝性格を理由に推量。"
},
{
    question: "体調が悪いので、今日の会議は欠席せざるを（　　）。",
    choices: ["得ない", "いない", "ならない", "おかない"],
    answer: 0,
    explanation: "〜ざるを得ない。"
},
{
    question: "彼は新人ながら、責任ある仕事を任されている。",
    choices: ["逆接", "同時進行", "原因", "列挙"],
    answer: 0,
    explanation: "〜ながら＝〜にもかかわらず。"
}
,
{
    question: "彼は長年日本に住んでいる（　　）、敬語の使い方をよく間違える。",
    choices: ["わりに", "のみならず", "だけに", "ばかりか"],
    answer: 0,
    explanation: "〜わりに＝予想と違って。"
},
{
    question: "この仕事は責任が重すぎて、私には引き受け（　　）。",
    choices: ["かねない", "かねる", "がたい", "きれない"],
    answer: 1,
    explanation: "〜かねる＝難しくてできない。"
},
{
    question: "彼の説明は論理的である（　　）、初心者にも分かりやすかった。",
    choices: ["だけに", "ばかりか", "にしては", "にしても"],
    answer: 1,
    explanation: "〜ばかりか＝その上。"
},
{
    question: "親として子どもの将来を心配するのは当然のこと（　　）。",
    choices: ["だろう", "ものだ", "ところだ", "ばかりだ"],
    answer: 1,
    explanation: "〜ものだ＝当然・感慨。"
},
{
    question: "あの選手の実力から（　　）、優勝は当然だ。",
    choices: ["すると", "してみれば", "しては", "したら"],
    answer: 1,
    explanation: "〜からしてみれば＝立場から考えると。"
},
{
    question: "この問題は専門家でさえ解決できないのだから、私にできる（　　）。",
    choices: ["はずがない", "ことはない", "わけだ", "ものだ"],
    answer: 0,
    explanation: "〜はずがない＝可能性を強く否定。"
},
{
    question: "彼は失敗を恐れる（　　）、新しいことに挑戦しない。",
    choices: ["あまり", "だけに", "ばかりに", "あげく"],
    answer: 0,
    explanation: "〜あまり＝程度が大きすぎて。"
},
{
    question: "どれほど反対されようと、この計画を進める（　　）。",
    choices: ["ものだ", "つもりだ", "ことだ", "ばかりだ"],
    answer: 1,
    explanation: "意志表現。"
},
{
    question: "努力なしに成功はあり（　　）。",
    choices: ["えない", "うる", "かねない", "がたい"],
    answer: 0,
    explanation: "ありえない。"
},
{
    question: "この写真を見る（　　）、学生時代を思い出す。",
    choices: ["につけ", "につれ", "にしては", "にしても"],
    answer: 0,
    explanation: "〜につけ＝〜するといつも。"
},

{
    question: "彼ほど責任感の強い人はいないといっても過言では（　　）。",
    choices: ["ない", "ある", "いけない", "ならない"],
    answer: 0,
    explanation: "過言ではない。"
},
{
    question: "それは冗談で（　　）、本気で言っている。",
    choices: ["すまない", "ならない", "いられない", "おかない"],
    answer: 1,
    explanation: "冗談ではない。"
},
{
    question: "事故の状況から（　　）、スピードの出し過ぎが原因だろう。",
    choices: ["して", "しては", "してみれば", "しても"],
    answer: 0,
    explanation: "〜からして＝それだけで判断できる。"
},
{
    question: "彼は約束を守らない（　　）、時間にもルーズだ。",
    choices: ["ばかりか", "のみならず", "どころか", "ものの"],
    answer: 0,
    explanation: "〜ばかりか。"
},
{
    question: "そんな失礼なことは言う（　　）。",
    choices: ["ものではない", "ことではない", "わけではない", "ほどではない"],
    answer: 0,
    explanation: "禁止表現。"
},
{
    question: "病気の回復に（　　）、体力も戻ってきた。",
    choices: ["伴って", "応じて", "反して", "対して"],
    answer: 0,
    explanation: "〜に伴って＝一緒に変化。"
},
{
    question: "彼の発言には納得できない（　　）がある。",
    choices: ["もの", "こと", "ところ", "わけ"],
    answer: 0,
    explanation: "〜ものがある。"
},
{
    question: "試験当日になって慌てる（　　）、毎日少しずつ勉強した方がいい。",
    choices: ["くらいなら", "以上", "限り", "どころか"],
    answer: 0,
    explanation: "〜くらいなら。"
},
{
    question: "彼は忙しい（　　）、頼まれた仕事を引き受けた。",
    choices: ["ながらも", "ばかりか", "だけに", "のみならず"],
    answer: 0,
    explanation: "逆接の〜ながらも。"
},
{
    question: "社員の意見を（　　）制度改革が進められた。",
    choices: ["もとにして", "問わず", "反して", "限って"],
    answer: 0,
    explanation: "〜をもとにして。"
},

{
    question: "彼は日本語が上手な（　　）、通訳の仕事も任されている。",
    choices: ["だけあって", "だけに", "ばかりに", "だけで"],
    answer: 0,
    explanation: "〜だけあって＝予想どおり。"
},
{
    question: "今さら謝った（　　）、失った信用は戻らない。",
    choices: ["ところで", "ところが", "ところを", "ところだった"],
    answer: 0,
    explanation: "〜たところで＝しても無駄。"
},
{
    question: "この製品は高価な（　　）、多くの人に支持されている。",
    choices: ["だけに", "ものの", "どころか", "にしては"],
    answer: 0,
    explanation: "〜だけに＝それに応じて。"
},
{
    question: "彼の説明を聞く（　　）、この計画には無理がある。",
    choices: ["にしても", "にしたら", "にしてみれば", "につけ"],
    answer: 2,
    explanation: "〜にしてみれば＝その立場で考えると。"
},
{
    question: "彼は疲れているにもかかわらず働き続けた。",
    choices: ["順接", "逆接", "原因", "条件"],
    answer: 1,
    explanation: "逆接表現。"
},
{
    question: "細かいことを気にし（　　）と、仕事は進まない。",
    choices: ["すぎる", "がち", "つつ", "ながら"],
    answer: 0,
    explanation: "〜すぎると。"
},
{
    question: "その提案には賛成しかねる。",
    choices: ["賛成できない", "賛成したい", "賛成した", "賛成するだろう"],
    answer: 0,
    explanation: "〜かねる＝できない。"
},
{
    question: "これほどの成果は努力の結果にほかならない。",
    choices: ["努力そのものである", "努力以外が原因", "偶然だ", "不明だ"],
    answer: 0,
    explanation: "〜にほかならない＝まさに〜だ。"
},
{
    question: "彼は新入社員にしては落ち着いている。",
    choices: ["予想どおり", "予想以上", "予想と違って", "非常に悪い"],
    answer: 2,
    explanation: "〜にしては。"
},
{
    question: "この問題は議論の余地がない。",
    choices: ["疑問の余地がある", "議論する必要がないほど明確", "難しい", "不明"],
    answer: 1,
    explanation: "余地がない＝可能性がない。"
},
{
    question: "彼の説明は分かりやすい（　　）、内容が少し物足りなかった。",
    choices: ["ものの", "ばかりか", "だけに", "のみならず"],
    answer: 0,
    explanation: "〜ものの＝しかし。逆接。"
},
{
    question: "親である（　　）、子どもの行動に責任を持つべきだ。",
    choices: ["以上", "ものの", "どころか", "わりに"],
    answer: 0,
    explanation: "〜以上＝その立場なら当然。"
},
{
    question: "その仕事は私一人では責任が重すぎて引き受け（　　）。",
    choices: ["かねる", "かねない", "がたい", "えない"],
    answer: 0,
    explanation: "〜かねる＝難しくてできない。"
},
{
    question: "努力したからといって、必ず成功する（　　）。",
    choices: ["わけではない", "に違いない", "ものだ", "はずだ"],
    answer: 0,
    explanation: "部分否定。"
},
{
    question: "この本は専門家向けという（　　）、初心者には難しすぎる。",
    choices: ["わけだ", "ものだ", "だけあって", "だけに"],
    answer: 3,
    explanation: "〜だけに＝その理由で。"
},
{
    question: "どんな事情がある（　　）、規則は守らなければならない。",
    choices: ["にせよ", "ばかりか", "どころか", "ものの"],
    answer: 0,
    explanation: "〜にせよ＝たとえ〜でも。"
},
{
    question: "彼は謝るどころか、責任を他人に押し付ける（　　）。",
    choices: ["始末だ", "次第だ", "限りだ", "ものだ"],
    answer: 0,
    explanation: "〜始末だ＝悪い結果。"
},
{
    question: "その事件を（　　）、さまざまな意見が出された。",
    choices: ["めぐって", "通じて", "応じて", "問わず"],
    answer: 0,
    explanation: "〜をめぐって。"
},
{
    question: "彼は新人に（　　）仕事が非常に早い。",
    choices: ["しては", "しても", "したって", "してみれば"],
    answer: 0,
    explanation: "〜にしては＝その立場としては。"
},
{
    question: "説明を聞いた（　　）、ますます分からなくなった。",
    choices: ["ところで", "ところが", "ところを", "ところに"],
    answer: 1,
    explanation: "〜ところが＝予想外の結果。"
},

{
    question: "このプロジェクトの成功は皆さんの努力（　　）。",
    choices: ["あってのものだ", "ばかりか", "どころか", "ものの"],
    answer: 0,
    explanation: "〜あっての＝〜があって初めて。"
},
{
    question: "彼の実力を（　　）、今回の結果は意外だった。",
    choices: ["もってしても", "もとにして", "限りに", "通じて"],
    answer: 0,
    explanation: "〜をもってしても＝それほどでも。"
},
{
    question: "彼の気持ちは理解できない（　　）でもない。",
    choices: ["こと", "もの", "わけ", "はず"],
    answer: 2,
    explanation: "〜わけでもない＝完全否定ではない。"
},
{
    question: "彼女は才能がある（　　）、努力も怠らない。",
    choices: ["ばかりか", "どころか", "ものの", "反面"],
    answer: 0,
    explanation: "〜ばかりか＝その上。"
},
{
    question: "その問題は私たちが考えている（　　）深刻だ。",
    choices: ["以上に", "限り", "だけ", "ばかり"],
    answer: 0,
    explanation: "〜以上に＝よりも。"
},
{
    question: "彼は経験不足とは（　　）、よく頑張った。",
    choices: ["いえ", "いって", "いえども", "いうものの"],
    answer: 0,
    explanation: "〜とはいえ。"
},
{
    question: "そんな無礼なことは言う（　　）。",
    choices: ["ものではない", "ことではない", "わけではない", "はずではない"],
    answer: 0,
    explanation: "強い禁止。"
},
{
    question: "雨で試合は中止かと思ったが、予定どおり行われた（　　）。",
    choices: ["ものだ", "ものの", "ものを", "ものだから"],
    answer: 1,
    explanation: "逆接。"
},
{
    question: "この程度の失敗で落ち込む（　　）。",
    choices: ["ことはない", "わけにはいかない", "ものではない", "ものだ"],
    answer: 0,
    explanation: "〜ことはない＝必要ない。"
},
{
    question: "彼は約束を守る（　　）、時間にも正確だ。",
    choices: ["のみならず", "どころか", "ものの", "反面"],
    answer: 0,
    explanation: "〜のみならず＝だけでなく。"
},

{
    question: "今後の状況に（　　）、計画を変更する可能性があります。",
    choices: ["応じて", "問わず", "比べて", "対して"],
    answer: 0,
    explanation: "〜に応じて＝合わせて。"
},
{
    question: "彼は失敗した（　　）、最後には成功した。",
    choices: ["ものの", "ばかりか", "どころか", "だけに"],
    answer: 0,
    explanation: "逆接。"
},
{
    question: "詳細については担当者に聞く（　　）。",
    choices: ["ほかない", "しかない", "だけない", "ものない"],
    answer: 0,
    explanation: "〜ほかない＝他に方法がない。"
},
{
    question: "会議に先立ち、資料を配布した。",
    choices: ["会議の後", "会議の途中", "会議の前", "会議の最中"],
    answer: 2,
    explanation: "〜に先立ち＝前に。"
},
{
    question: "その事件が解決するまでは安心できない（　　）。",
    choices: ["ものだ", "限りだ", "次第だ", "ものがある"],
    answer: 0,
    explanation: "文脈上『安心できないものだ』。"
},
{
    question: "彼の説明は分かりやすい（　　）、細かい点で誤解を招く部分もあった。",
    choices: ["ものの", "ばかりか", "だけに", "のみならず"],
    answer: 0,
    explanation: "〜ものの＝しかし。逆接。"
},
{
    question: "この研究結果は高く評価する（　　）。",
    choices: ["に足りる", "に応じる", "に関する", "に際する"],
    answer: 0,
    explanation: "〜に足りる＝十分価値がある。"
},
{
    question: "今さら言い訳した（　　）、状況は変わらない。",
    choices: ["ところで", "ところが", "ところを", "ところでさえ"],
    answer: 0,
    explanation: "〜たところで＝しても無駄。"
},
{
    question: "彼は責任者である（　　）、最後まで責任を果たすべきだ。",
    choices: ["からには", "ばかりに", "どころか", "ものの"],
    answer: 0,
    explanation: "〜からには＝その立場なら当然。"
},
{
    question: "彼ほどの実力者（　　）、失敗することもある。",
    choices: ["にしても", "にしては", "にすると", "にかけては"],
    answer: 0,
    explanation: "〜にしても＝たとえ〜でも。"
},
{
    question: "この製品は高い（　　）、品質も非常に優れている。",
    choices: ["だけに", "ものの", "どころか", "にしては"],
    answer: 0,
    explanation: "〜だけに＝それ相応に。"
},
{
    question: "そんな危険なことは子ども（　　）分かる。",
    choices: ["ですら", "ばかりか", "のみならず", "あまり"],
    answer: 0,
    explanation: "〜ですら＝さえ。"
},
{
    question: "彼の話には納得できない（　　）がある。",
    choices: ["もの", "こと", "わけ", "ところ"],
    answer: 0,
    explanation: "〜ものがある。"
},
{
    question: "どれだけ説明されようと、信じる（　　）。",
    choices: ["気はない", "ものだ", "ことだ", "限りだ"],
    answer: 0,
    explanation: "〜気はない＝意思否定。"
},
{
    question: "彼は失敗した（　　）、最後には目標を達成した。",
    choices: ["ものの", "ばかりか", "どころか", "だけに"],
    answer: 0,
    explanation: "逆接。"
},

{
    question: "この問題は簡単そうに見えるが、解いてみると難しい（　　）。",
    choices: ["ものがある", "ことがある", "ところがある", "わけがある"],
    answer: 0,
    explanation: "〜ものがある＝強く感じる。"
},
{
    question: "親として反対せざるを（　　）。",
    choices: ["得ない", "しない", "ならない", "いられない"],
    answer: 0,
    explanation: "〜ざるを得ない。"
},
{
    question: "会議開始に（　　）、出席者へ資料を配布した。",
    choices: ["先立ち", "伴い", "応じて", "反して"],
    answer: 0,
    explanation: "〜に先立ち＝前に。"
},
{
    question: "そこまで言う（　　）、何か根拠があるのだろう。",
    choices: ["からには", "どころか", "ものの", "ばかりか"],
    answer: 0,
    explanation: "〜からには＝そこまで言うなら。"
},
{
    question: "彼は新人に（　　）、落ち着いて対応している。",
    choices: ["しては", "しても", "したら", "すると"],
    answer: 0,
    explanation: "〜にしては。"
},
{
    question: "事故の状況から（　　）、スピード違反が原因と思われる。",
    choices: ["して", "しては", "してみれば", "しても"],
    answer: 0,
    explanation: "〜からして。"
},
{
    question: "この問題については改めて議論する（　　）がある。",
    choices: ["余地", "恐れ", "末", "結果"],
    answer: 0,
    explanation: "議論の余地がある。"
},
{
    question: "彼女は日本語（　　）、英語や中国語も話せる。",
    choices: ["のみならず", "どころか", "ものの", "だけに"],
    answer: 0,
    explanation: "〜のみならず＝だけでなく。"
},
{
    question: "雨が降ろうと降る（　　）、出発する予定だ。",
    choices: ["まいと", "ものを", "ものの", "ものなら"],
    answer: 0,
    explanation: "〜ようと〜まいと。"
},
{
    question: "ここまで来た（　　）は、決して諦めない。",
    choices: ["以上", "限り", "だけ", "ほど"],
    answer: 0,
    explanation: "〜以上は＝〜したからには。"
},

{
    question: "彼は忙しいと言い（　　）、毎週旅行に出かけている。",
    choices: ["ながら", "つつ", "ものの", "ところで"],
    answer: 0,
    explanation: "〜と言いながら。"
},
{
    question: "彼の行動には理解し（　　）点が多い。",
    choices: ["がたい", "かねる", "すぎる", "えない"],
    answer: 0,
    explanation: "〜がたい＝難しい。"
},
{
    question: "失敗したからといって落ち込む（　　）。",
    choices: ["ことはない", "わけがない", "ものではない", "限りだ"],
    answer: 0,
    explanation: "〜ことはない＝必要ない。"
},
{
    question: "彼は約束を破るどころか、連絡（　　）してこなかった。",
    choices: ["さえ", "しか", "だけ", "ばかり"],
    answer: 0,
    explanation: "〜どころか〜さえ。"
},
{
    question: "そんな失礼な態度は許し（　　）。",
    choices: ["がたい", "かねる", "きれる", "うる"],
    answer: 0,
    explanation: "〜がたい＝受け入れ難い。"
},
{
    question: "試験に合格したければ、毎日努力する（　　）。",
    choices: ["に越したことはない", "にすぎない", "にほかならない", "に限らない"],
    answer: 0,
    explanation: "〜に越したことはない＝〜するのが最も望ましい。"
},
{
    question: "彼は責任者である以上、最後まで対応せずには（　　）。",
    choices: ["いられない", "ならない", "おかない", "すまない"],
    answer: 0,
    explanation: "〜ずにはいられない＝そうせずにいられない。"
},
{
    question: "彼の説明を聞く（　　）、この計画には無理があるようだ。",
    choices: ["にしてみれば", "にしても", "にしたって", "にしては"],
    answer: 0,
    explanation: "〜にしてみれば＝その立場から考えると。"
},
{
    question: "彼は病気だった。そのうえ無理をした（　　）、回復が遅れた。",
    choices: ["ものだから", "ところで", "ばかりか", "かわりに"],
    answer: 0,
    explanation: "〜ものだから＝強い理由。"
},
{
    question: "もしやり直せる（　　）、もう一度学生時代に戻りたい。",
    choices: ["ものなら", "ものの", "ものを", "ものだから"],
    answer: 0,
    explanation: "〜ものなら＝もし可能なら。"
},

{
    question: "彼の行動は理解できない（　　）でもないが、賛成はできない。",
    choices: ["もの", "こと", "わけ", "はず"],
    answer: 2,
    explanation: "〜わけでもない＝完全否定ではない。"
},
{
    question: "今回の失敗は彼の不注意にほかなら（　　）。",
    choices: ["ない", "ぬ", "ず", "かねない"],
    answer: 0,
    explanation: "〜にほかならない＝まさに〜である。"
},
{
    question: "その話を聞いたが最後、気になって眠れなくなった。",
    choices: ["一度〜すると", "最後に聞く", "聞き終わる", "聞かない"],
    answer: 0,
    explanation: "〜が最後＝一度そうなったら。"
},
{
    question: "どんなに高価だとしても、必要以上に買う（　　）。",
    choices: ["ものではない", "ことはない", "わけがない", "ものだ"],
    answer: 0,
    explanation: "〜ものではない＝強い禁止。"
},
{
    question: "彼は責任を感じているらしく、謝らずには（　　）。",
    choices: ["いられなかった", "ならなかった", "おかなかった", "すまなかった"],
    answer: 0,
    explanation: "〜ずにはいられない。"
},

{
    question: "この仕事は経験者でなければ務まらない（　　）。",
    choices: ["というものだ", "にすぎない", "どころではない", "にほかならない"],
    answer: 0,
    explanation: "〜というものだ＝当然そう評価される。"
},
{
    question: "彼ほど優秀な人なら成功して当然だといっても過言では（　　）。",
    choices: ["ない", "ある", "なる", "いえる"],
    answer: 0,
    explanation: "過言ではない。"
},
{
    question: "そんな危険な場所へ行くなんて、無謀（　　）。",
    choices: ["きわまりない", "かねない", "にちがいない", "にすぎない"],
    answer: 0,
    explanation: "〜きわまりない＝非常に〜だ。"
},
{
    question: "今さら謝ったところで許してもらえる（　　）。",
    choices: ["わけがない", "ことはない", "ものだ", "はずだ"],
    answer: 0,
    explanation: "〜わけがない＝強い否定。"
},
{
    question: "結果がどうあれ、自分で決めた道なら進む（　　）だ。",
    choices: ["まで", "もの", "だけ", "しか"],
    answer: 0,
    explanation: "〜までだ＝そうするしかない。"
},

{
    question: "会議中は私語を慎む（　　）。",
    choices: ["べきだ", "ものだ", "ことだ", "はずだ"],
    answer: 0,
    explanation: "〜べきだ＝義務・当然。"
},
{
    question: "彼は日本語ばかりか、中国語（　　）自由に話せる。",
    choices: ["さえ", "だけ", "ほど", "しか"],
    answer: 0,
    explanation: "〜ばかりか〜さえ。"
},
{
    question: "こんな重要なことを忘れる（　　）がない。",
    choices: ["はず", "こと", "もの", "だけ"],
    answer: 0,
    explanation: "〜はずがない＝あり得ない。"
},
{
    question: "彼の説明は分かりやすい（　　）、内容が浅い。",
    choices: ["反面", "ばかりか", "のみならず", "おかげで"],
    answer: 0,
    explanation: "〜反面＝一方で。"
},
{
    question: "この研究は長年の努力の末に完成した。",
    choices: ["長い過程の結果", "偶然", "短時間で", "将来"],
    answer: 0,
    explanation: "〜末に＝長い過程の結果。"
},

{
    question: "彼は謝るどころか、反省の色（　　）見せなかった。",
    choices: ["さえ", "だけ", "まで", "ほど"],
    answer: 0,
    explanation: "〜どころか〜さえ。"
},
{
    question: "彼の立場に（　　）、その判断も理解できる。",
    choices: ["してみれば", "しては", "したって", "したら"],
    answer: 0,
    explanation: "〜にしてみれば＝立場から考えると。"
},
{
    question: "何があろうと最後まで責任を果たす（　　）。",
    choices: ["つもりだ", "そうだ", "ようだ", "らしい"],
    answer: 0,
    explanation: "意思表現。"
},
{
    question: "こんなミスは二度と繰り返す（　　）。",
    choices: ["まい", "ない", "ましょう", "べき"],
    answer: 0,
    explanation: "〜まい＝強い否定意志。"
},
{
    question: "彼の性格から（　　）、嘘をつくとは思えない。",
    choices: ["して", "すると", "したら", "しても"],
    answer: 0,
    explanation: "〜からして。"
},
{
    question: "彼は失敗した責任を取らないでは（　　）。",
    choices: ["すまない", "おかない", "いられない", "ならない"],
    answer: 0,
    explanation: "〜ないではすまない＝そのままでは許されない。"
},
{
    question: "これだけ準備したのだから、成功しない（　　）。",
    choices: ["わけがない", "ものではない", "ことはない", "までだ"],
    answer: 0,
    explanation: "〜わけがない＝強い否定。"
},
{
    question: "条件が厳しいとはいえ、不可能という（　　）ではない。",
    choices: ["わけ", "もの", "こと", "ほど"],
    answer: 0,
    explanation: "〜わけではない＝部分否定。"
},
{
    question: "機会がある（　　）、ぜひ一度訪れてみたい。",
    choices: ["ものなら", "ものの", "ものを", "ものだから"],
    answer: 0,
    explanation: "〜ものなら＝もし可能なら。"
},
{
    question: "その話を聞いたら最後、気になって仕事どころでは（　　）。",
    choices: ["ない", "ある", "いかない", "ならない"],
    answer: 0,
    explanation: "どころではない＝その状況ではない。"
},

{
    question: "彼は病気だというのに、仕事を休もうと（　　）。",
    choices: ["しない", "もしない", "できない", "いない"],
    answer: 1,
    explanation: "〜ようともしない＝全くその気がない。"
},
{
    question: "こんな重要なことを忘れるなんて、信じられない（　　）。",
    choices: ["ものだ", "ことだ", "ところだ", "までだ"],
    answer: 0,
    explanation: "強い感嘆。"
},
{
    question: "結果はどうであれ、自分で決めたことだから最後までやる（　　）。",
    choices: ["つもりだ", "ものだ", "ことだ", "ようだ"],
    answer: 0,
    explanation: "意志表現。"
},
{
    question: "彼の努力には敬服せざるを（　　）。",
    choices: ["得ない", "しない", "ならない", "おかない"],
    answer: 0,
    explanation: "〜ざるを得ない。"
},
{
    question: "その映画は一度見るに（　　）作品だ。",
    choices: ["値する", "足る", "及ぶ", "違いない"],
    answer: 0,
    explanation: "〜に値する＝価値がある。"
},

{
    question: "そんなことを言おう（　　）、大問題になる。",
    choices: ["ものなら", "ものの", "ものを", "ものだから"],
    answer: 0,
    explanation: "〜ようものなら＝もし〜したら。"
},
{
    question: "この資料は会議に（　　）作成されたものである。",
    choices: ["あたって", "応じて", "反して", "際して"],
    answer: 0,
    explanation: "〜にあたって＝〜するときに。"
},
{
    question: "彼は自分の非を認めないばかりか、謝りもしない（　　）。",
    choices: ["始末だ", "限りだ", "ものだ", "ことだ"],
    answer: 0,
    explanation: "〜始末だ＝悪い結果。"
},
{
    question: "努力したからといって、必ず成果が出る（　　）。",
    choices: ["とは限らない", "に違いない", "ものだ", "はずだ"],
    answer: 0,
    explanation: "〜とは限らない。"
},
{
    question: "年齢を問わず参加できる（　　）、応募者が多い。",
    choices: ["だけに", "ものの", "どころか", "ばかりか"],
    answer: 0,
    explanation: "理由を表す。"
},

{
    question: "彼は日本語に限らず、英語も中国語も話せる。",
    choices: ["限定", "除外", "追加", "比較"],
    answer: 2,
    explanation: "〜に限らず＝〜だけでなく。"
},
{
    question: "そんな難しい仕事、私にはできそう（　　）。",
    choices: ["もない", "しかない", "だけない", "ほどない"],
    answer: 0,
    explanation: "〜そうもない＝できそうにない。"
},
{
    question: "彼の立場からすれば、その判断も理解できない（　　）。",
    choices: ["こともない", "ものもない", "ところもない", "はずもない"],
    answer: 0,
    explanation: "〜ないこともない＝多少は可能。"
},
{
    question: "この状況では計画を中止せざるを（　　）。",
    choices: ["得ない", "しない", "いられない", "ならない"],
    answer: 0,
    explanation: "〜ざるを得ない。"
},
{
    question: "彼は新人とは思えないほど落ち着いている。",
    choices: ["非常に落ち着いている", "全く落ち着いていない", "普通だ", "不安だ"],
    answer: 0,
    explanation: "程度の強調。"
},

{
    question: "彼の説明は納得できる（　　）がある。",
    choices: ["もの", "こと", "わけ", "ため"],
    answer: 0,
    explanation: "〜ものがある＝強く感じる。"
},
{
    question: "一度やると決めた（　　）、途中で諦めるわけにはいかない。",
    choices: ["以上", "ものの", "どころか", "ほど"],
    answer: 0,
    explanation: "〜以上＝〜したからには。"
},
{
    question: "景気は回復するどころか悪化する（　　）だ。",
    choices: ["一方", "限り", "次第", "まま"],
    answer: 0,
    explanation: "〜一方だ＝ますます。"
},
{
    question: "彼ほど優秀な人でも失敗することがあるのだから、私が失敗したからといって落ち込む（　　）。",
    choices: ["ことはない", "わけではない", "ものだ", "までだ"],
    answer: 0,
    explanation: "〜ことはない＝必要ない。"
},
{
    question: "その映画は期待した（　　）ではなかった。",
    choices: ["ほど", "だけ", "ばかり", "しか"],
    answer: 0,
    explanation: "〜ほど〜ない。"
},
{
    question: "彼の説明は説得力がある（　　）、完全に納得したわけではない。",
    choices: ["ものの", "ばかりか", "だけに", "のみならず"],
    answer: 0,
    explanation: "〜ものの＝しかし。逆接。"
},
{
    question: "こんな複雑な問題は専門家でなければ解決できない（　　）。",
    choices: ["というものだ", "にすぎない", "にほかならない", "どころではない"],
    answer: 0,
    explanation: "当然そう言えるという意味。"
},
{
    question: "今になって考えてみれば、その忠告に従う（　　）。",
    choices: ["べきだった", "はずだった", "ものだった", "ところだった"],
    answer: 0,
    explanation: "過去の後悔。"
},
{
    question: "部長の立場に（　　）、その判断も理解できる。",
    choices: ["してみれば", "しては", "したって", "すると"],
    answer: 0,
    explanation: "〜にしてみれば＝その立場から見れば。"
},
{
    question: "今回の成果は、皆さんの協力あっての（　　）だ。",
    choices: ["こと", "もの", "わけ", "ところ"],
    answer: 1,
    explanation: "〜あってのものだ。"
},

{
    question: "私は反対だが、多数決で決まった（　　）は従うしかない。",
    choices: ["以上", "限り", "ため", "ので"],
    answer: 0,
    explanation: "〜以上は＝〜したからには。"
},
{
    question: "この状況では謝罪せずには（　　）。",
    choices: ["いられない", "ならない", "すまない", "おかない"],
    answer: 0,
    explanation: "〜ずにはいられない。"
},
{
    question: "どんな理由がある（　　）、暴力は許されない。",
    choices: ["にせよ", "ものの", "どころか", "かわりに"],
    answer: 0,
    explanation: "〜にせよ＝たとえ〜でも。"
},
{
    question: "彼は不合格だったばかりか、再試験の資格（　　）失った。",
    choices: ["すら", "しか", "だけ", "ほど"],
    answer: 0,
    explanation: "〜ばかりか〜すら。"
},
{
    question: "そんな無責任な発言は聞き捨て（　　）。",
    choices: ["ならない", "いかない", "できない", "がたい"],
    answer: 0,
    explanation: "聞き捨てならない＝見過ごせない。"
},

{
    question: "彼の能力をもって（　　）、この問題は難しかった。",
    choices: ["しても", "しては", "してみても", "してから"],
    answer: 0,
    explanation: "〜をもってしても＝それほどでも。"
},
{
    question: "学生である（　　）、勉強を第一に考えるべきだ。",
    choices: ["からには", "どころか", "ばかりか", "ものの"],
    answer: 0,
    explanation: "〜からには＝その立場なら当然。"
},
{
    question: "この事故は単なるミスでは（　　）。",
    choices: ["すまされない", "終わらない", "いられない", "おかない"],
    answer: 0,
    explanation: "重大な問題である。"
},
{
    question: "この映画は一度見るに（　　）。",
    choices: ["値する", "及ぶ", "足る", "限る"],
    answer: 0,
    explanation: "〜に値する＝見る価値がある。"
},
{
    question: "彼女は歌が上手な（　　）、作詞の才能もある。",
    choices: ["ばかりか", "ものの", "どころか", "かわりに"],
    answer: 0,
    explanation: "〜ばかりか＝その上。"
},

{
    question: "この地域では冬になると雪が降って（　　）。",
    choices: ["たまらない", "ならない", "しかたがない", "やまない"],
    answer: 3,
    explanation: "〜てやまない＝ずっと続く。"
},
{
    question: "その提案には賛成しかねる。",
    choices: ["賛成できない", "賛成したい", "賛成した", "迷っている"],
    answer: 0,
    explanation: "〜かねる＝できない。"
},
{
    question: "病気が治ったからといって、すぐ運動するのは危険（　　）。",
    choices: ["というものだ", "にすぎない", "ところだ", "ばかりだ"],
    answer: 0,
    explanation: "強い評価。"
},
{
    question: "今日中に終わらせろと言われても、無理な（　　）。",
    choices: ["ものは無理だ", "ことはない", "ものではない", "わけがない"],
    answer: 0,
    explanation: "慣用表現。"
},
{
    question: "そんな非常識なことをするなんて、考えられない（　　）。",
    choices: ["ものだ", "ことだ", "ところだ", "わけだ"],
    answer: 0,
    explanation: "驚き・非難。"
},

{
    question: "会社の発展は社員一人一人の努力（　　）。",
    choices: ["あってのものだ", "ばかりのものだ", "だけのものだ", "ほどのものだ"],
    answer: 0,
    explanation: "〜あってのものだ。"
},
{
    question: "この程度のミスなら謝る（　　）。",
    choices: ["にはあたらない", "にすぎない", "にほかならない", "にちがいない"],
    answer: 0,
    explanation: "〜にはあたらない＝その必要はない。"
},
{
    question: "彼の立場からすると、その判断も無理からぬ（　　）。",
    choices: ["ことだ", "ものだ", "ところだ", "わけだ"],
    answer: 1,
    explanation: "無理もない。"
},
{
    question: "景気は回復するどころか、悪化の一途を（　　）。",
    choices: ["たどっている", "進めている", "歩いている", "向いている"],
    answer: 0,
    explanation: "悪化の一途をたどる。"
},
{
    question: "彼は約束を守るどころか、連絡すらしてこなかった。",
    choices: ["逆接", "条件", "理由", "列挙"],
    answer: 0,
    explanation: "〜どころか＝それどころではない。"
},
{
    question: "彼の説明は理論的ではある（　　）、実際には役に立たない部分も多い。",
    choices: ["ものの", "ばかりか", "のみならず", "だけに"],
    answer: 0,
    explanation: "〜ものの＝逆接。「〜だが」。"
},
{
    question: "この程度の失敗で諦める（　　）。",
    choices: ["にはあたらない", "にほかならない", "にすぎない", "にもかかわらない"],
    answer: 0,
    explanation: "〜にはあたらない＝〜するほどではない。"
},
{
    question: "そんな不注意なことをした以上、謝らずには（　　）。",
    choices: ["いられない", "ならない", "おかない", "すまない"],
    answer: 0,
    explanation: "〜ずにはいられない＝自然にそうせざるを得ない。"
},
{
    question: "彼は留学経験がある（　　）、発音がとても自然だ。",
    choices: ["だけあって", "ばかりに", "ものの", "どころか"],
    answer: 0,
    explanation: "〜だけあって＝期待どおり。"
},
{
    question: "この商品は価格の（　　）、品質が非常に高い。",
    choices: ["わりに", "ために", "結果に", "以上に"],
    answer: 0,
    explanation: "〜わりに＝予想と違って。"
},

{
    question: "彼の立場になって考えてみれば、その行動も理解できない（　　）。",
    choices: ["こともない", "ものもない", "ところもない", "はずもない"],
    answer: 0,
    explanation: "〜ないこともない＝多少は理解できる。"
},
{
    question: "そのような態度は社会人としてある（　　）ことだ。",
    choices: ["まじき", "べき", "はずの", "ような"],
    answer: 0,
    explanation: "〜まじき＝あるべきではない。N2頻出。"
},
{
    question: "彼は約束を守るどころか、連絡（　　）してこなかった。",
    choices: ["さえ", "だけ", "しか", "ほど"],
    answer: 0,
    explanation: "〜どころか〜さえ。"
},
{
    question: "結果がどうあれ、最後まで努力する（　　）だ。",
    choices: ["まで", "もの", "だけ", "しか"],
    answer: 0,
    explanation: "〜までだ＝そうするしかない。"
},
{
    question: "そんな危険な場所へ一人で行くなんて、無謀（　　）。",
    choices: ["きわまりない", "にすぎない", "にちがいない", "ものだ"],
    answer: 0,
    explanation: "〜きわまりない＝非常に〜だ。"
},

{
    question: "彼の意見には賛成できない（　　）、参考になる点もある。",
    choices: ["までも", "ものの", "どころか", "ばかりか"],
    answer: 1,
    explanation: "逆接。"
},
{
    question: "彼ほど経験豊富な人（　　）、この問題は難しい。",
    choices: ["にしても", "にしては", "にすれば", "により"],
    answer: 0,
    explanation: "〜にしても＝たとえ〜でも。"
},
{
    question: "失敗したからといって落ち込む（　　）。",
    choices: ["ことはない", "わけではない", "ものではない", "までだ"],
    answer: 0,
    explanation: "〜ことはない＝その必要はない。"
},
{
    question: "親である（　　）、子どもの将来を心配するのは当然だ。",
    choices: ["以上", "ばかり", "のみ", "ところ"],
    answer: 0,
    explanation: "〜以上＝〜なのだから。"
},
{
    question: "その提案には賛成しかねる。",
    choices: ["賛成できない", "賛成したい", "賛成している", "賛成する予定だ"],
    answer: 0,
    explanation: "〜かねる＝できない。"
},

{
    question: "このような結果になったのは、努力不足にほかなら（　　）。",
    choices: ["ない", "ぬ", "ず", "かねない"],
    answer: 0,
    explanation: "〜にほかならない＝まさに〜だ。"
},
{
    question: "この仕事は新人には荷が重いといわざるを（　　）。",
    choices: ["得ない", "しない", "ならない", "いられない"],
    answer: 0,
    explanation: "〜ざるを得ない。"
},
{
    question: "そのニュースを聞いたとたん、皆が驚きの声を上げた。",
    choices: ["直後", "理由", "比較", "条件"],
    answer: 0,
    explanation: "〜とたん＝その直後。"
},
{
    question: "この制度は時代の変化に（　　）見直されるべきだ。",
    choices: ["応じて", "反して", "問わず", "比べて"],
    answer: 0,
    explanation: "〜に応じて＝合わせて。"
},
{
    question: "そんなことを言おう（　　）、大問題になる。",
    choices: ["ものなら", "ものの", "ものを", "ものだから"],
    answer: 0,
    explanation: "〜ようものなら。"
},

{
    question: "一度失敗した（　　）、そこで諦める必要はない。",
    choices: ["からといって", "ばかりに", "ものだから", "ために"],
    answer: 0,
    explanation: "〜からといって＝だからといって。"
},
{
    question: "彼の発言は誤解を招き（　　）。",
    choices: ["かねない", "かねる", "がたい", "えない"],
    answer: 0,
    explanation: "〜かねない＝悪い結果の可能性。"
},
{
    question: "この映画は一度見るに（　　）。",
    choices: ["値する", "及ぶ", "足る", "違いない"],
    answer: 0,
    explanation: "〜に値する＝価値がある。"
},
{
    question: "彼の人柄から（　　）、そんなことはしないだろう。",
    choices: ["して", "しては", "すると", "してみれば"],
    answer: 0,
    explanation: "〜からして＝それだけで判断できる。"
},
{
    question: "詳細については担当者に聞く（　　）だ。",
    choices: ["ほかない", "しかない", "だけない", "ものない"],
    answer: 0,
    explanation: "〜ほかない＝それ以外に方法がない。"
},
{
    question: "彼は約束を破った以上、謝罪せずには（　　）。",
    choices: ["すまない", "いられない", "ならない", "おかない"],
    answer: 0,
    explanation: "〜ないではすまない＝そのままでは許されない。"
},
{
    question: "今さら後悔した（　　）、結果は変わらない。",
    choices: ["ところで", "ところが", "ところを", "ところだった"],
    answer: 0,
    explanation: "〜たところで＝〜しても無駄だ。"
},
{
    question: "彼は新人に（　　）、ずいぶん落ち着いている。",
    choices: ["しては", "しても", "したって", "してみれば"],
    answer: 0,
    explanation: "〜にしては＝その立場としては予想外。"
},
{
    question: "その計画は失敗するおそれがある（　　）、慎重に進めるべきだ。",
    choices: ["だけに", "にしても", "からして", "とはいえ"],
    answer: 2,
    explanation: "〜からして＝それだけで判断できる。"
},
{
    question: "今回の決定は社長の意向に基づくもの（　　）。",
    choices: ["にほかならない", "にすぎない", "にちがいない", "にかぎる"],
    answer: 0,
    explanation: "〜にほかならない＝まさに〜である。"
},

{
    question: "そんな危険な場所へ行こう（　　）、家族は反対するだろう。",
    choices: ["ものなら", "ものの", "ものを", "ものだから"],
    answer: 0,
    explanation: "〜ようものなら＝もし〜したら。"
},
{
    question: "彼女の成功は努力の結果といっても過言では（　　）。",
    choices: ["ない", "ある", "いけない", "ならない"],
    answer: 0,
    explanation: "過言ではない＝言い過ぎではない。"
},
{
    question: "どんなに忙しくても、健康管理を怠る（　　）。",
    choices: ["べきではない", "わけではない", "ことはない", "ものがある"],
    answer: 0,
    explanation: "〜べきではない＝強い助言・義務。"
},
{
    question: "この仕事は私には責任が重すぎて引き受け（　　）。",
    choices: ["かねる", "かねない", "がたい", "えない"],
    answer: 0,
    explanation: "〜かねる＝困難でできない。"
},
{
    question: "彼は親切な（　　）、少しおせっかいなところもある。",
    choices: ["反面", "上に", "ばかりか", "どころか"],
    answer: 0,
    explanation: "〜反面＝一方で。"
},

{
    question: "ここまで準備したのだから、成功しない（　　）。",
    choices: ["わけがない", "ものがない", "ことがない", "はずがある"],
    answer: 0,
    explanation: "〜わけがない＝絶対にあり得ない。"
},
{
    question: "彼ほどの経験者（　　）、この問題は難しいだろう。",
    choices: ["にしても", "にしては", "にしたら", "に対して"],
    answer: 0,
    explanation: "〜にしても＝たとえ〜でも。"
},
{
    question: "彼は謝るどころか、反省の言葉（　　）なかった。",
    choices: ["すら", "こそ", "しか", "だけ"],
    answer: 0,
    explanation: "〜どころか〜すら。"
},
{
    question: "努力したからといって、必ず結果が出る（　　）。",
    choices: ["とは限らない", "に違いない", "ものだ", "はずだ"],
    answer: 0,
    explanation: "〜とは限らない＝必ずしもそうとは言えない。"
},
{
    question: "この小説は一読に（　　）作品だ。",
    choices: ["値する", "足りる", "及ぶ", "かかわる"],
    answer: 0,
    explanation: "〜に値する＝価値がある。"
},

{
    question: "景気は回復するどころか、悪化の一途を（　　）。",
    choices: ["たどっている", "進んでいる", "歩いている", "向かっている"],
    answer: 0,
    explanation: "慣用表現『一途をたどる』。"
},
{
    question: "その話を聞いたとたん、皆立ち上がった。",
    choices: ["直後", "原因", "比較", "結果"],
    answer: 0,
    explanation: "〜とたん＝その直後。"
},
{
    question: "彼の立場に（　　）、その決断も理解できる。",
    choices: ["してみれば", "しては", "したら", "しても"],
    answer: 0,
    explanation: "〜にしてみれば＝その立場から見ると。"
},
{
    question: "このような事故を起こした以上、責任を取らずには（　　）。",
    choices: ["すまない", "いられない", "ならない", "おかない"],
    answer: 0,
    explanation: "〜ずにはすまない。"
},
{
    question: "その映画は期待した（　　）ではなかった。",
    choices: ["ほど", "だけ", "ばかり", "しか"],
    answer: 0,
    explanation: "〜ほど〜ない。"
},

{
    question: "彼は日本語のみならず、中国語（　　）話せる。",
    choices: ["さえ", "だけ", "しか", "ほど"],
    answer: 0,
    explanation: "〜のみならず〜さえ。"
},
{
    question: "今になって考えれば、その忠告を聞いておく（　　）。",
    choices: ["べきだった", "はずだった", "ものだった", "ところだった"],
    answer: 0,
    explanation: "過去の後悔。"
},
{
    question: "彼は忙しいと言い（　　）、休日には旅行ばかりしている。",
    choices: ["ながら", "つつ", "ものの", "ところで"],
    answer: 0,
    explanation: "〜ながら＝〜のに。"
},
{
    question: "その事件について議論する（　　）がある。",
    choices: ["余地", "恐れ", "限界", "結果"],
    answer: 0,
    explanation: "議論の余地がある。"
},
{
    question: "彼の能力をもって（　　）、解決できなかった問題だ。",
    choices: ["しても", "しては", "すると", "したら"],
    answer: 0,
    explanation: "〜をもってしても＝それほどでも。"
},
{
    question: "彼の実力を考えれば、今回の結果は当然だといっても過言では（　　）。",
    choices: ["ない", "ある", "いけない", "ならない"],
    answer: 0,
    explanation: "過言ではない＝言い過ぎではない。"
},
{
    question: "その研究は高く評価するに（　　）。",
    choices: ["値する", "及ぶ", "足る", "関する"],
    answer: 0,
    explanation: "〜に値する＝価値がある。"
},
{
    question: "今さら後悔した（　　）、事態は改善しない。",
    choices: ["ところで", "ところが", "ところを", "ところだった"],
    answer: 0,
    explanation: "〜たところで＝〜しても無駄。"
},
{
    question: "彼は謝るどころか、お礼の言葉（　　）なかった。",
    choices: ["すら", "こそ", "だけ", "しか"],
    answer: 0,
    explanation: "〜どころか〜すら。"
},
{
    question: "この地域では高齢化が進む（　　）だ。",
    choices: ["一方", "ばかり", "限り", "まま"],
    answer: 0,
    explanation: "〜一方だ＝ますます〜。"
},

{
    question: "学生である（　　）、勉強を最優先にすべきだ。",
    choices: ["以上", "のみ", "だけ", "ほど"],
    answer: 0,
    explanation: "〜以上＝〜なのだから。"
},
{
    question: "そんな危険なことは想像する（　　）恐ろしい。",
    choices: ["だに", "まで", "しか", "だけ"],
    answer: 0,
    explanation: "〜だに＝〜するだけでも。N2頻出。"
},
{
    question: "彼ほど誠実な人はいないといっても過言ではない。",
    choices: ["最大級の評価", "否定", "仮定", "理由"],
    answer: 0,
    explanation: "高い評価を表す。"
},
{
    question: "会議の開始に（　　）、資料を配布した。",
    choices: ["先立ち", "応じて", "伴い", "反して"],
    answer: 0,
    explanation: "〜に先立ち＝前に。"
},
{
    question: "この仕事は責任が重く、私には引き受け（　　）。",
    choices: ["かねる", "かねない", "がたい", "えない"],
    answer: 0,
    explanation: "〜かねる＝難しくてできない。"
},

{
    question: "努力したからといって成功する（　　）。",
    choices: ["とは限らない", "に違いない", "ものだ", "はずだ"],
    answer: 0,
    explanation: "必ずしもそうではない。"
},
{
    question: "彼は留学経験がある（　　）、発音が自然だ。",
    choices: ["だけあって", "ばかりに", "ものの", "どころか"],
    answer: 0,
    explanation: "〜だけあって＝期待通り。"
},
{
    question: "どんな理由がある（　　）、暴力は許されない。",
    choices: ["にせよ", "ものの", "ところで", "うえに"],
    answer: 0,
    explanation: "〜にせよ＝たとえ〜でも。"
},
{
    question: "その提案には賛成しかねる。",
    choices: ["賛成できない", "賛成したい", "賛成している", "賛成する予定だ"],
    answer: 0,
    explanation: "〜かねる＝〜できない。"
},
{
    question: "彼女は語学が得意な（　　）、数学も優秀だ。",
    choices: ["ばかりか", "どころか", "ものの", "反面"],
    answer: 0,
    explanation: "〜ばかりか＝その上。"
},

{
    question: "そんな無責任な発言は聞き捨て（　　）。",
    choices: ["ならない", "いかない", "できない", "がたい"],
    answer: 0,
    explanation: "聞き捨てならない＝見過ごせない。"
},
{
    question: "今回の失敗は彼の不注意にほかなら（　　）。",
    choices: ["ない", "ぬ", "ず", "かねない"],
    answer: 0,
    explanation: "〜にほかならない＝まさに〜だ。"
},
{
    question: "その映画は期待した（　　）ではなかった。",
    choices: ["ほど", "だけ", "しか", "こそ"],
    answer: 0,
    explanation: "〜ほど〜ない。"
},
{
    question: "親の立場に（　　）、その心配も理解できる。",
    choices: ["してみれば", "しては", "したら", "しても"],
    answer: 0,
    explanation: "〜にしてみれば。"
},
{
    question: "彼は自分が悪いと知りながら謝ろうと（　　）。",
    choices: ["もしない", "できない", "いない", "ならない"],
    answer: 0,
    explanation: "〜ようともしない。"
},

{
    question: "今後の状況に（　　）計画を見直す必要がある。",
    choices: ["応じて", "反して", "問わず", "比べて"],
    answer: 0,
    explanation: "〜に応じて。"
},
{
    question: "一度失った信用を取り戻すのは容易ではない（　　）。",
    choices: ["ものだ", "ところだ", "ことだ", "までだ"],
    answer: 0,
    explanation: "感慨・一般論。"
},
{
    question: "事故の状況から（　　）、スピード超過が原因だろう。",
    choices: ["して", "すると", "したら", "しても"],
    answer: 0,
    explanation: "〜からして＝それだけで判断できる。"
},
{
    question: "その問題は議論の余地が（　　）。",
    choices: ["ある", "ない", "多い", "深い"],
    answer: 0,
    explanation: "議論の余地がある＝検討できる。"
},
{
    question: "ここまで準備したのだから、成功しない（　　）。",
    choices: ["わけがない", "ことがない", "はずがある", "ものがある"],
    answer: 0,
    explanation: "〜わけがない＝絶対にない。"
},
{
    question: "彼の説明は納得できる（　　）がある。",
    choices: ["もの", "こと", "わけ", "ところ"],
    answer: 0,
    explanation: "〜ものがある＝強くそう感じられる。"
},
{
    question: "この問題は一人で解決できるようなものでは（　　）。",
    choices: ["ない", "ある", "いけない", "しまう"],
    answer: 0,
    explanation: "〜ものではない＝強い否定。"
},
{
    question: "彼は新人とはいえ、その発言には責任を持つ（　　）。",
    choices: ["べきだ", "ものだ", "はずだ", "ようだ"],
    answer: 0,
    explanation: "〜べきだ＝義務・当然。"
},
{
    question: "何度説明しても理解してもらえず、困り（　　）。",
    choices: ["きった", "ぬいた", "ぬけた", "かねた"],
    answer: 0,
    explanation: "〜きる＝最後までやり通す。"
},
{
    question: "彼の実力からすれば当然の結果だといっても過言では（　　）。",
    choices: ["ない", "ある", "いけない", "しまう"],
    answer: 0,
    explanation: "過言ではない。"
},

{
    question: "この研究成果は高く評価されて（　　）。",
    choices: ["しかるべきだ", "やまない", "たまらない", "ならない"],
    answer: 1,
    explanation: "〜てやまない＝深く尊敬・賞賛する。"
},
{
    question: "その話が本当だとは信じ（　　）。",
    choices: ["がたい", "かねる", "きれる", "うる"],
    answer: 0,
    explanation: "〜がたい＝難しい。"
},
{
    question: "今さら反対した（　　）、決定は覆らない。",
    choices: ["ところで", "ところが", "ところを", "ところだった"],
    answer: 0,
    explanation: "〜たところで＝しても無駄。"
},
{
    question: "両親の期待を考えると、途中で諦める（　　）。",
    choices: ["わけにはいかない", "ことはない", "ものではない", "はずがない"],
    answer: 0,
    explanation: "〜わけにはいかない＝立場上できない。"
},
{
    question: "その映画は一度見るに（　　）作品だ。",
    choices: ["値する", "及ぶ", "足る", "関する"],
    answer: 0,
    explanation: "〜に値する＝価値がある。"
},

{
    question: "彼は謝るどころか、反省の色（　　）見せなかった。",
    choices: ["すら", "だけ", "こそ", "ほど"],
    answer: 0,
    explanation: "〜どころか〜すら。"
},
{
    question: "そんな失礼な話は聞き捨て（　　）。",
    choices: ["ならない", "いけない", "できない", "かねない"],
    answer: 0,
    explanation: "聞き捨てならない＝見過ごせない。"
},
{
    question: "どれほど忙しくても、健康を犠牲にしてまで働く（　　）。",
    choices: ["ものではない", "ことはない", "わけではない", "ものだ"],
    answer: 0,
    explanation: "強い否定・忠告。"
},
{
    question: "失敗したからといって、落ち込む（　　）。",
    choices: ["ことはない", "わけにはいかない", "ものではない", "はずがない"],
    answer: 0,
    explanation: "〜ことはない＝必要ない。"
},
{
    question: "彼ほど努力する人は見たことがない。",
    choices: ["最大級の評価", "否定", "仮定", "条件"],
    answer: 0,
    explanation: "〜ほど〜ない。"
},

{
    question: "その事故は単なるミスでは（　　）。",
    choices: ["すまされない", "終わらない", "続かない", "見えない"],
    answer: 0,
    explanation: "重大な問題である。"
},
{
    question: "このような失敗は二度と繰り返す（　　）。",
    choices: ["まい", "ない", "ましょう", "べき"],
    answer: 0,
    explanation: "〜まい＝強い否定意志。"
},
{
    question: "その話を聞いたが最後、気になって眠れなくなった。",
    choices: ["一度そうなったら", "最後の話", "過去の話", "聞かなかった"],
    answer: 0,
    explanation: "〜が最後。"
},
{
    question: "親として心配するのも無理からぬ（　　）。",
    choices: ["ことだ", "ものだ", "わけだ", "ところだ"],
    answer: 1,
    explanation: "無理もない。"
},
{
    question: "景気は改善するどころか、悪化の一途を（　　）。",
    choices: ["たどっている", "歩いている", "見ている", "向いている"],
    answer: 0,
    explanation: "慣用表現。"
},

{
    question: "その知らせを聞いて喜ばずには（　　）。",
    choices: ["いられなかった", "ならなかった", "おかなかった", "すまなかった"],
    answer: 0,
    explanation: "〜ずにはいられない。"
},
{
    question: "この計画は検討の余地が（　　）。",
    choices: ["ある", "ない", "多い", "深い"],
    answer: 0,
    explanation: "検討の余地がある。"
},
{
    question: "どんな理由があるにせよ、約束を破ることは許されない。",
    choices: ["譲歩", "原因", "比較", "条件"],
    answer: 0,
    explanation: "〜にせよ＝たとえ〜でも。"
},
{
    question: "彼は責任者である（　　）、最後まで対応すべきだ。",
    choices: ["からには", "どころか", "ばかりに", "かわりに"],
    answer: 0,
    explanation: "〜からには＝その立場なら当然。"
},
{
    question: "彼女の成功は才能というより努力の結果にほかならない。",
    choices: ["まさに努力の結果", "偶然の成功", "才能だけ", "不明"],
    answer: 0,
    explanation: "〜にほかならない。"
},
{
    question: "彼の説明は説得力がある（　　）、すべてが正しいとは言えない。",
    choices: ["ものの", "ばかりか", "だけに", "のみならず"],
    answer: 0,
    explanation: "〜ものの＝しかし。逆接。"
},
{
    question: "この映画は一度見るに（　　）作品だ。",
    choices: ["値する", "足る", "及ぶ", "あたる"],
    answer: 0,
    explanation: "〜に値する＝〜する価値がある。"
},
{
    question: "彼の実力をもって（　　）、今回の問題は難しかった。",
    choices: ["しても", "しては", "すると", "したら"],
    answer: 0,
    explanation: "〜をもってしても＝それほどでも。"
},
{
    question: "そんなことを言おう（　　）、皆に反対されるだろう。",
    choices: ["ものなら", "ものの", "ものを", "ものだから"],
    answer: 0,
    explanation: "〜ようものなら＝もし〜したら。"
},
{
    question: "彼は約束を守らないばかりか、謝り（　　）しない。",
    choices: ["さえ", "だけ", "ほど", "しか"],
    answer: 0,
    explanation: "〜ばかりか〜さえ。"
},

{
    question: "親である（　　）、子どもの将来を心配するのは当然だ。",
    choices: ["以上", "のみ", "だけ", "ほど"],
    answer: 0,
    explanation: "〜以上＝〜なのだから。"
},
{
    question: "その事故については調査する（　　）がある。",
    choices: ["余地", "恐れ", "限界", "途中"],
    answer: 0,
    explanation: "〜余地がある＝検討の可能性がある。"
},
{
    question: "彼の立場に（　　）、その判断も無理はない。",
    choices: ["してみれば", "しては", "したら", "しても"],
    answer: 0,
    explanation: "〜にしてみれば＝その立場から見ると。"
},
{
    question: "そんな無責任な発言は聞き捨て（　　）。",
    choices: ["ならない", "いけない", "できない", "かねない"],
    answer: 0,
    explanation: "聞き捨てならない＝見過ごせない。"
},
{
    question: "彼は自分が悪いと知りながら認めようと（　　）。",
    choices: ["もしない", "できない", "いない", "ならない"],
    answer: 0,
    explanation: "〜ようともしない＝全くその気がない。"
},

{
    question: "今さら反対した（　　）、決定は変わらない。",
    choices: ["ところで", "ところが", "ところを", "ところだった"],
    answer: 0,
    explanation: "〜たところで＝しても無駄。"
},
{
    question: "この問題は専門家でも判断しかねる（　　）。",
    choices: ["ほどだ", "ものだ", "ことだ", "わけだ"],
    answer: 0,
    explanation: "程度の強調。"
},
{
    question: "その提案には賛成できない（　　）でもない。",
    choices: ["わけ", "もの", "こと", "はず"],
    answer: 0,
    explanation: "〜ないわけでもない＝完全否定ではない。"
},
{
    question: "彼ほどの経験者（　　）、その仕事は難しい。",
    choices: ["にしても", "にしては", "にしたら", "に対して"],
    answer: 0,
    explanation: "〜にしても＝たとえ〜でも。"
},
{
    question: "その話を聞いたが最後、気になって眠れなくなった。",
    choices: ["一度そうなったら", "最後の話", "昔の話", "聞かなかった"],
    answer: 0,
    explanation: "〜が最後＝一度そうなったら。"
},

{
    question: "彼は責任者である（　　）、最後まで対応するべきだ。",
    choices: ["からには", "どころか", "ばかりに", "かわりに"],
    answer: 0,
    explanation: "〜からには＝その立場なら当然。"
},
{
    question: "この失敗は単なるミスでは（　　）。",
    choices: ["すまされない", "終わらない", "続かない", "見えない"],
    answer: 0,
    explanation: "重大な問題である。"
},
{
    question: "このような行為は社会人としてある（　　）ことだ。",
    choices: ["まじき", "べき", "らしい", "ような"],
    answer: 0,
    explanation: "〜まじき＝あるべきでない。"
},
{
    question: "彼の説明には納得できる（　　）がある。",
    choices: ["もの", "こと", "ため", "だけ"],
    answer: 0,
    explanation: "〜ものがある＝そう強く感じる。"
},
{
    question: "こんな大事な仕事を任された以上、失敗する（　　）。",
    choices: ["わけにはいかない", "ことはない", "ものではない", "はずがない"],
    answer: 0,
    explanation: "立場上できない。"
},

{
    question: "その選手は引退した（　　）、今でも人気が高い。",
    choices: ["にもかかわらず", "ばかりか", "のみならず", "だけに"],
    answer: 0,
    explanation: "〜にもかかわらず＝逆接。"
},
{
    question: "彼女の成功は努力の結果にほかなら（　　）。",
    choices: ["ない", "ぬ", "ず", "かねない"],
    answer: 0,
    explanation: "〜にほかならない。"
},
{
    question: "どんな事情があるにせよ、約束を破ることは許されない。",
    choices: ["譲歩", "理由", "結果", "比較"],
    answer: 0,
    explanation: "〜にせよ＝たとえ〜でも。"
},
{
    question: "この計画は今後の状況に（　　）変更される可能性がある。",
    choices: ["応じて", "反して", "問わず", "比べて"],
    answer: 0,
    explanation: "〜に応じて＝合わせて。"
},
{
    question: "努力したからといって、必ず成功する（　　）。",
    choices: ["とは限らない", "に違いない", "はずだ", "ものだ"],
    answer: 0,
    explanation: "必ずしもそうではない。"
},
{
    question: "この制度の導入によって業務の効率が向上した。\n「導入」の読み方は？",
    choices: ["どうにゅう", "とうにゅう", "どうゆう", "とうゆう"],
    answer: 0,
    explanation: "導入（どうにゅう）"
},
{
    question: "最近の経済動向を分析する。\n「動向」の読み方は？",
    choices: ["どうこう", "どうむき", "どうしょう", "どうじょう"],
    answer: 0,
    explanation: "動向（どうこう）"
},
{
    question: "新しい技術の普及が進んでいる。\n「普及」の読み方は？",
    choices: ["ふきゅう", "ふきょう", "ふしゅう", "ふしゅう"],
    answer: 0,
    explanation: "普及（ふきゅう）"
},
{
    question: "安全確保のため点検を行う。\n「確保」の読み方は？",
    choices: ["かくほ", "かっぽ", "かくぼ", "かっぼ"],
    answer: 0,
    explanation: "確保（かくほ）"
},
{
    question: "適切な措置が求められる。\n「措置」の読み方は？",
    choices: ["そち", "しょち", "そうち", "さち"],
    answer: 0,
    explanation: "措置（そち）"
},
{
    question: "企業は人材育成に力を入れている。\n「育成」の読み方は？",
    choices: ["いくせい", "いくしょう", "そだせい", "いくじょう"],
    answer: 0,
    explanation: "育成（いくせい）"
},
{
    question: "経費削減が課題となっている。\n「削減」の読み方は？",
    choices: ["さくげん", "けずげん", "さくけん", "しょうげん"],
    answer: 0,
    explanation: "削減（さくげん）"
},
{
    question: "地域社会への貢献が評価された。\n「貢献」の読み方は？",
    choices: ["こうけん", "こうこん", "きょうけん", "こうげん"],
    answer: 0,
    explanation: "貢献（こうけん）"
},
{
    question: "著しい成果を上げた。\n「著しい」の読み方は？",
    choices: ["いちじるしい", "ちょしい", "いじるしい", "しるしい"],
    answer: 0,
    explanation: "著しい（いちじるしい）"
},
{
    question: "妥当な判断だと思う。\n「妥当」の読み方は？",
    choices: ["だとう", "たいとう", "だどう", "たとう"],
    answer: 0,
    explanation: "妥当（だとう）"
},

{
    question: "その方針は概ね支持されている。\n「概ね」の読み方は？",
    choices: ["おおむね", "おおよそ", "がいね", "かいね"],
    answer: 0,
    explanation: "概ね（おおむね）"
},
{
    question: "企業の業績が回復した。\n「業績」の読み方は？",
    choices: ["ぎょうせき", "ごうせき", "ぎょうじゃく", "ぎょうしょう"],
    answer: 0,
    explanation: "業績（ぎょうせき）"
},
{
    question: "調査結果を公表する。\n「公表」の読み方は？",
    choices: ["こうひょう", "こうびょう", "こうよう", "こうしょう"],
    answer: 0,
    explanation: "公表（こうひょう）"
},
{
    question: "会議で議題が提示された。\n「議題」の読み方は？",
    choices: ["ぎだい", "ぎたい", "ぎでい", "ぎよう"],
    answer: 0,
    explanation: "議題（ぎだい）"
},
{
    question: "資金調達が必要だ。\n「調達」の読み方は？",
    choices: ["ちょうたつ", "ちょうだつ", "しらたつ", "ちょうてつ"],
    answer: 0,
    explanation: "調達（ちょうたつ）"
},
{
    question: "職場環境の改善を図る。\n「改善」の読み方は？",
    choices: ["かいぜん", "かいぜい", "かいせん", "かぜん"],
    answer: 0,
    explanation: "改善（かいぜん）"
},
{
    question: "適正な価格を設定する。\n「適正」の読み方は？",
    choices: ["てきせい", "てきしょう", "てきしょう", "てきぜい"],
    answer: 0,
    explanation: "適正（てきせい）"
},
{
    question: "契約内容を確認する。\n「契約」の読み方は？",
    choices: ["けいやく", "けいよう", "けいしゃく", "けいやっく"],
    answer: 0,
    explanation: "契約（けいやく）"
},
{
    question: "従来の方法を見直す。\n「従来」の読み方は？",
    choices: ["じゅうらい", "したがい", "じゅらい", "じょうらい"],
    answer: 0,
    explanation: "従来（じゅうらい）"
},
{
    question: "市場規模を拡大する。\n「拡大」の読み方は？",
    choices: ["かくだい", "こうだい", "かくたい", "かっだい"],
    answer: 0,
    explanation: "拡大（かくだい）"
},

{
    question: "彼は慎重に検討した。\n「慎重」の読み方は？",
    choices: ["しんちょう", "しんじゅう", "じんちょう", "しんしょう"],
    answer: 0,
    explanation: "慎重（しんちょう）"
},
{
    question: "需要が増加している。\n「需要」の読み方は？",
    choices: ["じゅよう", "じゅようう", "しゅよう", "じゅうよう"],
    answer: 0,
    explanation: "需要（じゅよう）"
},
{
    question: "供給不足が問題となっている。\n「供給」の読み方は？",
    choices: ["きょうきゅう", "こうきゅう", "ぐきゅう", "きゅうきゅう"],
    answer: 0,
    explanation: "供給（きょうきゅう）"
},
{
    question: "方針転換が発表された。\n「転換」の読み方は？",
    choices: ["てんかん", "てんげん", "てんがん", "てんこう"],
    answer: 0,
    explanation: "転換（てんかん）"
},
{
    question: "実施時期を決定する。\n「実施」の読み方は？",
    choices: ["じっし", "じつし", "じっせ", "じし"],
    answer: 0,
    explanation: "実施（じっし）"
},
{
    question: "現状を維持する。\n「維持」の読み方は？",
    choices: ["いじ", "いし", "ゆいじ", "いち"],
    answer: 0,
    explanation: "維持（いじ）"
},
{
    question: "費用対効果を検証する。\n「検証」の読み方は？",
    choices: ["けんしょう", "けんしょうう", "けんぞう", "けしょう"],
    answer: 0,
    explanation: "検証（けんしょう）"
},
{
    question: "適切な配慮が必要だ。\n「配慮」の読み方は？",
    choices: ["はいりょ", "はいろ", "はいじょ", "ばいりょ"],
    answer: 0,
    explanation: "配慮（はいりょ）"
},
{
    question: "運営体制を強化する。\n「運営」の読み方は？",
    choices: ["うんえい", "うんよう", "うねい", "うんせい"],
    answer: 0,
    explanation: "運営（うんえい）"
},
{
    question: "今後の展望について語った。\n「展望」の読み方は？",
    choices: ["てんぼう", "てんもう", "てんよう", "てんぽう"],
    answer: 0,
    explanation: "展望（てんぼう）"
},

{
    question: "問題解決に向けて協議する。\n「協議」の読み方は？",
    choices: ["きょうぎ", "こうぎ", "きょうじ", "ごうぎ"],
    answer: 0,
    explanation: "協議（きょうぎ）"
},
{
    question: "新製品を開発する。\n「開発」の読み方は？",
    choices: ["かいはつ", "かいほつ", "がいはつ", "かいばつ"],
    answer: 0,
    explanation: "開発（かいはつ）"
},
{
    question: "企業理念を共有する。\n「理念」の読み方は？",
    choices: ["りねん", "りんねん", "ねんり", "りげん"],
    answer: 0,
    explanation: "理念（りねん）"
},
{
    question: "円滑な運営を目指す。\n「円滑」の読み方は？",
    choices: ["えんかつ", "まるかつ", "えんかっ", "えんがつ"],
    answer: 0,
    explanation: "円滑（えんかつ）"
},
{
    question: "状況把握に努める。\n「把握」の読み方は？",
    choices: ["はあく", "ばあく", "はわく", "はかく"],
    answer: 0,
    explanation: "把握（はあく）"
},
{
    question: "課題を抽出する。\n「抽出」の読み方は？",
    choices: ["ちゅうしゅつ", "ちょうしゅつ", "ちゅうじゅつ", "ちゅつしゅつ"],
    answer: 0,
    explanation: "抽出（ちゅうしゅつ）"
},
{
    question: "迅速な対応が求められる。\n「迅速」の読み方は？",
    choices: ["じんそく", "しんそく", "じんぞく", "じんしょう"],
    answer: 0,
    explanation: "迅速（じんそく）"
},
{
    question: "設備の老朽化が進んでいる。\n「老朽化」の読み方は？",
    choices: ["ろうきゅうか", "ろうきゅうけ", "ろうこうか", "ろうちゅうか"],
    answer: 0,
    explanation: "老朽化（ろうきゅうか）"
},
{
    question: "現象を分析する。\n「現象」の読み方は？",
    choices: ["げんしょう", "げんぞう", "けんしょう", "げんじょう"],
    answer: 0,
    explanation: "現象（げんしょう）"
},
{
    question: "全体像を把握する。\n「全体像」の読み方は？",
    choices: ["ぜんたいぞう", "ぜんたいしょう", "ぜんたいよう", "ぜんだいぞう"],
    answer: 0,
    explanation: "全体像（ぜんたいぞう）"
},
{
    question: "この計画の実現は困難だ。\n「困難」の読み方は？",
    choices: ["こんなん", "こんだん", "こうなん", "こんねん"],
    answer: 0,
    explanation: "困難（こんなん）"
},
{
    question: "需要の増加が予測されている。\n「予測」の読み方は？",
    choices: ["よそく", "よそっく", "よくそ", "よさく"],
    answer: 0,
    explanation: "予測（よそく）"
},
{
    question: "計画の遂行には協力が必要だ。\n「遂行」の読み方は？",
    choices: ["すいこう", "ついこう", "すいぎょう", "ずいこう"],
    answer: 0,
    explanation: "遂行（すいこう）"
},
{
    question: "現場の状況を報告する。\n「状況」の読み方は？",
    choices: ["じょうきょう", "しょうきょう", "じょうぎょう", "じょきょう"],
    answer: 0,
    explanation: "状況（じょうきょう）"
},
{
    question: "十分な根拠が必要だ。\n「根拠」の読み方は？",
    choices: ["こんきょ", "こんこ", "こんぎょ", "ねこん"],
    answer: 0,
    explanation: "根拠（こんきょ）"
},
{
    question: "企業間の競争が激化している。\n「激化」の読み方は？",
    choices: ["げきか", "げっか", "げきけ", "げきが"],
    answer: 0,
    explanation: "激化（げきか）"
},
{
    question: "業務内容を明確にする。\n「明確」の読み方は？",
    choices: ["めいかく", "みょうかく", "めいがく", "めいこう"],
    answer: 0,
    explanation: "明確（めいかく）"
},
{
    question: "問題点を指摘する。\n「指摘」の読み方は？",
    choices: ["してき", "しせき", "しだき", "してい"],
    answer: 0,
    explanation: "指摘（してき）"
},
{
    question: "迅速な復旧作業が行われた。\n「復旧」の読み方は？",
    choices: ["ふっきゅう", "ふくきゅう", "ふっきょう", "ふくきょう"],
    answer: 0,
    explanation: "復旧（ふっきゅう）"
},
{
    question: "長期的な視点が必要だ。\n「視点」の読み方は？",
    choices: ["してん", "してい", "してつ", "してんん"],
    answer: 0,
    explanation: "視点（してん）"
},

{
    question: "企業の戦略を立てる。\n「戦略」の読み方は？",
    choices: ["せんりゃく", "せんやく", "せんじゃく", "せりゃく"],
    answer: 0,
    explanation: "戦略（せんりゃく）"
},
{
    question: "顧客満足度を調査する。\n「顧客」の読み方は？",
    choices: ["こきゃく", "こうきゃく", "こかく", "きゃくこ"],
    answer: 0,
    explanation: "顧客（こきゃく）"
},
{
    question: "品質向上に努める。\n「品質」の読み方は？",
    choices: ["ひんしつ", "ひんじつ", "ひんせつ", "ほんしつ"],
    answer: 0,
    explanation: "品質（ひんしつ）"
},
{
    question: "継続的な改善が必要だ。\n「継続」の読み方は？",
    choices: ["けいぞく", "けいしょく", "けぞく", "けいそく"],
    answer: 0,
    explanation: "継続（けいぞく）"
},
{
    question: "企業経営について学ぶ。\n「経営」の読み方は？",
    choices: ["けいえい", "きょうえい", "けいよう", "けえい"],
    answer: 0,
    explanation: "経営（けいえい）"
},
{
    question: "収益が大幅に改善した。\n「収益」の読み方は？",
    choices: ["しゅうえき", "しゅえき", "しゅうやく", "しゅうせき"],
    answer: 0,
    explanation: "収益（しゅうえき）"
},
{
    question: "課題を整理する。\n「整理」の読み方は？",
    choices: ["せいり", "しょうり", "せり", "せいれい"],
    answer: 0,
    explanation: "整理（せいり）"
},
{
    question: "危機管理が重要である。\n「危機」の読み方は？",
    choices: ["きき", "きぎ", "ぎき", "あぶき"],
    answer: 0,
    explanation: "危機（きき）"
},
{
    question: "分析結果を報告する。\n「分析」の読み方は？",
    choices: ["ぶんせき", "ぶんしゃく", "ふんせき", "ぶんせつ"],
    answer: 0,
    explanation: "分析（ぶんせき）"
},
{
    question: "企業活動を支援する。\n「支援」の読み方は？",
    choices: ["しえん", "しねん", "しおん", "しげん"],
    answer: 0,
    explanation: "支援（しえん）"
},

{
    question: "業界全体に影響を与える。\n「影響」の読み方は？",
    choices: ["えいきょう", "えきょう", "ようきょう", "えいこう"],
    answer: 0,
    explanation: "影響（えいきょう）"
},
{
    question: "資源を有効活用する。\n「資源」の読み方は？",
    choices: ["しげん", "じげん", "しげんん", "じげんん"],
    answer: 0,
    explanation: "資源（しげん）"
},
{
    question: "協力体制を構築する。\n「構築」の読み方は？",
    choices: ["こうちく", "こうきく", "こうじく", "こちく"],
    answer: 0,
    explanation: "構築（こうちく）"
},
{
    question: "安定した供給を維持する。\n「安定」の読み方は？",
    choices: ["あんてい", "あんたい", "やすてい", "あんでい"],
    answer: 0,
    explanation: "安定（あんてい）"
},
{
    question: "成果を評価する。\n「評価」の読み方は？",
    choices: ["ひょうか", "ひょうが", "びょうか", "ひょか"],
    answer: 0,
    explanation: "評価（ひょうか）"
},
{
    question: "経済成長が続いている。\n「成長」の読み方は？",
    choices: ["せいちょう", "しょうちょう", "せいしょう", "せいじょう"],
    answer: 0,
    explanation: "成長（せいちょう）"
},
{
    question: "問題の本質を理解する。\n「本質」の読み方は？",
    choices: ["ほんしつ", "ほんじつ", "ほんせつ", "ほんしち"],
    answer: 0,
    explanation: "本質（ほんしつ）"
},
{
    question: "担当者に連絡する。\n「担当」の読み方は？",
    choices: ["たんとう", "だんとう", "たんどう", "たんしょう"],
    answer: 0,
    explanation: "担当（たんとう）"
},
{
    question: "地域経済に貢献する。\n「地域」の読み方は？",
    choices: ["ちいき", "じいき", "ちえき", "ちようき"],
    answer: 0,
    explanation: "地域（ちいき）"
},
{
    question: "計画全体を統括する。\n「統括」の読み方は？",
    choices: ["とうかつ", "とうこう", "とうがつ", "とうせつ"],
    answer: 0,
    explanation: "統括（とうかつ）"
},

{
    question: "問題解決能力が重要だ。\n「能力」の読み方は？",
    choices: ["のうりょく", "のりょく", "のうろく", "のうりょう"],
    answer: 0,
    explanation: "能力（のうりょく）"
},
{
    question: "業界の慣行を見直す。\n「慣行」の読み方は？",
    choices: ["かんこう", "かんぎょう", "ならこう", "かんごう"],
    answer: 0,
    explanation: "慣行（かんこう）"
},
{
    question: "販売促進を行う。\n「促進」の読み方は？",
    choices: ["そくしん", "しょくしん", "そくじん", "そくせん"],
    answer: 0,
    explanation: "促進（そくしん）"
},
{
    question: "適切な判断を下す。\n「判断」の読み方は？",
    choices: ["はんだん", "ばんだん", "はんたん", "はんでん"],
    answer: 0,
    explanation: "判断（はんだん）"
},
{
    question: "最終的な結論を出した。\n「結論」の読み方は？",
    choices: ["けつろん", "けちろん", "けっろん", "けつろん"],
    answer: 0,
    explanation: "結論（けつろん）"
},
{
    question: "需要と供給の関係を学ぶ。\n「供給」の読み方は？",
    choices: ["きょうきゅう", "こうきゅう", "ぐきゅう", "きゅうきょう"],
    answer: 0,
    explanation: "供給（きょうきゅう）"
},
{
    question: "市場動向を予測する。\n「市場」の読み方は？",
    choices: ["しじょう", "いちば", "しば", "ししょう"],
    answer: 0,
    explanation: "市場（しじょう）"
},
{
    question: "長年の経験を生かす。\n「経験」の読み方は？",
    choices: ["けいけん", "けげん", "けいげん", "けんけん"],
    answer: 0,
    explanation: "経験（けいけん）"
},
{
    question: "現実的な提案を行う。\n「提案」の読み方は？",
    choices: ["ていあん", "ていなん", "だいあん", "てんあん"],
    answer: 0,
    explanation: "提案（ていあん）"
},
{
    question: "事業計画を策定する。\n「策定」の読み方は？",
    choices: ["さくてい", "さくじょう", "さくよう", "せいてい"],
    answer: 0,
    explanation: "策定（さくてい）"
},
{
    question: "事業の継承が課題となっている。\n「継承」の読み方は？",
    choices: ["けいしょう", "けいじょう", "けしょう", "けいぞう"],
    answer: 0,
    explanation: "継承（けいしょう）"
},
{
    question: "企業の方針を遵守する。\n「遵守」の読み方は？",
    choices: ["じゅんしゅ", "そんしゅ", "じゅんじゅ", "そんじゅ"],
    answer: 0,
    explanation: "遵守（じゅんしゅ）"
},
{
    question: "市場の動向を注視する。\n「注視」の読み方は？",
    choices: ["ちゅうし", "ちゅうじ", "ちゅしょう", "ちゅうせい"],
    answer: 0,
    explanation: "注視（ちゅうし）"
},
{
    question: "計画の妥当性を検証する。\n「妥当性」の読み方は？",
    choices: ["だとうせい", "たいとうせい", "だどうせい", "たとうせい"],
    answer: 0,
    explanation: "妥当性（だとうせい）"
},
{
    question: "その提案は実現可能だ。\n「実現」の読み方は？",
    choices: ["じつげん", "じつけん", "じげん", "じつげんん"],
    answer: 0,
    explanation: "実現（じつげん）"
},
{
    question: "契約締結に向けて準備する。\n「締結」の読み方は？",
    choices: ["ていけつ", "しめけつ", "てつけつ", "ていぜつ"],
    answer: 0,
    explanation: "締結（ていけつ）"
},
{
    question: "業績不振が続いている。\n「不振」の読み方は？",
    choices: ["ふしん", "ふじん", "ぶしん", "ふせん"],
    answer: 0,
    explanation: "不振（ふしん）"
},
{
    question: "企業価値の向上を目指す。\n「価値」の読み方は？",
    choices: ["かち", "がち", "かじ", "けち"],
    answer: 0,
    explanation: "価値（かち）"
},
{
    question: "業務改善案を提出した。\n「提出」の読み方は？",
    choices: ["ていしゅつ", "ていじゅつ", "ていしゅう", "ていせつ"],
    answer: 0,
    explanation: "提出（ていしゅつ）"
},
{
    question: "市場占有率が上昇した。\n「占有率」の読み方は？",
    choices: ["せんゆうりつ", "せんようりつ", "せんゆりつ", "しょうゆうりつ"],
    answer: 0,
    explanation: "占有率（せんゆうりつ）"
},

{
    question: "新規顧客を獲得する。\n「獲得」の読み方は？",
    choices: ["かくとく", "かっとく", "えとく", "かちとく"],
    answer: 0,
    explanation: "獲得（かくとく）"
},
{
    question: "購入意欲を高める。\n「意欲」の読み方は？",
    choices: ["いよく", "いいく", "いよう", "いよっく"],
    answer: 0,
    explanation: "意欲（いよく）"
},
{
    question: "適切な対策を講じる。\n「講じる」の読み方は？",
    choices: ["こうじる", "こうする", "こうずる", "こうぜる"],
    answer: 0,
    explanation: "講じる（こうじる）"
},
{
    question: "計画の進捗を確認する。\n「進捗」の読み方は？",
    choices: ["しんちょく", "しんぽ", "しんとく", "しんしょく"],
    answer: 0,
    explanation: "進捗（しんちょく）"
},
{
    question: "企業の存続が危ぶまれる。\n「存続」の読み方は？",
    choices: ["そんぞく", "ぞんぞく", "そんしょく", "そんそく"],
    answer: 0,
    explanation: "存続（そんぞく）"
},
{
    question: "人材確保が急務だ。\n「急務」の読み方は？",
    choices: ["きゅうむ", "きゅむ", "きゅうぼ", "きゅうむう"],
    answer: 0,
    explanation: "急務（きゅうむ）"
},
{
    question: "現地調査を実施した。\n「現地」の読み方は？",
    choices: ["げんち", "げんじ", "けんち", "けんじ"],
    answer: 0,
    explanation: "現地（げんち）"
},
{
    question: "販売網を拡充する。\n「拡充」の読み方は？",
    choices: ["かくじゅう", "こうじゅう", "かくしょう", "かっじゅう"],
    answer: 0,
    explanation: "拡充（かくじゅう）"
},
{
    question: "収支の均衡を保つ。\n「均衡」の読み方は？",
    choices: ["きんこう", "きんごう", "ひとこう", "きんきょう"],
    answer: 0,
    explanation: "均衡（きんこう）"
},
{
    question: "職務を遂行する。\n「職務」の読み方は？",
    choices: ["しょくむ", "しょくぶ", "そくむ", "しょうむ"],
    answer: 0,
    explanation: "職務（しょくむ）"
},

{
    question: "情報漏洩を防止する。\n「漏洩」の読み方は？",
    choices: ["ろうえい", "ろうせつ", "ろえい", "るえい"],
    answer: 0,
    explanation: "漏洩（ろうえい）"
},
{
    question: "利益率が向上した。\n「利益率」の読み方は？",
    choices: ["りえきりつ", "りやくりつ", "りえきそく", "りやくそく"],
    answer: 0,
    explanation: "利益率（りえきりつ）"
},
{
    question: "計画の妨げになる。\n「妨げ」の読み方は？",
    choices: ["さまたげ", "ぼうげ", "さまたぎ", "ほうげ"],
    answer: 0,
    explanation: "妨げ（さまたげ）"
},
{
    question: "企業活動を促進する。\n「促進」の読み方は？",
    choices: ["そくしん", "しょくしん", "そくせん", "そくじん"],
    answer: 0,
    explanation: "促進（そくしん）"
},
{
    question: "社員の士気を高める。\n「士気」の読み方は？",
    choices: ["しき", "しぎ", "しけ", "しげ"],
    answer: 0,
    explanation: "士気（しき）"
},
{
    question: "経費を抑制する。\n「抑制」の読み方は？",
    choices: ["よくせい", "よくしょう", "ようせい", "よっせい"],
    answer: 0,
    explanation: "抑制（よくせい）"
},
{
    question: "安易な判断は避けるべきだ。\n「安易」の読み方は？",
    choices: ["あんい", "あんやす", "あんえき", "やすい"],
    answer: 0,
    explanation: "安易（あんい）"
},
{
    question: "企画書を閲覧する。\n「閲覧」の読み方は？",
    choices: ["えつらん", "けつらん", "えつりん", "えつれん"],
    answer: 0,
    explanation: "閲覧（えつらん）"
},
{
    question: "状況を把握している。\n「把握」の読み方は？",
    choices: ["はあく", "ばあく", "はわく", "はく"],
    answer: 0,
    explanation: "把握（はあく）"
},
{
    question: "結果を総括する。\n「総括」の読み方は？",
    choices: ["そうかつ", "そうこう", "そうがつ", "そうせつ"],
    answer: 0,
    explanation: "総括（そうかつ）"
},

{
    question: "景気回復の兆しが見える。\n「兆し」の読み方は？",
    choices: ["きざし", "ちょうし", "きし", "しるし"],
    answer: 0,
    explanation: "兆し（きざし）"
},
{
    question: "市場分析を行う。\n「分析」の読み方は？",
    choices: ["ぶんせき", "ぶんしゃく", "ふんせき", "ぶんせつ"],
    answer: 0,
    explanation: "分析（ぶんせき）"
},
{
    question: "業界再編が進んでいる。\n「再編」の読み方は？",
    choices: ["さいへん", "さいあみ", "さいぺん", "さいべん"],
    answer: 0,
    explanation: "再編（さいへん）"
},
{
    question: "新技術を導入した。\n「導入」の読み方は？",
    choices: ["どうにゅう", "とうにゅう", "どうゆう", "どうりゅう"],
    answer: 0,
    explanation: "導入（どうにゅう）"
},
{
    question: "企業間で提携する。\n「提携」の読み方は？",
    choices: ["ていけい", "ていこう", "ていしょう", "ていせい"],
    answer: 0,
    explanation: "提携（ていけい）"
},
{
    question: "市場の需要を調査する。\n「需要」の読み方は？",
    choices: ["じゅよう", "じゅうよう", "しゅよう", "じよう"],
    answer: 0,
    explanation: "需要（じゅよう）"
},
{
    question: "適切な措置を講じる。\n「措置」の読み方は？",
    choices: ["そち", "しょち", "そうち", "さち"],
    answer: 0,
    explanation: "措置（そち）"
},
{
    question: "全体像を把握する。\n「全体像」の読み方は？",
    choices: ["ぜんたいぞう", "ぜんたいしょう", "ぜんたいよう", "ぜんたいそう"],
    answer: 0,
    explanation: "全体像（ぜんたいぞう）"
},
{
    question: "競争力を強化する。\n「競争力」の読み方は？",
    choices: ["きょうそうりょく", "けいそうりょく", "きょうそりょく", "きょうそうろく"],
    answer: 0,
    explanation: "競争力（きょうそうりょく）"
},
{
    question: "方針に従って行動する。\n「従って」の読み方は？",
    choices: ["したがって", "したって", "じゅうって", "じゅうしたがって"],
    answer: 0,
    explanation: "従って（したがって）"
},
{
    question: "新たな雇用を創出する。\n「創出」の読み方は？",
    choices: ["そうしゅつ", "そうで", "そうだし", "そうじゅつ"],
    answer: 0,
    explanation: "創出（そうしゅつ）"
},
{
    question: "計画の趣旨を説明する。\n「趣旨」の読み方は？",
    choices: ["しゅし", "しゅうし", "しゅじ", "しゅぎ"],
    answer: 0,
    explanation: "趣旨（しゅし）"
},
{
    question: "国内需要が拡大している。\n「国内」の読み方は？",
    choices: ["こくない", "くない", "こくだい", "こくうち"],
    answer: 0,
    explanation: "国内（こくない）"
},
{
    question: "企業間の提携が進んでいる。\n「提携」の読み方は？",
    choices: ["ていけい", "ていこう", "ていしょう", "ていせい"],
    answer: 0,
    explanation: "提携（ていけい）"
},
{
    question: "問題の本質を見極める。\n「見極める」の読み方は？",
    choices: ["みきわめる", "みきめる", "みわける", "みごくめる"],
    answer: 0,
    explanation: "見極める（みきわめる）"
},

{
    question: "設備投資を抑制する。\n「抑制」の読み方は？",
    choices: ["よくせい", "よっせい", "ようせい", "よくしょう"],
    answer: 0,
    explanation: "抑制（よくせい）"
},
{
    question: "事業を展開する。\n「展開」の読み方は？",
    choices: ["てんかい", "てんがい", "てんこう", "てんけい"],
    answer: 0,
    explanation: "展開（てんかい）"
},
{
    question: "市場の競合を調査する。\n「競合」の読み方は？",
    choices: ["きょうごう", "けいごう", "きょうあい", "きょうこう"],
    answer: 0,
    explanation: "競合（きょうごう）"
},
{
    question: "収益構造を見直す。\n「構造」の読み方は？",
    choices: ["こうぞう", "こうそう", "こうじょう", "こうせい"],
    answer: 0,
    explanation: "構造（こうぞう）"
},
{
    question: "合理的な判断を下す。\n「合理的」の読み方は？",
    choices: ["ごうりてき", "ごうりょうてき", "ごうれいてき", "ごりてき"],
    answer: 0,
    explanation: "合理的（ごうりてき）"
},

{
    question: "政策の是非が議論された。\n「是非」の読み方は？",
    choices: ["ぜひ", "ぜひ", "せひ", "ぜいひ"],
    answer: 0,
    explanation: "是非（ぜひ）"
},
{
    question: "その企業は海外進出を果たした。\n「進出」の読み方は？",
    choices: ["しんしゅつ", "しんで", "じんしゅつ", "しんじゅつ"],
    answer: 0,
    explanation: "進出（しんしゅつ）"
},
{
    question: "需要に応じて供給する。\n「供給」の読み方は？",
    choices: ["きょうきゅう", "こうきゅう", "きゅうきょう", "ぐきゅう"],
    answer: 0,
    explanation: "供給（きょうきゅう）"
},
{
    question: "経営資源を有効活用する。\n「有効」の読み方は？",
    choices: ["ゆうこう", "ゆこう", "ようこう", "ゆごう"],
    answer: 0,
    explanation: "有効（ゆうこう）"
},
{
    question: "適切な手順で作業する。\n「手順」の読み方は？",
    choices: ["てじゅん", "しゅじゅん", "てじゅ", "てしゅん"],
    answer: 0,
    explanation: "手順（てじゅん）"
},

{
    question: "財政状況を改善する。\n「財政」の読み方は？",
    choices: ["ざいせい", "さいせい", "ざいしょう", "ざいじょう"],
    answer: 0,
    explanation: "財政（ざいせい）"
},
{
    question: "社会情勢が変化している。\n「情勢」の読み方は？",
    choices: ["じょうせい", "しょうせい", "じょうしょう", "じょうじょう"],
    answer: 0,
    explanation: "情勢（じょうせい）"
},
{
    question: "現状維持は難しい。\n「現状」の読み方は？",
    choices: ["げんじょう", "げんしょう", "けんじょう", "げんぞう"],
    answer: 0,
    explanation: "現状（げんじょう）"
},
{
    question: "新たな課題が浮上した。\n「浮上」の読み方は？",
    choices: ["ふじょう", "うきあがり", "ふしょう", "ふじょ"],
    answer: 0,
    explanation: "浮上（ふじょう）"
},
{
    question: "事態の推移を見守る。\n「推移」の読み方は？",
    choices: ["すいい", "ついい", "すい", "すいいい"],
    answer: 0,
    explanation: "推移（すいい）"
},

{
    question: "人材不足が深刻化している。\n「深刻化」の読み方は？",
    choices: ["しんこくか", "しんこっか", "しんこうか", "しんかくか"],
    answer: 0,
    explanation: "深刻化（しんこくか）"
},
{
    question: "組織改革を断行した。\n「断行」の読み方は？",
    choices: ["だんこう", "たんこう", "だんぎょう", "だんごう"],
    answer: 0,
    explanation: "断行（だんこう）"
},
{
    question: "企業理念を共有する。\n「理念」の読み方は？",
    choices: ["りねん", "りんねん", "ねんり", "りげん"],
    answer: 0,
    explanation: "理念（りねん）"
},
{
    question: "業務全般を統括する。\n「統括」の読み方は？",
    choices: ["とうかつ", "とうせつ", "とうがつ", "とうこう"],
    answer: 0,
    explanation: "統括（とうかつ）"
},
{
    question: "製品の品質を保証する。\n「保証」の読み方は？",
    choices: ["ほしょう", "ほじょう", "ほそう", "ほせい"],
    answer: 0,
    explanation: "保証（ほしょう）"
},

{
    question: "現地で実態調査を行った。\n「実態」の読み方は？",
    choices: ["じったい", "じつたい", "じっだい", "じたい"],
    answer: 0,
    explanation: "実態（じったい）"
},
{
    question: "成果の検証が必要だ。\n「検証」の読み方は？",
    choices: ["けんしょう", "けんぞう", "けんじょう", "けんそう"],
    answer: 0,
    explanation: "検証（けんしょう）"
},
{
    question: "組織運営を効率化する。\n「効率化」の読み方は？",
    choices: ["こうりつか", "こうそつか", "こうりちか", "こうせいか"],
    answer: 0,
    explanation: "効率化（こうりつか）"
},
{
    question: "企業価値の向上を図る。\n「向上」の読み方は？",
    choices: ["こうじょう", "こうしょう", "むこうじょう", "こうぞう"],
    answer: 0,
    explanation: "向上（こうじょう）"
},
{
    question: "問題の要因を分析する。\n「要因」の読み方は？",
    choices: ["よういん", "ようげん", "ようじん", "ようえん"],
    answer: 0,
    explanation: "要因（よういん）"
},

{
    question: "市場規模が縮小している。\n「縮小」の読み方は？",
    choices: ["しゅくしょう", "しゅくしょうう", "しゅうしょう", "しゅくそう"],
    answer: 0,
    explanation: "縮小（しゅくしょう）"
},
{
    question: "多様な人材を確保する。\n「多様」の読み方は？",
    choices: ["たよう", "たようう", "たよう", "だよう"],
    answer: 0,
    explanation: "多様（たよう）"
},
{
    question: "経済格差が広がっている。\n「格差」の読み方は？",
    choices: ["かくさ", "かっさ", "かくしゃ", "がくさ"],
    answer: 0,
    explanation: "格差（かくさ）"
},
{
    question: "需要予測を行う。\n「予測」の読み方は？",
    choices: ["よそく", "よそっく", "ようそく", "よくそ"],
    answer: 0,
    explanation: "予測（よそく）"
},
{
    question: "資金運用について学ぶ。\n「運用」の読み方は？",
    choices: ["うんよう", "うんようう", "うんゆう", "うんじょう"],
    answer: 0,
    explanation: "運用（うんよう）"
},

{
    question: "その企業は新市場を開拓した。\n「開拓」の読み方は？",
    choices: ["かいたく", "かいだく", "かいたっく", "がいたく"],
    answer: 0,
    explanation: "開拓（かいたく）"
},
{
    question: "国際協力を推進する。\n「推進」の読み方は？",
    choices: ["すいしん", "ついしん", "すいしょう", "すいじん"],
    answer: 0,
    explanation: "推進（すいしん）"
},
{
    question: "製品開発を担当する。\n「担当」の読み方は？",
    choices: ["たんとう", "だんとう", "たんどう", "たんしょう"],
    answer: 0,
    explanation: "担当（たんとう）"
},
{
    question: "販売実績が向上した。\n「実績」の読み方は？",
    choices: ["じっせき", "じつせき", "じっしき", "じつしき"],
    answer: 0,
    explanation: "実績（じっせき）"
},
{
    question: "大規模な改革が行われた。\n「大規模」の読み方は？",
    choices: ["だいきぼ", "だいぎぼ", "たいきぼ", "だいきも"],
    answer: 0,
    explanation: "大規模（だいきぼ）"
},
{
    question: "新たな施策を実施する。\n「施策」の読み方は？",
    choices: ["しさく", "せさく", "しせき", "せさくう"],
    answer: 0,
    explanation: "施策（しさく）"
},
{
    question: "業務改善の提言を行う。\n「提言」の読み方は？",
    choices: ["ていげん", "ていごん", "だいげん", "ていけん"],
    answer: 0,
    explanation: "提言（ていげん）"
},
{
    question: "企業の信用を維持する。\n「信用」の読み方は？",
    choices: ["しんよう", "しよう", "しんゆう", "しんようう"],
    answer: 0,
    explanation: "信用（しんよう）"
},
{
    question: "制度改革が不可欠だ。\n「不可欠」の読み方は？",
    choices: ["ふかけつ", "ふかげつ", "ふけつ", "ふこうけつ"],
    answer: 0,
    explanation: "不可欠（ふかけつ）"
},
{
    question: "情報共有を徹底する。\n「徹底」の読み方は？",
    choices: ["てってい", "てつてい", "てって", "てつしょう"],
    answer: 0,
    explanation: "徹底（てってい）"
},

{
    question: "顕著な成果が見られた。\n「顕著」の読み方は？",
    choices: ["けんちょ", "けんしょ", "けんじょ", "けんしょう"],
    answer: 0,
    explanation: "顕著（けんちょ）"
},
{
    question: "業績悪化の要因を分析する。\n「要因」の読み方は？",
    choices: ["よういん", "ようげん", "ようじん", "ようえん"],
    answer: 0,
    explanation: "要因（よういん）"
},
{
    question: "周辺地域への影響を調査する。\n「周辺」の読み方は？",
    choices: ["しゅうへん", "しゅへん", "しょうへん", "しゅうべん"],
    answer: 0,
    explanation: "周辺（しゅうへん）"
},
{
    question: "企業理念を浸透させる。\n「浸透」の読み方は？",
    choices: ["しんとう", "しんどう", "じんとう", "しんつう"],
    answer: 0,
    explanation: "浸透（しんとう）"
},
{
    question: "経営基盤を強化する。\n「基盤」の読み方は？",
    choices: ["きばん", "きはん", "ぎばん", "きほん"],
    answer: 0,
    explanation: "基盤（きばん）"
},

{
    question: "従業員の待遇改善を図る。\n「待遇」の読み方は？",
    choices: ["たいぐう", "たいゆう", "だいぐう", "たいこう"],
    answer: 0,
    explanation: "待遇（たいぐう）"
},
{
    question: "事業拡張を計画する。\n「拡張」の読み方は？",
    choices: ["かくちょう", "こうちょう", "かくしょう", "かっちょう"],
    answer: 0,
    explanation: "拡張（かくちょう）"
},
{
    question: "新規事業に参入する。\n「参入」の読み方は？",
    choices: ["さんにゅう", "さんぬう", "さんじゅう", "しんにゅう"],
    answer: 0,
    explanation: "参入（さんにゅう）"
},
{
    question: "業務を円滑に進める。\n「円滑」の読み方は？",
    choices: ["えんかつ", "えんがつ", "えんかっ", "まるかつ"],
    answer: 0,
    explanation: "円滑（えんかつ）"
},
{
    question: "需要拡大が期待される。\n「期待」の読み方は？",
    choices: ["きたい", "きだい", "きてい", "きたいい"],
    answer: 0,
    explanation: "期待（きたい）"
},

{
    question: "収支の均衡を保つ。\n「均衡」の読み方は？",
    choices: ["きんこう", "きんごう", "きんきょう", "きんしょう"],
    answer: 0,
    explanation: "均衡（きんこう）"
},
{
    question: "適切な人材配置が必要だ。\n「配置」の読み方は？",
    choices: ["はいち", "はいじ", "ばいち", "はいしょう"],
    answer: 0,
    explanation: "配置（はいち）"
},
{
    question: "新たな法案が可決された。\n「可決」の読み方は？",
    choices: ["かけつ", "かげつ", "かきつ", "かせつ"],
    answer: 0,
    explanation: "可決（かけつ）"
},
{
    question: "事業継続計画を策定する。\n「継続」の読み方は？",
    choices: ["けいぞく", "けぞく", "けいしょく", "けぞっく"],
    answer: 0,
    explanation: "継続（けいぞく）"
},
{
    question: "市場の需要を喚起する。\n「喚起」の読み方は？",
    choices: ["かんき", "かんぎ", "けんき", "こうき"],
    answer: 0,
    explanation: "喚起（かんき）"
},

{
    question: "経済政策の効果を検証する。\n「効果」の読み方は？",
    choices: ["こうか", "こうが", "こうけ", "ごうか"],
    answer: 0,
    explanation: "効果（こうか）"
},
{
    question: "適切な判断基準を設ける。\n「基準」の読み方は？",
    choices: ["きじゅん", "きしゅん", "ぎじゅん", "きじん"],
    answer: 0,
    explanation: "基準（きじゅん）"
},
{
    question: "事態の推移を見守る。\n「推移」の読み方は？",
    choices: ["すいい", "ついい", "すい", "すいえい"],
    answer: 0,
    explanation: "推移（すいい）"
},
{
    question: "資産運用を学ぶ。\n「資産」の読み方は？",
    choices: ["しさん", "じさん", "しざん", "しせん"],
    answer: 0,
    explanation: "資産（しさん）"
},
{
    question: "業務内容を把握している。\n「把握」の読み方は？",
    choices: ["はあく", "はわく", "ばあく", "はかく"],
    answer: 0,
    explanation: "把握（はあく）"
},

{
    question: "状況に応じて柔軟に対応する。\n「柔軟」の読み方は？",
    choices: ["じゅうなん", "にゅうなん", "じゅなん", "じょうなん"],
    answer: 0,
    explanation: "柔軟（じゅうなん）"
},
{
    question: "企業活動を監督する。\n「監督」の読み方は？",
    choices: ["かんとく", "かんどく", "けんとく", "かんし"],
    answer: 0,
    explanation: "監督（かんとく）"
},
{
    question: "制度導入を推進する。\n「推進」の読み方は？",
    choices: ["すいしん", "ついしん", "すいしょう", "すいじん"],
    answer: 0,
    explanation: "推進（すいしん）"
},
{
    question: "組織全体に周知する。\n「周知」の読み方は？",
    choices: ["しゅうち", "しゅち", "しょうち", "しゅうじ"],
    answer: 0,
    explanation: "周知（しゅうち）"
},
{
    question: "課題解決に尽力する。\n「尽力」の読み方は？",
    choices: ["じんりょく", "しんりょく", "じんろく", "じんきょく"],
    answer: 0,
    explanation: "尽力（じんりょく）"
},

{
    question: "問題の原因を究明する。\n「究明」の読み方は？",
    choices: ["きゅうめい", "ぐうめい", "きょうめい", "きゅめい"],
    answer: 0,
    explanation: "究明（きゅうめい）"
},
{
    question: "方針変更を余儀なくされた。\n「余儀なく」の読み方は？",
    choices: ["よぎなく", "よぎりなく", "あまりなく", "よくなく"],
    answer: 0,
    explanation: "余儀なく（よぎなく）"
},
{
    question: "経費削減を実現した。\n「削減」の読み方は？",
    choices: ["さくげん", "さくけん", "しょうげん", "けずげん"],
    answer: 0,
    explanation: "削減（さくげん）"
},
{
    question: "市場の動向を把握する。\n「動向」の読み方は？",
    choices: ["どうこう", "どうしょう", "どうきょう", "どうじょう"],
    answer: 0,
    explanation: "動向（どうこう）"
},
{
    question: "適切な措置を講じた。\n「措置」の読み方は？",
    choices: ["そち", "しょち", "そうち", "さち"],
    answer: 0,
    explanation: "措置（そち）"
},
{
    question: "企業の収益構造を見直す。\n「収益」の読み方は？",
    choices: ["しゅうえき", "しゅえき", "しゅうせき", "しゅうやく"],
    answer: 0,
    explanation: "収益（しゅうえき）"
},
{
    question: "十分な根拠を示してください。\n「根拠」の読み方は？",
    choices: ["こんきょ", "こんこ", "こんぎょ", "ねきょ"],
    answer: 0,
    explanation: "根拠（こんきょ）"
},
{
    question: "事業の継続が困難になった。\n「継続」の読み方は？",
    choices: ["けいぞく", "けいしょく", "けぞく", "けいそく"],
    answer: 0,
    explanation: "継続（けいぞく）"
},
{
    question: "その計画の実効性が問われている。\n「実効性」の読み方は？",
    choices: ["じっこうせい", "じつこうせい", "じっこせい", "じこうせい"],
    answer: 0,
    explanation: "実効性（じっこうせい）"
},
{
    question: "市場の動向を分析する。\n「動向」の読み方は？",
    choices: ["どうこう", "どうしょう", "どうきょう", "どうじょう"],
    answer: 0,
    explanation: "動向（どうこう）"
},

{
    question: "適切な措置を講じる。\n「措置」の読み方は？",
    choices: ["そち", "しょち", "そうち", "さち"],
    answer: 0,
    explanation: "措置（そち）"
},
{
    question: "次のうち『促進』の読み方はどれか。",
    choices: ["そくしん", "しょくしん", "そくせん", "そくじん"],
    answer: 0,
    explanation: "促進（そくしん）"
},
{
    question: "新しい制度を導入する。\n「導入」の読み方は？",
    choices: ["どうにゅう", "とうにゅう", "どうゆう", "とうゆう"],
    answer: 0,
    explanation: "導入（どうにゅう）"
},
{
    question: "企業間で提携を結ぶ。\n「提携」の読み方は？",
    choices: ["ていけい", "ていこう", "ていしょう", "ていせい"],
    answer: 0,
    explanation: "提携（ていけい）"
},
{
    question: "迅速な対応が必要だ。\n「迅速」の読み方は？",
    choices: ["じんそく", "しんそく", "じんしょう", "じんぞく"],
    answer: 0,
    explanation: "迅速（じんそく）"
},

{
    question: "『著しい進歩』の『著しい』に最も近い意味は？",
    choices: ["目立つ", "遅い", "小さい", "穏やか"],
    answer: 0,
    explanation: "著しい＝非常に目立つ。"
},
{
    question: "『妥当な判断』の『妥当』に最も近い意味は？",
    choices: ["適切", "危険", "複雑", "曖昧"],
    answer: 0,
    explanation: "妥当＝適切で無理がない。"
},
{
    question: "『概ね賛成だ』の『概ね』に最も近い意味は？",
    choices: ["だいたい", "完全に", "全く", "少し"],
    answer: 0,
    explanation: "概ね＝だいたい。"
},
{
    question: "『把握する』に最も近い意味は？",
    choices: ["理解する", "拒否する", "批判する", "交換する"],
    answer: 0,
    explanation: "把握する＝内容を理解する。"
},
{
    question: "『遂行する』に最も近い意味は？",
    choices: ["やり遂げる", "中止する", "延期する", "反対する"],
    answer: 0,
    explanation: "遂行する＝最後まで実行する。"
},

{
    question: "会議で（　　　）な意見が出された。",
    choices: ["建設的", "破壊的", "否定的", "感情的"],
    answer: 0,
    explanation: "建設的な意見＝前向きな意見。"
},
{
    question: "この政策は経済の（　　　）に役立つ。",
    choices: ["活性化", "停滞", "縮小", "衰退"],
    answer: 0,
    explanation: "活性化＝活発にすること。"
},
{
    question: "企業は経費の（　　　）を進めている。",
    choices: ["削減", "増額", "拡張", "上昇"],
    answer: 0,
    explanation: "経費削減。"
},
{
    question: "その会社は海外市場へ（　　　）した。",
    choices: ["進出", "撤退", "後退", "終息"],
    answer: 0,
    explanation: "進出＝新たに進むこと。"
},
{
    question: "環境への（　　　）が求められる。",
    choices: ["配慮", "反論", "損害", "拒絶"],
    answer: 0,
    explanation: "配慮＝気を配ること。"
},

{
    question: "『構築』の意味として最も近いものは？",
    choices: ["作り上げる", "壊す", "交換する", "省略する"],
    answer: 0,
    explanation: "構築＝組み立てて作ること。"
},
{
    question: "『改善』の反対語として最も適切なものは？",
    choices: ["悪化", "進展", "成長", "向上"],
    answer: 0,
    explanation: "改善↔悪化。"
},
{
    question: "『確保』の意味として最も近いものは？",
    choices: ["必要なものを確実に手に入れる", "失う", "断る", "譲る"],
    answer: 0,
    explanation: "確保＝確実に得ること。"
},
{
    question: "『柔軟』に最も近い意味は？",
    choices: ["変化に対応できる", "頑固な", "厳格な", "危険な"],
    answer: 0,
    explanation: "柔軟＝融通が利く。"
},
{
    question: "『均衡』に最も近い意味は？",
    choices: ["バランス", "競争", "成長", "集中"],
    answer: 0,
    explanation: "均衡＝つり合い。"
},

{
    question: "次のうち『けんしょう』と読む漢字はどれか。",
    choices: ["検証", "検討", "検査", "検出"],
    answer: 0,
    explanation: "検証（けんしょう）"
},
{
    question: "次のうち『かくじゅう』と読む漢字はどれか。",
    choices: ["拡充", "拡張", "拡散", "拡大"],
    answer: 0,
    explanation: "拡充（かくじゅう）"
},
{
    question: "次のうち『ろうえい』と読む漢字はどれか。",
    choices: ["漏洩", "流出", "漏出", "流洩"],
    answer: 0,
    explanation: "漏洩（ろうえい）"
},
{
    question: "次のうち『じんりょく』と読む漢字はどれか。",
    choices: ["尽力", "人力", "尽量", "人量"],
    answer: 0,
    explanation: "尽力（じんりょく）"
},
{
    question: "次のうち『きざし』と読む漢字はどれか。",
    choices: ["兆し", "兆候", "予兆", "兆見"],
    answer: 0,
    explanation: "兆し（きざし）"
},

{
    question: "経済の（　　　）が続いている。",
    choices: ["成長", "停止", "縮小", "崩壊"],
    answer: 0,
    explanation: "経済成長。"
},
{
    question: "現状を正しく（　　　）することが重要だ。",
    choices: ["把握", "放棄", "削減", "除外"],
    answer: 0,
    explanation: "状況を把握する。"
},
{
    question: "新たな事業を（　　　）する。",
    choices: ["展開", "撤回", "停滞", "閉鎖"],
    answer: 0,
    explanation: "事業を展開する。"
},
{
    question: "企業の競争力を（　　　）する。",
    choices: ["強化", "減少", "縮小", "終了"],
    answer: 0,
    explanation: "競争力を強化する。"
},
{
    question: "市場規模が急速に（　　　）している。",
    choices: ["拡大", "後退", "消滅", "停止"],
    answer: 0,
    explanation: "市場規模の拡大。"
},

{
    question: "『周知』に最も近い意味は？",
    choices: ["広く知らせること", "隠すこと", "反対すること", "観察すること"],
    answer: 0,
    explanation: "周知＝広く知らせる。"
},
{
    question: "『監督』に最も近い意味は？",
    choices: ["管理する", "破壊する", "無視する", "削除する"],
    answer: 0,
    explanation: "監督＝管理・指導すること。"
},
{
    question: "『喚起』に最も近い意味は？",
    choices: ["呼び起こすこと", "止めること", "拒否すること", "隠すこと"],
    answer: 0,
    explanation: "喚起＝呼び起こす。"
},
{
    question: "『究明』に最も近い意味は？",
    choices: ["詳しく調べて明らかにする", "隠す", "整理する", "処分する"],
    answer: 0,
    explanation: "究明＝真相を明らかにする。"
},
{
    question: "『断行』に最も近い意味は？",
    choices: ["思い切って実行する", "延期する", "保留する", "中止する"],
    answer: 0,
    explanation: "断行＝決断して実行する。"
},

{
    question: "情報漏洩の防止は企業の重要な（　　　）だ。",
    choices: ["課題", "縮小", "停滞", "余裕"],
    answer: 0,
    explanation: "重要な課題。"
},
{
    question: "経済状況を（　　　）に分析する。",
    choices: ["総合的", "感情的", "断片的", "偶然的"],
    answer: 0,
    explanation: "総合的に分析する。"
},
{
    question: "企業は利益の（　　　）を目指している。",
    choices: ["最大化", "最小化", "停止", "消失"],
    answer: 0,
    explanation: "利益最大化。"
},
{
    question: "その方針は多くの人々から（　　　）を得た。",
    choices: ["支持", "拒絶", "放置", "破棄"],
    answer: 0,
    explanation: "支持を得る。"
},
{
    question: "社会の変化に柔軟に（　　　）する必要がある。",
    choices: ["対応", "拒否", "混乱", "終了"],
    answer: 0,
    explanation: "柔軟に対応する。"
},
{
    question: "方針の変更が余儀なくされた。\n「余儀なく」の読み方は？",
    choices: ["よぎなく", "よくなく", "あまりなく", "よぎりなく"],
    answer: 0,
    explanation: "余儀なく（よぎなく）"
},
{
    question: "設備の老朽化が進んでいる。\n「老朽化」の読み方は？",
    choices: ["ろうきゅうか", "ろうこうか", "ろうしゅうか", "ろうちゅうか"],
    answer: 0,
    explanation: "老朽化（ろうきゅうか）"
},
{
    question: "企業は収益の最大化を目指している。\n「収益」に最も近い意味は？",
    choices: ["利益", "損失", "資産", "借金"],
    answer: 0,
    explanation: "収益＝利益。"
},
{
    question: "その意見は極めて妥当だ。\n「妥当」に最も近い意味は？",
    choices: ["適切", "危険", "曖昧", "厳格"],
    answer: 0,
    explanation: "妥当＝適切である。"
},
{
    question: "市場の需要が急増している。\n「需要」の意味は？",
    choices: ["商品を欲しがること", "販売すること", "投資すること", "生産すること"],
    answer: 0,
    explanation: "需要＝求める量。"
},

{
    question: "企業の信用を失う。\n「信用」に最も近い意味は？",
    choices: ["信頼", "利益", "経験", "能力"],
    answer: 0,
    explanation: "信用＝信頼。"
},
{
    question: "競争力を強化する。\n「強化」に最も近い意味は？",
    choices: ["強くする", "減らす", "止める", "隠す"],
    answer: 0,
    explanation: "強化＝強くすること。"
},
{
    question: "適切な措置を講じた。\n「講じる」の意味は？",
    choices: ["取る", "捨てる", "避ける", "壊す"],
    answer: 0,
    explanation: "措置を講じる＝対策を取る。"
},
{
    question: "この制度は社会に浸透している。\n「浸透」の読み方は？",
    choices: ["しんとう", "しんどう", "じんとう", "しんしょう"],
    answer: 0,
    explanation: "浸透（しんとう）"
},
{
    question: "改革を断行した。\n「断行」に最も近い意味は？",
    choices: ["思い切って実行する", "延期する", "相談する", "中止する"],
    answer: 0,
    explanation: "断行＝決断して実行する。"
},

{
    question: "結果を総括する。\n「総括」の読み方は？",
    choices: ["そうかつ", "そうせつ", "そうこう", "そうがつ"],
    answer: 0,
    explanation: "総括（そうかつ）"
},
{
    question: "企業理念を共有する。\n「理念」の意味に最も近いものは？",
    choices: ["基本的な考え方", "利益", "財産", "作業手順"],
    answer: 0,
    explanation: "理念＝基本的な考え方。"
},
{
    question: "経費を削減する。\n「削減」に最も近い意味は？",
    choices: ["減らす", "増やす", "集める", "交換する"],
    answer: 0,
    explanation: "削減＝減らすこと。"
},
{
    question: "制度の導入を決定した。\n「導入」の意味は？",
    choices: ["新しく取り入れること", "破棄すること", "否定すること", "停止すること"],
    answer: 0,
    explanation: "導入＝取り入れる。"
},
{
    question: "市場を開拓する。\n「開拓」の読み方は？",
    choices: ["かいたく", "かいだく", "かいとく", "がいたく"],
    answer: 0,
    explanation: "開拓（かいたく）"
},

{
    question: "全体像を把握する。\n「把握」に最も近い意味は？",
    choices: ["理解する", "拒否する", "破壊する", "放置する"],
    answer: 0,
    explanation: "把握＝理解する。"
},
{
    question: "柔軟な対応が求められる。\n「柔軟」に最も近い意味は？",
    choices: ["融通が利く", "厳格な", "消極的な", "強引な"],
    answer: 0,
    explanation: "柔軟＝融通が利く。"
},
{
    question: "問題の本質を見極める。\n「本質」の意味は？",
    choices: ["最も重要な部分", "外見", "結果", "手順"],
    answer: 0,
    explanation: "本質＝核心部分。"
},
{
    question: "状況は著しく改善した。\n「著しく」の意味は？",
    choices: ["非常に", "少し", "全く", "たまに"],
    answer: 0,
    explanation: "著しく＝非常に。"
},
{
    question: "提案を実現する。\n「実現」の読み方は？",
    choices: ["じつげん", "じつけん", "じげん", "じつごん"],
    answer: 0,
    explanation: "実現（じつげん）"
},

{
    question: "新たな雇用を創出する。\n「創出」の意味は？",
    choices: ["新しく生み出す", "削除する", "維持する", "統合する"],
    answer: 0,
    explanation: "創出＝新しく作り出す。"
},
{
    question: "企業活動を監督する。\n「監督」の意味は？",
    choices: ["管理する", "応援する", "停止する", "改善する"],
    answer: 0,
    explanation: "監督＝管理すること。"
},
{
    question: "需要を喚起する。\n「喚起」の読み方は？",
    choices: ["かんき", "かんぎ", "こんき", "けんき"],
    answer: 0,
    explanation: "喚起（かんき）"
},
{
    question: "事態の推移を見守る。\n「推移」に最も近い意味は？",
    choices: ["変化していく様子", "最終結果", "原因", "方針"],
    answer: 0,
    explanation: "推移＝移り変わり。"
},
{
    question: "計画を遂行する。\n「遂行」の意味は？",
    choices: ["やり遂げる", "延期する", "断念する", "批判する"],
    answer: 0,
    explanation: "遂行＝やり遂げる。"
},

{
    question: "業績不振が続いている。\n「不振」に最も近い意味は？",
    choices: ["振るわない", "順調", "急成長", "安定"],
    answer: 0,
    explanation: "不振＝よくない状態。"
},
{
    question: "企業は事業を拡張した。\n「拡張」の意味は？",
    choices: ["広げる", "減らす", "停止する", "隠す"],
    answer: 0,
    explanation: "拡張＝広げる。"
},
{
    question: "制度改革は不可欠だ。\n「不可欠」の意味は？",
    choices: ["なくてはならない", "不要な", "危険な", "曖昧な"],
    answer: 0,
    explanation: "不可欠＝必須。"
},
{
    question: "顕著な成果が見られた。\n「顕著」の意味は？",
    choices: ["はっきり目立つ", "普通の", "不十分な", "危険な"],
    answer: 0,
    explanation: "顕著＝非常に目立つ。"
},
{
    question: "組織再編を行う。\n「再編」の読み方は？",
    choices: ["さいへん", "さいあみ", "さいべん", "さいぺん"],
    answer: 0,
    explanation: "再編（さいへん）"
},

{
    question: "人材不足が深刻化している。\n「深刻化」の意味は？",
    choices: ["状況が悪くなる", "改善する", "解決する", "整理する"],
    answer: 0,
    explanation: "深刻化＝悪化すること。"
},
{
    question: "市場占有率を高める。\n「占有率」の意味は？",
    choices: ["市場での割合", "利益率", "成長率", "失業率"],
    answer: 0,
    explanation: "占有率＝シェア。"
},
{
    question: "企業価値を向上させる。\n「向上」の意味は？",
    choices: ["良くする", "減少させる", "停止する", "分散させる"],
    answer: 0,
    explanation: "向上＝良くする。"
},
{
    question: "方針を徹底する。\n「徹底」に最も近い意味は？",
    choices: ["十分に実施する", "少し行う", "中止する", "変更する"],
    answer: 0,
    explanation: "徹底＝十分に行う。"
},
{
    question: "その問題の原因を究明する。\n「究明」の意味は？",
    choices: ["詳しく調べて明らかにする", "隠す", "削除する", "延期する"],
    answer: 0,
    explanation: "究明＝真相を明らかにする。"
},

{
    question: "企業間の競合が激化している。\n「競合」の意味は？",
    choices: ["互いに競争すること", "協力すること", "統合すること", "分離すること"],
    answer: 0,
    explanation: "競合＝競争相手。"
},
{
    question: "事業継承が課題である。\n「継承」の意味は？",
    choices: ["引き継ぐこと", "中止すること", "売却すること", "削減すること"],
    answer: 0,
    explanation: "継承＝引き継ぐこと。"
},
{
    question: "企業は資産運用を見直した。\n「資産」の意味は？",
    choices: ["財産", "負債", "税金", "人員"],
    answer: 0,
    explanation: "資産＝財産。"
},
{
    question: "その会社は新市場へ参入した。\n「参入」の意味は？",
    choices: ["新しく加わる", "撤退する", "統合する", "閉鎖する"],
    answer: 0,
    explanation: "参入＝新しく参加する。"
},
{
    question: "成果を検証する。\n「検証」の意味は？",
    choices: ["正しいか確認する", "削除する", "拒否する", "交換する"],
    answer: 0,
    explanation: "検証＝確認すること。"
},

{
    question: "経営基盤を強化する。\n「基盤」に最も近い意味は？",
    choices: ["土台", "問題", "結果", "利益"],
    answer: 0,
    explanation: "基盤＝土台。"
},
{
    question: "業務を円滑に進める。\n「円滑」の意味は？",
    choices: ["スムーズ", "危険", "複雑", "厳格"],
    answer: 0,
    explanation: "円滑＝スムーズ。"
},
{
    question: "経済格差が広がっている。\n「格差」の意味は？",
    choices: ["差", "協力", "利益", "競争"],
    answer: 0,
    explanation: "格差＝差。"
},
{
    question: "企業の信用回復に努める。\n「回復」の意味は？",
    choices: ["元に戻る", "減少する", "停止する", "拡大する"],
    answer: 0,
    explanation: "回復＝元に戻る。"
},
{
    question: "新しい施策を実施する。\n「施策」の意味は？",
    choices: ["政策・対策", "失敗", "事故", "財産"],
    answer: 0,
    explanation: "施策＝政策や対策。"
},
{
    question: "社会問題が顕在化してきた。\n「顕在化」の意味は？",
    choices: ["表面化する", "解決する", "縮小する", "隠れる"],
    answer: 0,
    explanation: "顕在化＝表に現れること。"
},
{
    question: "政府が市場に介入した。\n「介入」の読み方は？",
    choices: ["かいにゅう", "かいじゅう", "かいゆう", "けいにゅう"],
    answer: 0,
    explanation: "介入（かいにゅう）"
},
{
    question: "環境の変化に適応する。\n「適応」に最も近い意味は？",
    choices: ["合わせる", "拒否する", "改善する", "維持する"],
    answer: 0,
    explanation: "適応＝環境に合わせること。"
},
{
    question: "制度の弊害が指摘されている。\n「弊害」の読み方は？",
    choices: ["へいがい", "はいがい", "へいかい", "ひがい"],
    answer: 0,
    explanation: "弊害（へいがい）"
},
{
    question: "問題の背景を調査する。\n「背景」に最も近い意味は？",
    choices: ["事情", "結果", "利益", "方法"],
    answer: 0,
    explanation: "背景＝物事の後ろにある事情。"
},

{
    question: "余剰在庫が発生した。\n「余剰」の読み方は？",
    choices: ["よじょう", "よしょう", "よとう", "よゆう"],
    answer: 0,
    explanation: "余剰（よじょう）"
},
{
    question: "現在の経済概況を報告する。\n「概況」の読み方は？",
    choices: ["がいきょう", "がいこう", "かいきょう", "がいぎょう"],
    answer: 0,
    explanation: "概況（がいきょう）"
},
{
    question: "現地の実態を把握する。\n「実態」に最も近い意味は？",
    choices: ["実際の状態", "予想", "方針", "将来"],
    answer: 0,
    explanation: "実態＝実際の様子。"
},
{
    question: "会社の沿革を調べる。\n「沿革」の読み方は？",
    choices: ["えんかく", "えんがく", "そうかく", "ぞうかく"],
    answer: 0,
    explanation: "沿革（えんかく）"
},
{
    question: "専門家の見解を聞く。\n「見解」に最も近い意味は？",
    choices: ["考え", "経験", "記録", "規則"],
    answer: 0,
    explanation: "見解＝考え方。"
},

{
    question: "現状に対する認識が甘い。\n「認識」の意味は？",
    choices: ["理解", "否定", "削除", "配布"],
    answer: 0,
    explanation: "認識＝物事を理解すること。"
},
{
    question: "相手への顧慮が足りない。\n「顧慮」の読み方は？",
    choices: ["こりょ", "こうりょ", "こりょう", "こうりょう"],
    answer: 0,
    explanation: "顧慮（こりょ）"
},
{
    question: "将来への懸念が広がっている。\n「懸念」に最も近い意味は？",
    choices: ["心配", "期待", "安心", "決意"],
    answer: 0,
    explanation: "懸念＝心配。"
},
{
    question: "企業の存立基盤を強化する。\n「存立」の読み方は？",
    choices: ["そんりつ", "ぞんりつ", "そんたつ", "ぞんたつ"],
    answer: 0,
    explanation: "存立（そんりつ）"
},
{
    question: "制度の趣旨を理解する。\n「趣旨」に最も近い意味は？",
    choices: ["目的", "結果", "方法", "規模"],
    answer: 0,
    explanation: "趣旨＝目的・意図。"
},

{
    question: "企業は新市場を模索している。\n「模索」の読み方は？",
    choices: ["もさく", "ぼさく", "もうさく", "もしゃく"],
    answer: 0,
    explanation: "模索（もさく）"
},
{
    question: "関係者の了承を得る。\n「了承」の意味は？",
    choices: ["納得して認めること", "拒否すること", "命令すること", "報告すること"],
    answer: 0,
    explanation: "了承＝事情を理解して承認すること。"
},
{
    question: "事業の採算が取れない。\n「採算」の読み方は？",
    choices: ["さいさん", "さいざん", "さいせん", "ざいさん"],
    answer: 0,
    explanation: "採算（さいさん）"
},
{
    question: "問題の要旨をまとめる。\n「要旨」の意味は？",
    choices: ["中心となる内容", "補足資料", "結論後の説明", "統計資料"],
    answer: 0,
    explanation: "要旨＝大事な内容。"
},
{
    question: "企業の脆弱性が問題視されている。\n「脆弱性」の読み方は？",
    choices: ["ぜいじゃくせい", "ぜいよくせい", "ぜいせいじゃく", "ざいじゃくせい"],
    answer: 0,
    explanation: "脆弱性（ぜいじゃくせい）"
},

{
    question: "情報を網羅する。\n「網羅」の読み方は？",
    choices: ["もうら", "あみら", "もうろ", "こうら"],
    answer: 0,
    explanation: "網羅（もうら）"
},
{
    question: "人材を育む環境が必要だ。\n「育む」の読み方は？",
    choices: ["はぐくむ", "そだむ", "はくむ", "いくむ"],
    answer: 0,
    explanation: "育む（はぐくむ）"
},
{
    question: "市場の飽和が懸念される。\n「飽和」の読み方は？",
    choices: ["ほうわ", "ほわ", "ほうか", "ようわ"],
    answer: 0,
    explanation: "飽和（ほうわ）"
},
{
    question: "企業の根幹に関わる問題だ。\n「根幹」に最も近い意味は？",
    choices: ["最も重要な部分", "表面的な部分", "将来計画", "補足情報"],
    answer: 0,
    explanation: "根幹＝中心部分。"
},
{
    question: "景気後退の兆候が見える。\n「兆候」に最も近い意味は？",
    choices: ["きざし", "結果", "対策", "状況"],
    answer: 0,
    explanation: "兆候＝何かが起こる前ぶれ。"
},
{
    question: "企業間の連携を強化する。\n「連携」に最も近い意味は？",
    choices: ["協力すること", "競争すること", "分離すること", "拒否すること"],
    answer: 0,
    explanation: "連携＝協力して行動すること。"
},
{
    question: "市場の停滞が続いている。\n「停滞」の意味は？",
    choices: ["発展しない状態", "急成長", "改善", "拡大"],
    answer: 0,
    explanation: "停滞＝発展せず止まっている状態。"
},
{
    question: "企業の信頼性が問われている。\n「信頼性」の読み方は？",
    choices: ["しんらいせい", "しんようせい", "しんたいせい", "しんけんせい"],
    answer: 0,
    explanation: "信頼性（しんらいせい）"
},
{
    question: "問題を未然に防ぐ。\n「未然」の読み方は？",
    choices: ["みぜん", "みねん", "びぜん", "びねん"],
    answer: 0,
    explanation: "未然（みぜん）"
},
{
    question: "慎重な審議が必要だ。\n「審議」の読み方は？",
    choices: ["しんぎ", "しんき", "じんぎ", "しんご"],
    answer: 0,
    explanation: "審議（しんぎ）"
},

{
    question: "企業活動の透明性を高める。\n「透明性」に最も近い意味は？",
    choices: ["分かりやすさ", "秘密性", "危険性", "複雑さ"],
    answer: 0,
    explanation: "透明性＝内容が分かりやすく公開されていること。"
},
{
    question: "市場で優位性を確立する。\n「優位性」の読み方は？",
    choices: ["ゆういせい", "ゆいせい", "ゆうせい", "ゆうたいせい"],
    answer: 0,
    explanation: "優位性（ゆういせい）"
},
{
    question: "経済情勢を見据える。\n「見据える」の読み方は？",
    choices: ["みすえる", "みかまえる", "みこえる", "みのぞえる"],
    answer: 0,
    explanation: "見据える（みすえる）"
},
{
    question: "企業の負担を軽減する。\n「軽減」に最も近い意味は？",
    choices: ["軽くする", "増やす", "無くす", "固定する"],
    answer: 0,
    explanation: "軽減＝軽くすること。"
},
{
    question: "計画の進行を阻害する要因がある。\n「阻害」の読み方は？",
    choices: ["そがい", "しょうがい", "ぞがい", "そこう"],
    answer: 0,
    explanation: "阻害（そがい）"
},

{
    question: "企業は新技術の普遍化を目指している。\n「普遍」に最も近い意味は？",
    choices: ["広く当てはまる", "珍しい", "限定的", "特殊"],
    answer: 0,
    explanation: "普遍＝広く共通していること。"
},
{
    question: "市場の実情を反映する。\n「実情」に最も近い意味は？",
    choices: ["実際の事情", "理想", "予想", "規則"],
    answer: 0,
    explanation: "実情＝実際の事情。"
},
{
    question: "その判断は極端すぎる。\n「極端」に最も近い意味は？",
    choices: ["偏っている", "普通である", "穏やか", "正確"],
    answer: 0,
    explanation: "極端＝一方に偏っている。"
},
{
    question: "業績回復の兆しが見えてきた。\n「兆し」の意味は？",
    choices: ["前ぶれ", "結果", "原因", "失敗"],
    answer: 0,
    explanation: "兆し＝何かが起こる前ぶれ。"
},
{
    question: "その提案には一貫性がある。\n「一貫性」に最も近い意味は？",
    choices: ["筋が通っていること", "変化が激しいこと", "不安定なこと", "複雑なこと"],
    answer: 0,
    explanation: "一貫性＝考え方や方針が統一されていること。"
},

{
    question: "企業の将来像を描く。\n「将来像」の読み方は？",
    choices: ["しょうらいぞう", "しょうらいしょう", "しょうらいよう", "しょうらいそう"],
    answer: 0,
    explanation: "将来像（しょうらいぞう）"
},
{
    question: "市場の変動に左右される。\n「左右される」に最も近い意味は？",
    choices: ["影響を受ける", "支配する", "改善する", "拡大する"],
    answer: 0,
    explanation: "左右される＝影響を受ける。"
},
{
    question: "改革案の骨子を説明する。\n「骨子」の読み方は？",
    choices: ["こっし", "ほねこ", "こつし", "こっこ"],
    answer: 0,
    explanation: "骨子（こっし）"
},
{
    question: "企業の存亡に関わる問題だ。\n「存亡」の読み方は？",
    choices: ["そんぼう", "ぞんぼう", "そんもう", "ぞんもう"],
    answer: 0,
    explanation: "存亡（そんぼう）"
},
{
    question: "意見が対立している。\n「対立」に最も近い意味は？",
    choices: ["反対し合う", "協力する", "統合する", "共有する"],
    answer: 0,
    explanation: "対立＝反対の立場になること。"
},

{
    question: "経営方針を刷新する。\n「刷新」の読み方は？",
    choices: ["さっしん", "さくしん", "せっしん", "さっせい"],
    answer: 0,
    explanation: "刷新（さっしん）"
},
{
    question: "その考えは抽象的すぎる。\n「抽象的」に最も近い意味は？",
    choices: ["具体性がない", "現実的", "明確", "単純"],
    answer: 0,
    explanation: "抽象的＝具体性がない。"
},
{
    question: "事態は深刻な局面を迎えた。\n「局面」の読み方は？",
    choices: ["きょくめん", "きょくもん", "きょくべん", "きょくてん"],
    answer: 0,
    explanation: "局面（きょくめん）"
},
{
    question: "課題を明示する。\n「明示」に最も近い意味は？",
    choices: ["はっきり示す", "隠す", "削除する", "変更する"],
    answer: 0,
    explanation: "明示＝はっきり示すこと。"
},
{
    question: "企業は危機的状況に直面している。\n「直面」の読み方は？",
    choices: ["ちょくめん", "じきめん", "ちょくもん", "ちょくべん"],
    answer: 0,
    explanation: "直面（ちょくめん）"
}
,
{
    question: "彼は経験者（　　　）、今回の結果は意外だった。",
    choices: ["だけに", "だけあって", "ばかりに", "からには"],
    answer: 0,
    explanation: "だけに＝期待が大きかった分。"
},
{
    question: "雨が降ろうが降る（　　　）、試合は行われる。",
    choices: ["まいが", "まいと", "ものを", "ものなら"],
    answer: 1,
    explanation: "〜ようが〜まいが。"
},
{
    question: "いくら頼まれても、その仕事は引き受け（　　　）。",
    choices: ["かねる", "かねない", "えない", "がたい"],
    answer: 0,
    explanation: "〜かねる＝できない。"
},
{
    question: "その話は信じるに（　　　）。",
    choices: ["足りる", "及ぶ", "値する", "限る"],
    answer: 2,
    explanation: "〜に値する＝価値がある。"
},
{
    question: "彼の実力をもって（　　　）、解決できなかった。",
    choices: ["しても", "しては", "すると", "したら"],
    answer: 0,
    explanation: "〜をもってしても。"
},
{
    question: "そんなことは子供（　　　）分かる。",
    choices: ["すら", "のみ", "ばかり", "ほど"],
    answer: 0,
    explanation: "〜すら＝〜でさえ。"
},
{
    question: "失敗したからといって落ち込む（　　　）。",
    choices: ["ことはない", "わけではない", "ものだ", "までだ"],
    answer: 0,
    explanation: "〜ことはない＝必要ない。"
},
{
    question: "今さら言い訳した（　　　）、結果は変わらない。",
    choices: ["ところで", "ところが", "ところを", "ところだった"],
    answer: 0,
    explanation: "〜たところで。"
},
{
    question: "彼は責任者である（　　　）、最後までやり遂げるべきだ。",
    choices: ["からには", "どころか", "ばかりに", "ように"],
    answer: 0,
    explanation: "〜からには。"
},
{
    question: "その計画は失敗するおそれがある（　　　）、慎重に進める必要がある。",
    choices: ["だけに", "からして", "のみならず", "ものの"],
    answer: 1,
    explanation: "〜からして。"
},
{
    question: "彼は約束を守る（　　　）、時間にも正確だ。",
    choices: ["のみならず", "どころか", "だけに", "ものの"],
    answer: 0,
    explanation: "〜のみならず。"
},
{
    question: "そんな無責任な行動は許し（　　　）。",
    choices: ["がたい", "かねる", "きれる", "うる"],
    answer: 0,
    explanation: "〜がたい＝受け入れ難い。"
},
{
    question: "問題の解決には時間がかかる（　　　）。",
    choices: ["に違いない", "にすぎない", "にほかならない", "に限る"],
    answer: 0,
    explanation: "強い推量。"
},
{
    question: "一度決めた（　　　）、最後までやり抜く。",
    choices: ["以上", "限り", "だけ", "ほど"],
    answer: 0,
    explanation: "〜以上。"
},
{
    question: "彼女は歌が上手な（　　　）、作曲もできる。",
    choices: ["ばかりか", "ものの", "反面", "だけに"],
    answer: 0,
    explanation: "〜ばかりか。"
},
{
    question: "その結果は努力の成果にほかなら（　　　）。",
    choices: ["ない", "ぬ", "ず", "かねない"],
    answer: 0,
    explanation: "〜にほかならない。"
},
{
    question: "彼の立場に（　　　）、その判断も理解できる。",
    choices: ["してみれば", "しては", "したら", "しても"],
    answer: 0,
    explanation: "〜にしてみれば。"
},
{
    question: "あの映画は一度見るに（　　　）。",
    choices: ["値する", "足る", "及ぶ", "限る"],
    answer: 0,
    explanation: "〜に値する。"
},
{
    question: "そんな失礼な発言は聞き捨て（　　　）。",
    choices: ["ならない", "いけない", "できない", "がたい"],
    answer: 0,
    explanation: "聞き捨てならない。"
},
{
    question: "景気は回復するどころか悪化する（　　　）だ。",
    choices: ["一方", "限り", "次第", "こと"],
    answer: 0,
    explanation: "〜一方だ。"
},
{
    question: "彼は経験が豊富な（　　　）、仕事が非常に早い。",
    choices: ["だけあって", "ばかりに", "ものの", "どころか"],
    answer: 0,
    explanation: "〜だけあって＝その評価にふさわしく。"
},
{
    question: "どんな事情がある（　　　）、約束は守るべきだ。",
    choices: ["にせよ", "ものの", "どころか", "ばかりか"],
    answer: 0,
    explanation: "〜にせよ＝たとえ〜でも。"
},
{
    question: "その映画は期待した（　　　）ではなかった。",
    choices: ["ほど", "ばかり", "だけ", "しか"],
    answer: 0,
    explanation: "〜ほど〜ない。"
},
{
    question: "彼は謝るどころか、お礼の言葉（　　　）なかった。",
    choices: ["すら", "こそ", "まで", "だけ"],
    answer: 0,
    explanation: "〜どころか〜すら。"
},
{
    question: "今さら後悔した（　　　）、結果は変わらない。",
    choices: ["ところで", "ところが", "ところを", "ところだった"],
    answer: 0,
    explanation: "〜たところで＝しても無駄。"
},
{
    question: "彼ほど優秀な人（　　　）、この問題は難しい。",
    choices: ["にしても", "にしては", "にしたら", "に対して"],
    answer: 0,
    explanation: "〜にしても＝たとえ〜でも。"
},
{
    question: "彼女は日本語のみならず、中国語（　　　）話せる。",
    choices: ["さえ", "しか", "だけ", "ほど"],
    answer: 0,
    explanation: "〜のみならず〜さえ。"
},
{
    question: "責任者である（　　　）、最後まで対応すべきだ。",
    choices: ["からには", "どころか", "ばかりに", "かわりに"],
    answer: 0,
    explanation: "〜からには＝その立場なら当然。"
},
{
    question: "そんな失礼な態度は許し（　　　）。",
    choices: ["がたい", "かねる", "きれる", "うる"],
    answer: 0,
    explanation: "〜がたい＝受け入れ難い。"
},
{
    question: "失敗したからといって落ち込む（　　　）。",
    choices: ["ことはない", "ものではない", "わけがない", "までだ"],
    answer: 0,
    explanation: "〜ことはない＝その必要はない。"
},
{
    question: "彼の説明には納得できる（　　　）がある。",
    choices: ["もの", "こと", "わけ", "ところ"],
    answer: 0,
    explanation: "〜ものがある＝強くそう感じる。"
},
{
    question: "この問題は専門家ですら判断しかねる（　　　）。",
    choices: ["ほどだ", "ものだ", "ことだ", "わけだ"],
    answer: 0,
    explanation: "程度を強調する表現。"
},
{
    question: "彼の立場に（　　　）、その判断も理解できる。",
    choices: ["してみれば", "しては", "したら", "しても"],
    answer: 0,
    explanation: "〜にしてみれば＝その立場から見ると。"
},
{
    question: "そんな大切な書類をなくすなんて、信じ（　　　）。",
    choices: ["がたい", "かねる", "きれる", "うる"],
    answer: 0,
    explanation: "〜がたい＝信じられない。"
},
{
    question: "ここまで来た（　　　）は、最後まで頑張ろう。",
    choices: ["以上", "限り", "だけ", "ほど"],
    answer: 0,
    explanation: "〜以上は＝〜したからには。"
},
{
    question: "一度約束した（　　　）、守らなければならない。",
    choices: ["以上", "限り", "だけ", "まで"],
    answer: 0,
    explanation: "〜以上＝〜したからには。"
},
{
    question: "彼は反省するどころか、同じ失敗を繰り返す（　　　）だ。",
    choices: ["始末", "次第", "限り", "もの"],
    answer: 0,
    explanation: "〜始末だ＝悪い結果。"
},
{
    question: "この作品は一読に（　　　）。",
    choices: ["値する", "及ぶ", "足る", "限る"],
    answer: 0,
    explanation: "〜に値する＝価値がある。"
},
{
    question: "景気は回復するどころか悪化する（　　　）だ。",
    choices: ["一方", "次第", "限り", "もの"],
    answer: 0,
    explanation: "〜一方だ＝ますます〜。"
},
{
    question: "その成功は努力の結果にほかなら（　　　）。",
    choices: ["ない", "ぬ", "ず", "まい"],
    answer: 0,
    explanation: "〜にほかならない＝まさに〜だ。"
},
{
    question: "彼は忙しい（　　　）、頼まれた仕事は断らない。",
    choices: ["ながらも", "ばかりか", "のみならず", "だけに"],
    answer: 0,
    explanation: "〜ながらも＝〜にもかかわらず。"
},
{
    question: "この仕事は経験者に（　　　）、難しいだろう。",
    choices: ["しても", "しては", "したら", "してみれば"],
    answer: 0,
    explanation: "〜にしても＝たとえ〜でも。"
},
{
    question: "彼女の成功は努力の結果（　　　）。",
    choices: ["にほかならない", "にすぎない", "にちがいない", "にかぎる"],
    answer: 0,
    explanation: "〜にほかならない＝まさに〜だ。"
},
{
    question: "その本は学生のみならず、教師（　　　）読まれている。",
    choices: ["にも", "しか", "こそ", "ほど"],
    answer: 0,
    explanation: "〜のみならず〜にも。"
},
{
    question: "失敗した以上、責任を取らずには（　　　）。",
    choices: ["すまない", "いられない", "ならない", "おかない"],
    answer: 0,
    explanation: "〜ずにはすまない。"
},
{
    question: "彼の発言は誤解を招き（　　　）。",
    choices: ["かねない", "かねる", "がたい", "えない"],
    answer: 0,
    explanation: "〜かねない＝悪い結果になる可能性。"
},
{
    question: "そんな簡単なことは説明する（　　　）ない。",
    choices: ["までも", "ほど", "だけ", "しか"],
    answer: 0,
    explanation: "〜までもない＝その必要がない。"
},
{
    question: "彼は約束を守る（　　　）、責任感も強い。",
    choices: ["ばかりか", "どころか", "ながら", "ものの"],
    answer: 0,
    explanation: "〜ばかりか＝その上。"
},
{
    question: "その事故は大きな被害をもたらした（　　　）、社会に不安を与えた。",
    choices: ["うえに", "ものの", "ところで", "あまり"],
    answer: 0,
    explanation: "〜うえに＝さらに。"
},
{
    question: "今さら謝ったところで許してもらえる（　　　）。",
    choices: ["わけがない", "ことはない", "ものだ", "はずだ"],
    answer: 0,
    explanation: "〜わけがない＝絶対にない。"
},
{
    question: "彼は新人とは思えない（　　　）落ち着いている。",
    choices: ["ほど", "だけ", "ばかり", "しか"],
    answer: 0,
    explanation: "〜ほど＝程度を強調。"
},
{
    question: "どれほど反対されようと、この計画を進める（　　　）だ。",
    choices: ["まで", "もの", "だけ", "はず"],
    answer: 0,
    explanation: "〜までだ＝そうするしかない。"
},
{
    question: "その説明には納得できる（　　　）があった。",
    choices: ["もの", "こと", "ところ", "わけ"],
    answer: 0,
    explanation: "〜ものがある。"
},
{
    question: "彼ほどの実力者（　　　）、失敗することもある。",
    choices: ["といえども", "ばかりに", "ところが", "おかげで"],
    answer: 0,
    explanation: "〜といえども＝〜でも。"
},
{
    question: "学生である（　　　）、勉強を優先すべきだ。",
    choices: ["からには", "だけに", "ばかりに", "ために"],
    answer: 0,
    explanation: "〜からには＝その立場なら当然。"
},
{
    question: "彼の説明を聞く（　　　）、この案には問題がある。",
    choices: ["かぎり", "ところ", "ばかり", "あまり"],
    answer: 0,
    explanation: "〜限り＝〜から判断すると。"
},
{
    question: "そんな危険な場所へ行こう（　　　）、皆が止めるだろう。",
    choices: ["ものなら", "ものの", "ものを", "ものだから"],
    answer: 0,
    explanation: "〜ようものなら＝もし〜したら。"
},
{
    question: "努力したからといって成功する（　　　）。",
    choices: ["とは限らない", "に違いない", "ものだ", "はずだ"],
    answer: 0,
    explanation: "必ずしもそうとは言えない。"
},
{
    question: "彼は疲れている（　　　）、最後まで働き続けた。",
    choices: ["にもかかわらず", "おかげで", "せいで", "ために"],
    answer: 0,
    explanation: "逆接表現。"
},
{
    question: "その問題については再検討する（　　　）がある。",
    choices: ["余地", "恐れ", "結果", "末"],
    answer: 0,
    explanation: "〜余地がある＝検討の可能性がある。"
},
{
    question: "彼の説明は分かりやすい（　　　）、内容が少し不足していた。",
    choices: ["ものの", "ばかりか", "だけに", "のみならず"],
    answer: 0,
    explanation: "〜ものの＝しかし。逆接。"
},
{
    question: "彼は若い（　　　）、判断力がある。",
    choices: ["わりに", "ばかりに", "だけに", "ものの"],
    answer: 0,
    explanation: "〜わりに＝予想と違って。"
},
{
    question: "この企画は成功する見込みがある（　　　）、慎重に進めたい。",
    choices: ["とはいえ", "ばかりか", "だけに", "のみならず"],
    answer: 0,
    explanation: "〜とはいえ＝そうは言っても。"
},
{
    question: "彼は謝る（　　　）、感謝の言葉まで述べた。",
    choices: ["どころか", "ばかりか", "のみならず", "うえに"],
    answer: 1,
    explanation: "〜ばかりか＝その上。"
},
{
    question: "今後どうなるかは誰にも分からない（　　　）。",
    choices: ["次第だ", "ものだ", "ことだ", "までだ"],
    answer: 0,
    explanation: "〜次第だ＝〜による。"
},
{
    question: "彼女は努力家である（　　　）、結果を出している。",
    choices: ["だけあって", "ばかりに", "ものの", "どころか"],
    answer: 0,
    explanation: "〜だけあって＝期待通り。"
},
{
    question: "そんな無理な計画は実現しよう（　　　）。",
    choices: ["ものなら", "ものの", "ものを", "ものだから"],
    answer: 0,
    explanation: "〜ようものなら＝もし〜したら。"
},
{
    question: "彼は説明を聞きながらメモを取る（　　　）、質問もしていた。",
    choices: ["かたわら", "そばから", "一方で", "うえで"],
    answer: 2,
    explanation: "〜一方で＝その反面。"
},
{
    question: "試験に合格したいなら、努力する（　　　）。",
    choices: ["に越したことはない", "にすぎない", "にほかならない", "に限らない"],
    answer: 0,
    explanation: "〜に越したことはない＝それが最善。"
},
{
    question: "この薬を飲んだ（　　　）、すぐに治るわけではない。",
    choices: ["からといって", "おかげで", "せいで", "ために"],
    answer: 0,
    explanation: "〜からといって＝だからといって。"
},
{
    question: "彼は責任感が強い（　　　）、周囲から信頼されている。",
    choices: ["ゆえに", "ものの", "どころか", "ながらも"],
    answer: 0,
    explanation: "〜ゆえに＝〜なので。"
},
{
    question: "そんな話は信じる（　　　）ない。",
    choices: ["はずが", "ことが", "ものが", "わけが"],
    answer: 0,
    explanation: "〜はずがない＝あり得ない。"
},
{
    question: "この仕事は経験がない人には難しい（　　　）。",
    choices: ["に違いない", "ものだ", "ことだ", "ところだ"],
    answer: 0,
    explanation: "強い推量。"
},
{
    question: "彼の活躍は賞賛に（　　　）。",
    choices: ["値する", "及ぶ", "足る", "限る"],
    answer: 0,
    explanation: "〜に値する＝価値がある。"
},
{
    question: "一度決めたことは最後までやり抜く（　　　）。",
    choices: ["つもりだ", "そうだ", "ようだ", "らしい"],
    answer: 0,
    explanation: "意志表現。"
},
{
    question: "彼は疲れていたが、休もうとも（　　　）。",
    choices: ["しなかった", "できなかった", "いなかった", "ならなかった"],
    answer: 0,
    explanation: "〜ようともしない。"
},
{
    question: "この作品は子供向けという（　　　）、大人も楽しめる。",
    choices: ["ものの", "ばかりか", "どころか", "だけに"],
    answer: 0,
    explanation: "逆接。"
},
{
    question: "彼女は歌が上手なうえに、ダンス（　　　）得意だ。",
    choices: ["も", "が", "を", "で"],
    answer: 0,
    explanation: "〜うえに〜も。"
},
{
    question: "会議の結果（　　　）では、計画は延期になるそうだ。",
    choices: ["次第", "限り", "上", "もの"],
    answer: 0,
    explanation: "〜次第では＝〜によっては。"
},
{
    question: "その案には反対ではないが、賛成とも言い（　　　）。",
    choices: ["かねる", "えない", "がたい", "かねない"],
    answer: 0,
    explanation: "〜かねる＝言いにくい。"
},
{
    question: "彼は新人（　　　）、責任ある仕事を任されている。",
    choices: ["ながら", "だけに", "ばかりに", "ものの"],
    answer: 0,
    explanation: "〜ながら＝〜にもかかわらず。"
},
{
    question: "その計画には賛成しかねる（　　　）がある。",
    choices: ["ところ", "もの", "こと", "わけ"],
    answer: 1,
    explanation: "納得できない気持ちを表す『〜ものがある』。"
},
{
    question: "今後の状況（　　　）計画を変更することもある。",
    choices: ["に応じて", "にしては", "に反して", "に限って"],
    answer: 0,
    explanation: "〜に応じて＝〜に合わせて。"
},
{
    question: "彼ほど経験がある人に（　　　）、この仕事は難しい。",
    choices: ["したって", "しても", "しては", "すると"],
    answer: 1,
    explanation: "〜にしても＝たとえ〜でも。"
},
{
    question: "彼は約束を守る（　　　）、他人にも誠実だ。",
    choices: ["ばかりか", "どころか", "ながら", "ものの"],
    answer: 0,
    explanation: "〜ばかりか＝その上。"
},
{
    question: "そんな危険な場所へ行こう（　　　）、家族は心配する。",
    choices: ["ものなら", "ものの", "ものを", "ものだから"],
    answer: 0,
    explanation: "〜ようものなら＝もし〜したら。"
},
{
    question: "このミスは謝るだけでは（　　　）。",
    choices: ["すまない", "いられない", "ならない", "おかない"],
    answer: 0,
    explanation: "〜ないではすまない。"
},
{
    question: "彼の説明は論理的な（　　　）、少し分かりにくい。",
    choices: ["反面", "ばかりか", "だけに", "おかげで"],
    answer: 0,
    explanation: "〜反面＝一方で。"
},
{
    question: "学生である（　　　）、勉強を優先するべきだ。",
    choices: ["以上", "だけ", "ほど", "もの"],
    answer: 0,
    explanation: "〜以上＝〜なのだから。"
},
{
    question: "そんな失礼なことは言う（　　　）。",
    choices: ["ものではない", "ことではない", "わけではない", "ほどではない"],
    answer: 0,
    explanation: "強い禁止表現。"
},
{
    question: "彼女は日本語（　　　）、韓国語も話せる。",
    choices: ["のみならず", "どころか", "ものの", "だけに"],
    answer: 0,
    explanation: "〜のみならず＝〜だけでなく。"
},
{
    question: "その映画は期待した（　　　）面白くなかった。",
    choices: ["ほど", "だけ", "ばかり", "しか"],
    answer: 0,
    explanation: "〜ほど〜ない。"
},
{
    question: "彼の説明を聞く（　　　）、その案には問題がありそうだ。",
    choices: ["かぎり", "まで", "だけ", "あまり"],
    answer: 0,
    explanation: "〜限り＝〜から判断すると。"
},
{
    question: "どれだけ努力しても成功する（　　　）。",
    choices: ["とは限らない", "に違いない", "ものだ", "はずだ"],
    answer: 0,
    explanation: "必ずしもそうではない。"
},
{
    question: "彼の立場に（　　　）、その気持ちも理解できる。",
    choices: ["してみれば", "しては", "したら", "しても"],
    answer: 0,
    explanation: "〜にしてみれば＝その立場から見ると。"
},
{
    question: "一度引き受けた（　　　）、最後までやり通す。",
    choices: ["以上", "限り", "だけ", "ほど"],
    answer: 0,
    explanation: "〜以上＝〜したからには。"
},
{
    question: "その提案には反対という（　　　）、少し心配な点がある。",
    choices: ["わけではない", "しかない", "にすぎない", "ことはない"],
    answer: 0,
    explanation: "部分否定。"
},
{
    question: "彼は謝るどころか、言い訳ばかりする（　　　）だ。",
    choices: ["始末", "限り", "次第", "もの"],
    answer: 0,
    explanation: "〜始末だ＝悪い結果。"
},
{
    question: "この作品は一読に（　　　）。",
    choices: ["値する", "及ぶ", "足る", "限る"],
    answer: 0,
    explanation: "〜に値する＝価値がある。"
},
{
    question: "そんなことは子供（　　　）分かる。",
    choices: ["ですら", "のみ", "ほど", "かぎり"],
    answer: 0,
    explanation: "〜ですら＝〜でさえ。"
},
{
    question: "彼は疲れていた（　　　）、最後まで文句を言わなかった。",
    choices: ["にもかかわらず", "おかげで", "せいで", "ために"],
    answer: 0,
    explanation: "〜にもかかわらず＝〜なのに。"
},
{
    question: "この問題は簡単そうに見える（　　　）、実は難しい。",
    choices: ["ものの", "ばかりか", "だけに", "のみならず"],
    answer: 0,
    explanation: "〜ものの＝しかし。"
},
{
    question: "彼の説明は分かりやすい（　　　）、少し長すぎる。",
    choices: ["反面", "ばかりか", "だけに", "のみならず"],
    answer: 0,
    explanation: "〜反面＝一方で。"
},
{
    question: "責任者である（　　　）、最後まで責任を持つべきだ。",
    choices: ["からには", "どころか", "ばかりに", "かわりに"],
    answer: 0,
    explanation: "〜からには＝その立場なら当然。"
},
{
    question: "その計画は成功する見込みが高い（　　　）、油断はできない。",
    choices: ["とはいえ", "おかげで", "ために", "ゆえに"],
    answer: 0,
    explanation: "〜とはいえ＝そうは言っても。"
},
{
    question: "一度始めた（　　　）、最後までやり遂げたい。",
    choices: ["以上", "限り", "だけ", "ほど"],
    answer: 0,
    explanation: "〜以上＝〜したからには。"
},
{
    question: "どんな事情がある（　　　）、約束は守るべきだ。",
    choices: ["にせよ", "にしては", "に応じて", "に比べて"],
    answer: 0,
    explanation: "〜にせよ＝たとえ〜でも。"
},
{
    question: "彼は留学経験がある（　　　）、発音がとても自然だ。",
    choices: ["だけあって", "ばかりに", "ものの", "どころか"],
    answer: 0,
    explanation: "〜だけあって＝期待どおり。"
},
{
    question: "そんなに急ぐ（　　　）、昨日のうちに準備すべきだった。",
    choices: ["くらいなら", "うえで", "たびに", "ところで"],
    answer: 0,
    explanation: "〜くらいなら。"
},
{
    question: "彼は反対するどころか、積極的に賛成した（　　　）。",
    choices: ["ほどだ", "わけだ", "ものだ", "ことだ"],
    answer: 0,
    explanation: "程度を強調。"
},
{
    question: "この仕事は私には荷が重く、引き受け（　　　）。",
    choices: ["かねる", "かねない", "うる", "きれる"],
    answer: 0,
    explanation: "〜かねる＝できない。"
},
{
    question: "今さら言い訳した（　　　）、結果は変わらない。",
    choices: ["ところで", "ところが", "ところを", "ところだった"],
    answer: 0,
    explanation: "〜たところで＝しても無駄。"
},
{
    question: "その作品は一読に（　　　）名作だ。",
    choices: ["値する", "及ぶ", "足る", "限る"],
    answer: 0,
    explanation: "〜に値する＝価値がある。"
},
{
    question: "彼女は歌が上手な（　　　）、作曲もできる。",
    choices: ["ばかりか", "どころか", "ながら", "ものの"],
    answer: 0,
    explanation: "〜ばかりか＝その上。"
},
{
    question: "どれだけ努力しても成功する（　　　）。",
    choices: ["とは限らない", "に違いない", "はずだ", "ものだ"],
    answer: 0,
    explanation: "必ずしもそうではない。"
},
{
    question: "彼ほどの実力者（　　　）、その問題は難しい。",
    choices: ["にしても", "にしては", "にしたら", "により"],
    answer: 0,
    explanation: "〜にしても＝たとえ〜でも。"
},
{
    question: "そんな危険なことは子供（　　　）分かる。",
    choices: ["ですら", "のみ", "ほど", "ばかり"],
    answer: 0,
    explanation: "〜ですら＝〜でさえ。"
},
{
    question: "彼の説明には納得できる（　　　）がある。",
    choices: ["もの", "こと", "ため", "だけ"],
    answer: 0,
    explanation: "〜ものがある＝強くそう感じる。"
},
{
    question: "そんな失礼な発言は聞き捨て（　　　）。",
    choices: ["ならない", "いけない", "できない", "かねない"],
    answer: 0,
    explanation: "聞き捨てならない＝見過ごせない。"
},
{
    question: "問題が起きてからでは遅い。今のうちに対策を立てる（　　　）。",
    choices: ["に越したことはない", "にすぎない", "にほかならない", "にはあたらない"],
    answer: 0,
    explanation: "〜に越したことはない＝それが最善。"
}
,
{
    question: "彼は熱がある（　　　）、会社へ行こうとしている。",
    choices: ["にもかかわらず", "おかげで", "せいで", "ために"],
    answer: 0,
    explanation: "〜にもかかわらず＝〜なのに。"
},
{
    question: "その説明は分かりやすい（　　　）、少し内容が浅い。",
    choices: ["反面", "ばかりか", "のみならず", "おかげで"],
    answer: 0,
    explanation: "〜反面＝一方では。"
},
{
    question: "そんな非常識な行動は理解し（　　　）。",
    choices: ["がたい", "かねる", "きれる", "うる"],
    answer: 0,
    explanation: "〜がたい＝理解するのが難しい。"
},
{
    question: "彼の実力をもって（　　　）、この試験は難しかった。",
    choices: ["しても", "しては", "すると", "したら"],
    answer: 0,
    explanation: "〜をもってしても＝それほどでも。"
},
{
    question: "一度引き受けた（　　　）、最後まで責任を持つ。",
    choices: ["からには", "ばかりに", "どころか", "ために"],
    answer: 0,
    explanation: "〜からには＝引き受けた以上。"
},
{
    question: "彼は約束を守る（　　　）、時間にも正確だ。",
    choices: ["のみならず", "どころか", "ものの", "ながら"],
    answer: 0,
    explanation: "〜のみならず＝だけでなく。"
},
{
    question: "いくら説明された（　　　）、納得できない。",
    choices: ["にしても", "ばかりに", "だけに", "ところで"],
    answer: 0,
    explanation: "〜にしても＝たとえ〜でも。"
},
{
    question: "彼女は日本語が上手な（　　　）、英語も堪能だ。",
    choices: ["ばかりか", "ものの", "どころか", "ながら"],
    answer: 0,
    explanation: "〜ばかりか＝そのうえ。"
},
{
    question: "今さら後悔した（　　　）、結果は変わらない。",
    choices: ["ところで", "ところが", "ところを", "ところだった"],
    answer: 0,
    explanation: "〜たところで＝しても無駄。"
},
{
    question: "その本は一読に（　　　）。",
    choices: ["値する", "及ぶ", "足る", "限る"],
    answer: 0,
    explanation: "〜に値する＝読む価値がある。"
},
{
    question: "彼ほど努力する人は見たことがない（　　　）。",
    choices: ["ものだ", "ことだ", "ところだ", "わけだ"],
    answer: 0,
    explanation: "感嘆を表す。"
},
{
    question: "どれほど忙しくても健康管理を怠る（　　　）。",
    choices: ["べきではない", "ことはない", "ものだ", "はずだ"],
    answer: 0,
    explanation: "〜べきではない＝してはいけない。"
},
{
    question: "彼の発言は誤解を招き（　　　）。",
    choices: ["かねない", "かねる", "えない", "がたい"],
    answer: 0,
    explanation: "〜かねない＝悪い結果になる可能性。"
},
{
    question: "そう言われると、反論せずには（　　　）。",
    choices: ["いられない", "ならない", "おかない", "すまない"],
    answer: 0,
    explanation: "〜ずにはいられない。"
},
{
    question: "その話が本当だとしても、信じる（　　　）。",
    choices: ["わけにはいかない", "ことはない", "ほどではない", "ものだ"],
    answer: 0,
    explanation: "〜わけにはいかない＝簡単にはできない。"
},
{
    question: "彼は新人とは思えない（　　　）落ち着いている。",
    choices: ["ほど", "だけ", "ばかり", "しか"],
    answer: 0,
    explanation: "程度を強調する表現。"
},
{
    question: "景気は回復するどころか悪化する（　　　）だ。",
    choices: ["一方", "次第", "限り", "わけ"],
    answer: 0,
    explanation: "〜一方だ＝ますます。"
},
{
    question: "彼の立場に（　　　）、その判断も理解できる。",
    choices: ["してみれば", "しては", "したら", "しても"],
    answer: 0,
    explanation: "〜にしてみれば＝その立場からすると。"
},
{
    question: "こんな難しい仕事、私には引き受け（　　　）。",
    choices: ["かねる", "かねない", "うる", "きれる"],
    answer: 0,
    explanation: "〜かねる＝することが難しい。"
},
{
    question: "問題が起きてから慌てる（　　　）、事前に準備しておくべきだ。",
    choices: ["くらいなら", "ばかりに", "どころか", "おかげで"],
    answer: 0,
    explanation: "〜くらいなら＝むしろ。"
},
{
    question: "彼は多くの困難を乗り越えた（　　　）、今の成功がある。",
    choices: ["からこそ", "ばかりに", "どころか", "ものの"],
    answer: 0,
    explanation: "〜からこそ＝それが理由で。"
},
{
    question: "その話を聞く（　　　）、本当とは思えない。",
    choices: ["かぎり", "まで", "だけ", "うえ"],
    answer: 0,
    explanation: "〜限り＝〜から判断すると。"
},
{
    question: "彼女は忙しい（　　　）、いつも笑顔を忘れない。",
    choices: ["ながらも", "ばかりか", "のみならず", "だけに"],
    answer: 0,
    explanation: "〜ながらも＝〜にもかかわらず。"
},
{
    question: "その問題は議論する（　　　）もない。",
    choices: ["までも", "ほど", "だけ", "しか"],
    answer: 0,
    explanation: "〜までもない＝その必要がない。"
},
{
    question: "彼は反省する（　　　）、同じ失敗を繰り返している。",
    choices: ["どころか", "ばかりか", "ながら", "ものの"],
    answer: 0,
    explanation: "〜どころか＝それどころではなく。"
},
{
    question: "一歩間違えれば大事故になり（　　　）。",
    choices: ["かねない", "かねる", "えない", "がたい"],
    answer: 0,
    explanation: "〜かねない＝悪い結果になる可能性。"
},
{
    question: "その映画は何度見ても感動せずには（　　　）。",
    choices: ["いられない", "ならない", "おかない", "すまない"],
    answer: 0,
    explanation: "〜ずにはいられない。"
},
{
    question: "今となっては、あの時の決断は正しかったという（　　　）だ。",
    choices: ["ほかない", "しかない", "ばかりだ", "ものだ"],
    answer: 0,
    explanation: "〜ほかない＝他の見方がない。"
},
{
    question: "彼は新人に（　　　）、非常に落ち着いている。",
    choices: ["しては", "しても", "したら", "すると"],
    answer: 0,
    explanation: "〜にしては＝その立場としては。"
},
{
    question: "やると決めた（　　　）、最後までやり抜くつもりだ。",
    choices: ["以上", "限り", "だけ", "ほど"],
    answer: 0,
    explanation: "〜以上＝〜したからには。"
},
{
    question: "彼の努力には敬服せざるを（　　　）。",
    choices: ["得ない", "しない", "ならない", "いられない"],
    answer: 0,
    explanation: "〜ざるを得ない＝そうするしかない。"
},
{
    question: "そんな無責任な発言は許される（　　　）がない。",
    choices: ["わけ", "もの", "こと", "はず"],
    answer: 0,
    explanation: "〜わけがない＝あり得ない。"
},
{
    question: "彼女は歌が上手な（　　　）、ダンスも得意だ。",
    choices: ["うえに", "ものの", "どころか", "ながら"],
    answer: 0,
    explanation: "〜うえに＝さらに。"
},
{
    question: "その商品は高価な（　　　）、品質も高い。",
    choices: ["だけに", "ものの", "どころか", "かわりに"],
    answer: 0,
    explanation: "〜だけに＝その分。"
},
{
    question: "いくら説明されても納得できる（　　　）。",
    choices: ["ものではない", "ことはない", "わけではない", "はずはない"],
    answer: 0,
    explanation: "強い否定表現。"
},
{
    question: "彼の説明を聞く（　　　）、誤解があったようだ。",
    choices: ["ところでは", "ところを", "ところが", "ところで"],
    answer: 0,
    explanation: "〜ところでは＝聞いた範囲では。"
},
{
    question: "そんな大変な仕事、私にはでき（　　　）。",
    choices: ["そうもない", "ようもない", "こともない", "はずもない"],
    answer: 0,
    explanation: "〜そうもない＝できそうにない。"
},
{
    question: "彼は留学経験がある（　　　）、発音が自然だ。",
    choices: ["だけあって", "ばかりに", "どころか", "ものの"],
    answer: 0,
    explanation: "〜だけあって＝期待どおり。"
},
{
    question: "会議は予定どおり行われる（　　　）。",
    choices: ["ことになっている", "ものになっている", "わけになっている", "はずになっている"],
    answer: 0,
    explanation: "決まり・予定を表す。"
},
{
    question: "その成功は皆の努力の結果にほかなら（　　　）。",
    choices: ["ない", "ぬ", "ず", "まい"],
    answer: 0,
    explanation: "〜にほかならない＝まさに〜だ。"
},
{
    question: "彼は経験が浅い（　　　）、重要な仕事を任されている。",
    choices: ["にもかかわらず", "おかげで", "せいで", "ために"],
    answer: 0,
    explanation: "〜にもかかわらず＝〜なのに。"
},
{
    question: "その案は魅力的な（　　　）、実現は難しい。",
    choices: ["ものの", "ばかりか", "のみならず", "だけに"],
    answer: 0,
    explanation: "〜ものの＝しかし。"
},
{
    question: "彼は留学経験がある（　　　）、外国人との会話が自然だ。",
    choices: ["だけあって", "ばかりに", "どころか", "ものの"],
    answer: 0,
    explanation: "〜だけあって＝期待どおり。"
},
{
    question: "どんなに反対されようと、この計画を実行する（　　　）だ。",
    choices: ["まで", "もの", "だけ", "はず"],
    answer: 0,
    explanation: "〜までだ＝そうするしかない。"
},
{
    question: "そんな危険なことは子供（　　　）分かる。",
    choices: ["でさえ", "だけ", "ほど", "ばかり"],
    answer: 0,
    explanation: "〜でさえ＝〜ですら。"
},
{
    question: "彼の努力には感心する（　　　）がある。",
    choices: ["もの", "こと", "ため", "だけ"],
    answer: 0,
    explanation: "〜ものがある＝強くそう感じる。"
},
{
    question: "失敗した以上、責任を取らずには（　　　）。",
    choices: ["すまない", "いられない", "ならない", "おかない"],
    answer: 0,
    explanation: "〜ずにはすまない。"
},
{
    question: "今さら後悔した（　　　）、どうにもならない。",
    choices: ["ところで", "ところが", "ところを", "ところだった"],
    answer: 0,
    explanation: "〜たところで＝しても無駄。"
},
{
    question: "その作品は一見の価値がある。つまり一見に（　　　）。",
    choices: ["値する", "及ぶ", "足る", "限る"],
    answer: 0,
    explanation: "〜に値する＝価値がある。"
},
{
    question: "彼は謝るどころか、反省の色（　　　）見せなかった。",
    choices: ["さえ", "だけ", "こそ", "ほど"],
    answer: 0,
    explanation: "〜どころか〜さえ。"
},
{
    question: "どれほど努力しても成功する（　　　）。",
    choices: ["とは限らない", "に違いない", "はずだ", "ものだ"],
    answer: 0,
    explanation: "必ずしもそうとは限らない。"
},
{
    question: "そんなことを言おう（　　　）、皆に反対されるだろう。",
    choices: ["ものなら", "ものの", "ものを", "ものだから"],
    answer: 0,
    explanation: "〜ようものなら＝もし〜したら。"
},
{
    question: "彼は責任者である（　　　）、最後までやり遂げなければならない。",
    choices: ["からには", "だけに", "ばかりに", "どころか"],
    answer: 0,
    explanation: "〜からには＝その立場なら当然。"
},
{
    question: "この仕事は私には難しくて引き受け（　　　）。",
    choices: ["かねる", "かねない", "うる", "きれる"],
    answer: 0,
    explanation: "〜かねる＝できない。"
},
{
    question: "彼の発言は誤解を招き（　　　）。",
    choices: ["かねない", "かねる", "えない", "がたい"],
    answer: 0,
    explanation: "〜かねない＝悪い結果になる可能性。"
},
{
    question: "彼女は歌が上手な（　　　）、ピアノも得意だ。",
    choices: ["うえに", "ものの", "どころか", "ながら"],
    answer: 0,
    explanation: "〜うえに＝さらに。"
},
{
    question: "問題が起こってから慌てる（　　　）、事前に準備した方がいい。",
    choices: ["くらいなら", "ばかりに", "どころか", "おかげで"],
    answer: 0,
    explanation: "〜くらいなら＝むしろ。"
},
{
    question: "学生である（　　　）、勉強を最優先すべきだ。",
    choices: ["以上", "だけ", "ほど", "もの"],
    answer: 0,
    explanation: "〜以上＝〜なのだから。"
},
{
    question: "その説明を聞く（　　　）、計画は順調らしい。",
    choices: ["かぎり", "だけ", "あまり", "まで"],
    answer: 0,
    explanation: "〜限り＝〜から判断すると。"
},
{
    question: "問題について再検討する（　　　）がある。",
    choices: ["余地", "恐れ", "結果", "末"],
    answer: 0,
    explanation: "〜余地がある＝検討の可能性がある。"
},
{
    question: "彼は経験豊富な（　　　）、判断が的確だ。",
    choices: ["だけあって", "ばかりに", "ものの", "どころか"],
    answer: 0,
    explanation: "〜だけあって＝その評価にふさわしく。"
},
{
    question: "いくら忙しい（　　　）、健康には気をつけなければならない。",
    choices: ["といっても", "ものの", "ところで", "あまり"],
    answer: 0,
    explanation: "〜といっても＝そうではあっても。"
},
{
    question: "彼の話は理解できない（　　　）でもない。",
    choices: ["わけ", "もの", "こと", "はず"],
    answer: 0,
    explanation: "〜ないわけでもない＝完全には否定しない。"
},
{
    question: "その映画は期待した（　　　）素晴らしかった。",
    choices: ["以上に", "だけに", "ほど", "ばかりに"],
    answer: 0,
    explanation: "期待以上に＝期待を超えて。"
},
{
    question: "そんな危険な行為は許される（　　　）がない。",
    choices: ["わけ", "もの", "こと", "はず"],
    answer: 0,
    explanation: "〜わけがない＝絶対にあり得ない。"
},
{
    question: "どんな困難があろう（　　　）、最後まで頑張る。",
    choices: ["とも", "ものの", "ながら", "から"],
    answer: 0,
    explanation: "〜ようとも＝たとえ〜でも。"
},
{
    question: "彼女は親切な（　　　）、責任感も強い。",
    choices: ["うえに", "ものの", "どころか", "ながら"],
    answer: 0,
    explanation: "〜うえに＝さらに。"
},
{
    question: "その話は聞いたことがある（　　　）気がする。",
    choices: ["ような", "そうな", "みたいな", "らしい"],
    answer: 0,
    explanation: "ような気がする。"
},
{
    question: "彼は謝る（　　　）、反省すらしていない。",
    choices: ["どころか", "ばかりか", "ながら", "ものの"],
    answer: 0,
    explanation: "〜どころか＝それどころではなく。"
},
{
    question: "この問題は私には難しすぎて理解でき（　　　）。",
    choices: ["そうにない", "ようにない", "ことにない", "はずにない"],
    answer: 0,
    explanation: "〜そうにない＝できそうにない。"
},
{
    question: "彼の成功は努力の結果（　　　）。",
    choices: ["に相違ない", "にすぎない", "に限らない", "に応じない"],
    answer: 0,
    explanation: "〜に相違ない＝間違いない。"
},
{
    question: "この本は何度読んでも読み飽きる（　　　）。",
    choices: ["ことがない", "わけがない", "ものがない", "ほどがない"],
    answer: 0,
    explanation: "〜ことがない＝そういうことはない。"
},
{
    question: "今さら文句を言った（　　　）、何も変わらない。",
    choices: ["ところで", "ところが", "ところを", "ところなら"],
    answer: 0,
    explanation: "〜たところで＝無意味。"
},
{
    question: "彼は責任者という立場（　　　）、慎重に発言している。",
    choices: ["だけに", "ばかりに", "どころか", "かわりに"],
    answer: 0,
    explanation: "〜だけに＝その立場なので。"
},
{
    question: "そんなことは今さら説明する（　　　）ない。",
    choices: ["までも", "ほど", "だけ", "しか"],
    answer: 0,
    explanation: "〜までもない。"
},
{
    question: "彼女は日本語は（　　　）、英語も話せる。",
    choices: ["もちろん", "どころか", "ものの", "だけに"],
    answer: 0,
    explanation: "もちろん〜も。"
},
{
    question: "一生懸命努力した。しかし結果は出なかった。（　　　）悔しい。",
    choices: ["それだけに", "そればかりか", "それどころか", "それゆえ"],
    answer: 0,
    explanation: "努力した分だけ悔しい。"
},
{
    question: "彼ほどの選手（　　　）、ミスをすることがある。",
    choices: ["といえども", "ばかりに", "おかげで", "ものだから"],
    answer: 0,
    explanation: "〜といえども＝たとえ〜でも。"
},
{
    question: "その仕事は今日中に終わらせる（　　　）。",
    choices: ["つもりだ", "ようだ", "らしい", "そうだ"],
    answer: 0,
    explanation: "意志表現。"
},
{
    question: "この問題については改めて検討する（　　　）がある。",
    choices: ["余地", "恐れ", "結果", "末"],
    answer: 0,
    explanation: "検討の余地がある。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n最近はスマートフォンで何でも調べられるため、辞書を使う人が減ったと言われている。しかし、辞書には関連語や用例なども掲載されており、一つの言葉を深く理解するのに役立つ。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "辞書はもう必要ない",
        "辞書にはスマートフォンにない利点がある",
        "スマートフォンの情報は間違いが多い",
        "関連語を覚える必要はない"
    ],
    answer: 1,
    explanation: "辞書には言葉を深く理解するための利点があると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n失敗を恐れて何もしなければ、大きな失敗は避けられるかもしれない。しかし、新しい経験や成長の機会も失うことになる。\n\n筆者が言いたいことは何か。",
    choices: [
        "失敗は絶対に避けるべきだ",
        "行動しない方が安全だ",
        "成長には挑戦が必要だ",
        "経験より結果が大切だ"
    ],
    answer: 2,
    explanation: "挑戦しなければ成長の機会を失うと述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nある店ではレジ袋を有料化した。その結果、買い物袋を持参する客が増え、ごみの削減につながった。\n\n有料化の結果として正しいものはどれか。",
    choices: [
        "客が減った",
        "ごみが増えた",
        "買い物袋を持参する人が増えた",
        "商品の価格が下がった"
    ],
    answer: 2,
    explanation: "本文にそのまま書かれている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n健康のためには運動だけでなく、十分な睡眠も重要である。毎日忙しくても、睡眠時間を削り続けるのはよくない。\n\n筆者の主張はどれか。",
    choices: [
        "運動だけで十分だ",
        "睡眠より仕事が大事だ",
        "睡眠も健康維持に必要だ",
        "忙しい人は寝なくてよい"
    ],
    answer: 2,
    explanation: "運動だけでなく睡眠も重要と述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n日本では近年、外国人観光客が増えている。そのため、多言語対応の案内表示を増やす取り組みが行われている。\n\n多言語対応が進められている理由は何か。",
    choices: [
        "日本人観光客が減ったから",
        "外国人観光客が増えたから",
        "案内表示が古いから",
        "観光地が減ったから"
    ],
    answer: 1,
    explanation: "外国人観光客の増加が理由。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n読書は知識を得るだけでなく、さまざまな考え方に触れる機会にもなる。\n\n読書の効果として述べられているものはどれか。",
    choices: [
        "運動能力の向上",
        "考え方の幅が広がる",
        "記憶力だけが上がる",
        "友人が必ず増える"
    ],
    answer: 1,
    explanation: "さまざまな考え方に触れる機会になる。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n新入社員研修は、会社のルールを学ぶだけでなく、社員同士の交流を深める役割もある。\n\n研修の目的に含まれるものはどれか。",
    choices: [
        "売上を増やすこと",
        "交流を深めること",
        "給料を上げること",
        "転職を支援すること"
    ],
    answer: 1,
    explanation: "社員同士の交流を深める役割がある。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n天気予報では晴れと言われていたが、午後から急に雨が降り出した。\n\n実際の天気はどうだったか。",
    choices: [
        "一日中晴れだった",
        "午後から雨が降った",
        "朝から雪だった",
        "強風だけだった"
    ],
    answer: 1,
    explanation: "午後から急に雨が降り出した。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n会議では参加者全員の意見を聞いたうえで、最終的な結論を出した。\n\n会議の進め方として正しいものはどれか。",
    choices: [
        "一人だけの意見で決めた",
        "意見を聞かずに決めた",
        "全員の意見を聞いて決めた",
        "結論を出さなかった"
    ],
    answer: 2,
    explanation: "参加者全員の意見を聞いたとある。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n最近は在宅勤務が普及し、通勤時間を有効活用できるようになった。一方で、社員同士の直接的な交流が減ったという指摘もある。\n\n筆者が述べていることはどれか。",
    choices: [
        "在宅勤務には利点と課題の両方がある",
        "在宅勤務はやめるべきだ",
        "通勤時間は必要だ",
        "交流は仕事に関係ない"
    ],
    answer: 0,
    explanation: "利点（通勤時間削減）と課題（交流減少）の両方を述べている。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【図書館からのお知らせ】\n蔵書点検のため、10月10日から10月15日まで休館します。返却ポストは利用できますが、本の貸し出しはできません。\n\n休館中にできることは何ですか。",
    choices: [
        "本を借りる",
        "本を返却する",
        "新規登録をする",
        "館内で勉強する"
    ],
    answer: 1,
    explanation: "返却ポストは利用できると書かれている。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【バス運休のお知らせ】\n台風接近のため、本日午後3時以降の全便を運休します。\n\n正しいものはどれですか。",
    choices: [
        "全便が終日運休",
        "午後3時以降は運休",
        "午前中のみ運休",
        "通常運行"
    ],
    answer: 1,
    explanation: "午後3時以降の全便が運休。"
},
{
    question: "次の広告を読んで答えなさい。\n\n【スポーツジム入会キャンペーン】\n今月中に入会した方は入会金無料。\n\n特典を受ける条件は何ですか。",
    choices: [
        "来月入会する",
        "今年中に入会する",
        "今月中に入会する",
        "家族で入会する"
    ],
    answer: 2,
    explanation: "今月中の入会が条件。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【会議のお知らせ】\n会議は14時から第2会議室で行います。資料は各自持参してください。\n\n参加者がしなければならないことは何ですか。",
    choices: [
        "資料を持参する",
        "昼食を準備する",
        "30分前に集合する",
        "発表する"
    ],
    answer: 0,
    explanation: "資料は各自持参とある。"
},
{
    question: "次のメールを読んで答えなさい。\n\n田中さん\n明日の打ち合わせですが、急用のため15時から16時に変更をお願いします。\n\n何が変更されましたか。",
    choices: [
        "場所",
        "参加者",
        "時間",
        "内容"
    ],
    answer: 2,
    explanation: "15時から16時に変更とある。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【電気設備点検】\n11月1日午前9時から11時まで停電します。\n\n停電時間は何時間ですか。",
    choices: [
        "1時間",
        "2時間",
        "3時間",
        "4時間"
    ],
    answer: 1,
    explanation: "9時〜11時なので2時間。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【忘れ物センター】\n保管期間は1か月です。期限を過ぎたものは処分します。\n\n忘れ物はいつまで保管されますか。",
    choices: [
        "2週間",
        "3週間",
        "1か月",
        "2か月"
    ],
    answer: 2,
    explanation: "保管期間は1か月。"
},
{
    question: "次の広告を読んで答えなさい。\n\n【オンライン講座】\n申込締切は5月20日です。定員になり次第締め切ります。\n\n正しいものはどれですか。",
    choices: [
        "5月20日後でも必ず申込可能",
        "定員になれば早く締切になる",
        "人数制限はない",
        "締切日は未定"
    ],
    answer: 1,
    explanation: "定員になり次第締切。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【レストラン営業時間変更】\n平日は22時閉店、土日は23時閉店になります。\n\n土日の閉店時間は何時ですか。",
    choices: [
        "21時",
        "22時",
        "23時",
        "24時"
    ],
    answer: 2,
    explanation: "土日は23時閉店。"
},
{
    question: "次の短文を読んで答えなさい。\n\n最近は電子書籍を利用する人が増えている。その理由として、場所を取らず、多くの本を持ち運べることが挙げられる。\n\n電子書籍の利点は何ですか。",
    choices: [
        "価格が必ず安い",
        "場所を取らない",
        "紙より読みやすい",
        "電気が不要"
    ],
    answer: 1,
    explanation: "本文では場所を取らず持ち運びやすい点が利点として述べられている。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：資料提出について\n\n山田さん\n会議で使用する資料は、会議前日の17時までに提出してください。17時以降に提出された場合は、印刷できない可能性があります。\n\n資料はいつまでに提出しなければなりませんか。",
    choices: [
        "会議当日の17時まで",
        "会議前日の17時まで",
        "会議の1週間前まで",
        "会議開始前まで"
    ],
    answer: 1,
    explanation: "会議前日の17時までと書かれている。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：研修会場の変更\n\n来週の研修は第1会議室ではなく、第3会議室で行います。開始時間に変更はありません。\n\n変更されたものは何ですか。",
    choices: [
        "開始時間",
        "研修内容",
        "会場",
        "参加者"
    ],
    answer: 2,
    explanation: "会場のみ変更されている。"
},
{
    question: "次の連絡文を読んで答えなさい。\n\n【社員旅行について】\n参加希望者は今週金曜日までに申込書を提出してください。\n\n何をしなければなりませんか。",
    choices: [
        "旅行代金を支払う",
        "申込書を提出する",
        "パスポートを取得する",
        "宿泊先を予約する"
    ],
    answer: 1,
    explanation: "申込書の提出が必要。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：商品の発送\n\nご注文の商品を本日発送いたしました。到着予定日は10月15日です。\n\n商品はいつ届く予定ですか。",
    choices: [
        "本日",
        "10月14日",
        "10月15日",
        "10月16日"
    ],
    answer: 2,
    explanation: "到着予定日は10月15日。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【健康診断のお知らせ】\n健康診断当日は朝食を取らずに来てください。\n\n受診者はどうするべきですか。",
    choices: [
        "朝食を食べる",
        "昼食を食べる",
        "朝食を取らない",
        "何もしなくてよい"
    ],
    answer: 2,
    explanation: "朝食を取らずに来るよう案内されている。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：会議欠席のお詫び\n\n本日の会議ですが、体調不良のため欠席いたします。\n\nメールを書いた人はどうしますか。",
    choices: [
        "会議に参加する",
        "会議を延期する",
        "会議を欠席する",
        "会議を中止する"
    ],
    answer: 2,
    explanation: "体調不良のため欠席すると書かれている。"
},
{
    question: "次の連絡を読んで答えなさい。\n\n【社内システム停止】\nメンテナンスのため、日曜日の午前1時から午前4時まで利用できません。\n\nシステムは何時間停止しますか。",
    choices: [
        "2時間",
        "3時間",
        "4時間",
        "5時間"
    ],
    answer: 1,
    explanation: "1時から4時までなので3時間。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：お礼\n\n先日はご協力いただき、ありがとうございました。おかげさまで無事にイベントを終了できました。\n\nこのメールの目的は何ですか。",
    choices: [
        "依頼",
        "謝罪",
        "感謝",
        "報告"
    ],
    answer: 2,
    explanation: "協力への感謝を伝えている。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【講演会】\n参加は無料ですが、事前予約が必要です。\n\n講演会に参加するには何が必要ですか。",
    choices: [
        "参加費",
        "推薦状",
        "事前予約",
        "会員登録"
    ],
    answer: 2,
    explanation: "事前予約が必要。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：納期変更のお知らせ\n\n生産の遅れにより、納品日を10月20日に変更させていただきます。\n\n何が変更されましたか。",
    choices: [
        "価格",
        "数量",
        "納品日",
        "担当者"
    ],
    answer: 2,
    explanation: "納品日が10月20日に変更された。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【市民プールのお知らせ】\n施設点検のため、7月5日は終日利用できません。\n\n7月5日はどうなりますか。",
    choices: [
        "午前のみ利用できる",
        "午後のみ利用できる",
        "終日利用できない",
        "通常営業する"
    ],
    answer: 2,
    explanation: "施設点検のため終日利用できない。"
},
{
    question: "次の掲示を読んで答えなさい。\n\n【駐車場工事】\n工事期間中は第1駐車場をご利用ください。\n\n利用すべき駐車場はどれですか。",
    choices: [
        "第1駐車場",
        "第2駐車場",
        "第3駐車場",
        "利用できない"
    ],
    answer: 0,
    explanation: "第1駐車場を利用するよう案内されている。"
},
{
    question: "次の広告を読んで答えなさい。\n\n【夏のセール】\n全商品20％割引。ただし書籍は対象外です。\n\n割引にならないものは何ですか。",
    choices: [
        "衣類",
        "家電",
        "雑貨",
        "書籍"
    ],
    answer: 3,
    explanation: "書籍は対象外。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【スポーツ大会】\n雨天の場合は翌日に延期します。\n\n雨の場合はどうなりますか。",
    choices: [
        "中止になる",
        "翌日に延期する",
        "予定どおり行う",
        "時間だけ変更する"
    ],
    answer: 1,
    explanation: "雨天の場合は翌日に延期。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【図書館利用案内】\n本は1人5冊まで、2週間借りることができます。\n\n何冊借りられますか。",
    choices: [
        "2冊",
        "3冊",
        "5冊",
        "10冊"
    ],
    answer: 2,
    explanation: "1人5冊まで。"
},
{
    question: "次の掲示を読んで答えなさい。\n\n【エレベーター点検】\n午前10時から正午まで停止します。\n\nエレベーターは何時間停止しますか。",
    choices: [
        "1時間",
        "2時間",
        "3時間",
        "4時間"
    ],
    answer: 1,
    explanation: "10時から12時までで2時間。"
},
{
    question: "次の広告を読んで答えなさい。\n\n【英会話教室】\n初回体験レッスン無料。\n\n無料になるのは何ですか。",
    choices: [
        "入会金",
        "教材費",
        "初回レッスン",
        "月謝"
    ],
    answer: 2,
    explanation: "初回体験レッスンが無料。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【イベント参加者募集】\n定員は50名です。応募多数の場合は抽選になります。\n\n応募者が多い場合はどうなりますか。",
    choices: [
        "全員参加できる",
        "先着順になる",
        "抽選になる",
        "中止になる"
    ],
    answer: 2,
    explanation: "応募多数の場合は抽選。"
},
{
    question: "次の掲示を読んで答えなさい。\n\n【年末年始休業】\n12月29日から1月3日まで休業します。\n\n営業再開日はいつですか。",
    choices: [
        "1月1日",
        "1月3日",
        "1月4日",
        "1月5日"
    ],
    answer: 2,
    explanation: "1月4日から営業再開。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【文化講演会】\n参加費は無料ですが、事前申し込みが必要です。\n\n参加するために必要なことは何ですか。",
    choices: [
        "参加費を払う",
        "事前申し込みをする",
        "紹介状を持参する",
        "会員になる"
    ],
    answer: 1,
    explanation: "事前申し込みが必要。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【市民講座のご案内】\n講座は午後2時から4時まで開催されます。参加費は無料ですが、事前申し込みが必要です。\n\n参加するために必要なことは何ですか。",
    choices: [
        "参加費を払う",
        "事前申し込みをする",
        "学生証を持参する",
        "会員になる"
    ],
    answer: 1,
    explanation: "参加費は無料だが、事前申し込みが必要。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【電車遅延のお知らせ】\n人身事故の影響で、全線で約20分の遅れが出ています。\n\n現在の状況はどれですか。",
    choices: [
        "運転見合わせ",
        "通常運行",
        "約20分遅れている",
        "運休している"
    ],
    answer: 2,
    explanation: "約20分の遅れが出ている。"
},
{
    question: "次の広告を読んで答えなさい。\n\n【新規会員募集】\n今月中に入会された方には、500円分の商品券をプレゼントします。\n\n特典は何ですか。",
    choices: [
        "図書カード",
        "商品券",
        "無料入場券",
        "ポイントカード"
    ],
    answer: 1,
    explanation: "500円分の商品券がもらえる。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【博物館休館日】\n毎週月曜日は休館です。ただし祝日の場合は開館し、翌日休館します。\n\n月曜日が祝日の場合はどうなりますか。",
    choices: [
        "休館する",
        "開館する",
        "午後だけ開館する",
        "無料開館する"
    ],
    answer: 1,
    explanation: "祝日の場合は開館する。"
},
{
    question: "次の掲示を読んで答えなさい。\n\n【体育館利用について】\n室内シューズを持参してください。持っていない方は利用できません。\n\n利用に必要なものは何ですか。",
    choices: [
        "帽子",
        "学生証",
        "室内シューズ",
        "タオル"
    ],
    answer: 2,
    explanation: "室内シューズが必要。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【忘れ物のお知らせ】\n受付で預かっていますので、身分証明書を持って受け取りに来てください。\n\n忘れ物を受け取る際に必要なものは何ですか。",
    choices: [
        "印鑑",
        "会員証",
        "身分証明書",
        "現金"
    ],
    answer: 2,
    explanation: "身分証明書が必要。"
},
{
    question: "次の広告を読んで答えなさい。\n\n【パンフェア開催】\n午前10時までに来店された方にはコーヒーを無料サービスします。\n\n無料になるものは何ですか。",
    choices: [
        "パン",
        "サンドイッチ",
        "コーヒー",
        "ケーキ"
    ],
    answer: 2,
    explanation: "コーヒーが無料。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【図書館利用時間変更】\n来月から平日の閉館時間は午後8時になります。\n\n何が変更されますか。",
    choices: [
        "開館日",
        "入館料",
        "閉館時間",
        "貸出冊数"
    ],
    answer: 2,
    explanation: "閉館時間が変更される。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【市民マラソン】\n参加希望者は9月30日までにインターネットで申し込んでください。\n\n申込方法は何ですか。",
    choices: [
        "電話",
        "郵送",
        "窓口",
        "インターネット"
    ],
    answer: 3,
    explanation: "インターネットで申し込む。"
},
{
    question: "次の短文を読んで答えなさい。\n\n最近は動画で学習する人が増えている。その理由は、短時間で内容を理解しやすいからである。\n\n動画学習の利点は何ですか。",
    choices: [
        "必ず無料である",
        "短時間で理解しやすい",
        "読書が不要になる",
        "試験が簡単になる"
    ],
    answer: 1,
    explanation: "短時間で内容を理解しやすいことが理由。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【市立美術館 特別展】\n特別展開催期間中は、通常料金に加えて特別展入場料が必要です。ただし、高校生以下は無料です。\n\n高校生が特別展を見る場合、どうなりますか。",
    choices: [
        "通常料金だけ払う",
        "特別展料金だけ払う",
        "無料で入場できる",
        "入場できない"
    ],
    answer: 2,
    explanation: "高校生以下は無料と書かれている。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【自習室利用案内】\n土曜日は午後6時まで利用できます。日曜日は閉室です。\n\n日曜日はどうなっていますか。",
    choices: [
        "午後6時まで利用可能",
        "終日利用可能",
        "閉室",
        "午前のみ利用可能"
    ],
    answer: 2,
    explanation: "日曜日は閉室と書かれている。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【ランニング大会】\n参加者は当日午前8時30分までに受付を済ませてください。\n\n参加者はいつまでに受付を済ませる必要がありますか。",
    choices: [
        "午前8時",
        "午前8時30分",
        "午前9時",
        "午前9時30分"
    ],
    answer: 1,
    explanation: "午前8時30分までに受付を済ませる必要がある。"
},
{
    question: "次の広告を読んで答えなさい。\n\n【旅行予約キャンペーン】\n2名以上で申し込むと旅行代金が10％割引になります。\n\n割引を受ける条件は何ですか。",
    choices: [
        "1名で申し込む",
        "学生である",
        "2名以上で申し込む",
        "平日に出発する"
    ],
    answer: 2,
    explanation: "2名以上で申し込むと10％割引。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【会社説明会】\n説明会終了後に質疑応答の時間があります。\n\n説明会の後にあるものは何ですか。",
    choices: [
        "試験",
        "面接",
        "質疑応答",
        "懇親会"
    ],
    answer: 2,
    explanation: "終了後に質疑応答の時間がある。"
},
{
    question: "次の短文を読んで答えなさい。\n\n最近は多くの人がネット通販を利用している。その理由の一つは、自宅にいながら買い物ができることである。\n\nネット通販の利点として述べられているものは何ですか。",
    choices: [
        "商品が必ず安い",
        "店員と相談できる",
        "自宅で買い物できる",
        "返品が不要"
    ],
    answer: 2,
    explanation: "自宅にいながら買い物ができること。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【駐輪場利用について】\n長期間放置された自転車は撤去する場合があります。\n\n何が撤去される可能性がありますか。",
    choices: [
        "自動車",
        "放置された自転車",
        "バイク",
        "ヘルメット"
    ],
    answer: 1,
    explanation: "長期間放置された自転車が対象。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【講座申込】\n申込者が定員を超えた場合は抽選を行います。\n\n定員を超えたらどうなりますか。",
    choices: [
        "先着順になる",
        "抽選になる",
        "全員参加できる",
        "講座が中止になる"
    ],
    answer: 1,
    explanation: "定員を超えた場合は抽選。"
},
{
    question: "次の掲示を読んで答えなさい。\n\n【喫煙について】\n館内は全面禁煙です。喫煙は指定の場所でお願いします。\n\n館内ではどうするべきですか。",
    choices: [
        "自由に喫煙する",
        "指定場所以外で喫煙する",
        "喫煙してはいけない",
        "窓の近くで喫煙する"
    ],
    answer: 2,
    explanation: "館内は全面禁煙。"
},
{
    question: "次の短文を読んで答えなさい。\n\nある会社では、会議の時間を短くしたところ、仕事に集中できる時間が増えたという。\n\n会議時間を短くした結果は何ですか。",
    choices: [
        "会議が増えた",
        "仕事に集中する時間が増えた",
        "社員が減った",
        "残業が増えた"
    ],
    answer: 1,
    explanation: "仕事に集中できる時間が増えたと書かれている。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：資料の確認について\n\n明日の会議で使用する資料を添付しました。内容をご確認のうえ、修正点があれば本日18時までにご連絡ください。\n\n受信者は何をする必要がありますか。",
    choices: [
        "資料を印刷する",
        "会議を中止する",
        "資料を確認する",
        "資料を配布する"
    ],
    answer: 2,
    explanation: "資料を確認し、必要なら18時までに連絡する。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：研修参加のお願い\n\n来週実施される新人研修には、入社1年未満の社員全員が参加してください。\n\n誰が参加しなければなりませんか。",
    choices: [
        "全社員",
        "管理職",
        "入社1年未満の社員",
        "希望者のみ"
    ],
    answer: 2,
    explanation: "入社1年未満の社員全員が対象。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【社員食堂】\n設備点検のため、明日は昼食のみ営業します。\n\n明日の社員食堂はどうなりますか。",
    choices: [
        "終日営業",
        "昼食のみ営業",
        "夕食のみ営業",
        "休業"
    ],
    answer: 1,
    explanation: "昼食のみ営業すると書かれている。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【駐車場利用変更】\n工事のため第2駐車場は利用できません。第1駐車場をご利用ください。\n\n利用できない駐車場はどれですか。",
    choices: [
        "第1駐車場",
        "第2駐車場",
        "第3駐車場",
        "全て利用可能"
    ],
    answer: 1,
    explanation: "第2駐車場は利用できない。"
},
{
    question: "次の短文を読んで答えなさい。\n\n最近では、オンライン会議を利用する企業が増えている。その理由は、移動時間を削減できるからである。\n\n企業がオンライン会議を利用する理由は何ですか。",
    choices: [
        "会議室が不要になるから",
        "移動時間を減らせるから",
        "参加人数が減るから",
        "費用が必ず無料だから"
    ],
    answer: 1,
    explanation: "移動時間の削減が理由。"
},
{
    question: "次の掲示を読んで答えなさい。\n\n【会員更新のお知らせ】\n更新手続きは今月末までです。期限を過ぎると再登録が必要になります。\n\n期限後はどうなりますか。",
    choices: [
        "自動更新される",
        "無料延長される",
        "再登録が必要になる",
        "会費が半額になる"
    ],
    answer: 2,
    explanation: "再登録が必要になる。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：会議資料送付\n\n資料は添付ファイルをご確認ください。当日は印刷してご持参ください。\n\n参加者は当日どうする必要がありますか。",
    choices: [
        "資料を作成する",
        "資料を印刷して持参する",
        "資料を返信する",
        "資料を削除する"
    ],
    answer: 1,
    explanation: "印刷して持参するよう求められている。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【市民講座】\n定員は30名です。先着順で受け付けます。\n\n30名を超えた場合どうなりますか。",
    choices: [
        "抽選になる",
        "全員参加できる",
        "受付終了になる",
        "追加開催される"
    ],
    answer: 2,
    explanation: "先着順なので定員到達で受付終了。"
},
{
    question: "次の短文を読んで答えなさい。\n\n健康維持には運動だけでなく、規則正しい食生活も重要だ。\n\n筆者の考えとして正しいものはどれですか。",
    choices: [
        "運動だけで十分",
        "食事だけで十分",
        "運動と食事の両方が大切",
        "睡眠だけが重要"
    ],
    answer: 2,
    explanation: "運動だけでなく食生活も重要。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【図書館イベント】\n参加費は無料ですが、事前予約者を優先します。\n\n優先されるのは誰ですか。",
    choices: [
        "当日参加者",
        "学生",
        "事前予約者",
        "高齢者"
    ],
    answer: 2,
    explanation: "事前予約者を優先するとある。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：会議開始時間変更\n\n参加者各位\n会議は13時開始の予定でしたが、準備の都合により14時開始に変更します。\n\n何が変更されましたか。",
    choices: [
        "会議室",
        "開始時間",
        "参加者",
        "会議内容"
    ],
    answer: 1,
    explanation: "13時開始から14時開始へ変更された。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【パソコン講習会】\n募集人数は20名です。応募者が20名を超えた場合は抽選を行います。\n\n応募者が25名の場合はどうなりますか。",
    choices: [
        "全員参加できる",
        "先着順になる",
        "抽選になる",
        "募集を中止する"
    ],
    answer: 2,
    explanation: "20名を超えた場合は抽選を行う。"
},
{
    question: "次の短文を読んで答えなさい。\n\n最近は電子決済を利用する人が増えている。その理由は、現金を持ち歩かなくても支払いができるからである。\n\n電子決済の利点は何ですか。",
    choices: [
        "現金が必要ない",
        "値段が安くなる",
        "買い物時間が長くなる",
        "機械が不要になる"
    ],
    answer: 0,
    explanation: "現金を持ち歩かなくても支払いができる。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【スポーツセンター】\n18歳未満の利用者は保護者の同意書が必要です。\n\n18歳未満の人に必要なものは何ですか。",
    choices: [
        "学生証",
        "会員証",
        "保護者の同意書",
        "健康診断書"
    ],
    answer: 2,
    explanation: "保護者の同意書が必要。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：出張報告\n\n本日の訪問先との打ち合わせは無事終了しました。詳細は来週の会議で報告します。\n\n詳細な報告はいつ行われますか。",
    choices: [
        "本日",
        "明日",
        "来週の会議",
        "来月"
    ],
    answer: 2,
    explanation: "来週の会議で報告すると書かれている。"
},
{
    question: "次の掲示を読んで答えなさい。\n\n【エアコン点検】\n点検中は冷房が使用できません。\n\n点検中にできないことは何ですか。",
    choices: [
        "照明を使う",
        "冷房を使う",
        "机を使う",
        "パソコンを使う"
    ],
    answer: 1,
    explanation: "冷房が使用できない。"
},
{
    question: "次の短文を読んで答えなさい。\n\n運動を習慣にするためには、無理な目標を立てるより、続けられる範囲で始めることが大切だ。\n\n筆者の考えはどれですか。",
    choices: [
        "最初から高い目標を立てるべきだ",
        "続けられる範囲で始めるべきだ",
        "運動は必要ない",
        "目標は立てなくてよい"
    ],
    answer: 1,
    explanation: "無理なく続けることが大切だと述べている。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【図書返却期限】\n返却期限を過ぎると、新たな貸し出しができなくなります。\n\n期限を過ぎるとどうなりますか。",
    choices: [
        "延長できる",
        "無料になる",
        "新たに借りられない",
        "返却不要になる"
    ],
    answer: 2,
    explanation: "新たな貸し出しができなくなる。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【交流会】\n開始は19時です。受付は18時30分から行います。\n\n受付開始は何時ですか。",
    choices: [
        "18時",
        "18時30分",
        "19時",
        "19時30分"
    ],
    answer: 1,
    explanation: "受付は18時30分開始。"
},
{
    question: "次の短文を読んで答えなさい。\n\nある会社では紙の資料を減らし、データ化を進めた。その結果、保管場所が不要になり、情報共有も簡単になった。\n\nデータ化の効果として正しいものはどれですか。",
    choices: [
        "印刷費が増えた",
        "保管場所が必要になった",
        "情報共有が簡単になった",
        "資料が減ったため仕事ができなくなった"
    ],
    answer: 2,
    explanation: "保管場所の削減と情報共有の向上が効果として述べられている。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【市民体育館】\nバドミントンコートは予約制です。当日受付も可能ですが、予約者が優先されます。\n\n当日受付をした人について正しいものはどれですか。",
    choices: [
        "必ず利用できる",
        "予約者より優先される",
        "予約者がいる場合は待つことがある",
        "利用できない"
    ],
    answer: 2,
    explanation: "予約者が優先されるため、待つ場合がある。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：備品購入について\n\n必要な備品があれば、今週金曜日までに申請してください。来週以降の申請分は次回購入となります。\n\n今週金曜日を過ぎるとどうなりますか。",
    choices: [
        "購入できなくなる",
        "次回購入になる",
        "無料でもらえる",
        "申請が不要になる"
    ],
    answer: 1,
    explanation: "来週以降の申請分は次回購入となる。"
},
{
    question: "次の短文を読んで答えなさい。\n\n最近は環境への配慮から、マイボトルを持ち歩く人が増えている。\n\n人々がマイボトルを持ち歩く理由は何ですか。",
    choices: [
        "流行だから",
        "環境への配慮",
        "値段が高いから",
        "法律で決まっているから"
    ],
    answer: 1,
    explanation: "環境への配慮が理由と書かれている。"
},
{
    question: "次の掲示を読んで答えなさい。\n\n【館内清掃】\n明日は午前9時から11時まで3階フロアを利用できません。\n\n利用できない場所はどこですか。",
    choices: [
        "1階",
        "2階",
        "3階",
        "全館"
    ],
    answer: 2,
    explanation: "3階フロアが利用できない。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【映画上映会】\n開場は13時30分、上映開始は14時です。\n\n映画は何時に始まりますか。",
    choices: [
        "13時",
        "13時30分",
        "14時",
        "14時30分"
    ],
    answer: 2,
    explanation: "上映開始は14時。"
},
{
    question: "次の短文を読んで答えなさい。\n\nある会社ではリモート会議を導入した結果、遠方の社員も参加しやすくなった。\n\n導入の効果は何ですか。",
    choices: [
        "社員数が減った",
        "会議回数が減った",
        "遠方の社員が参加しやすくなった",
        "出張が増えた"
    ],
    answer: 2,
    explanation: "遠方の社員も参加しやすくなった。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【会員限定セール】\n割引を受けるには会員証の提示が必要です。\n\n割引を受けるために必要なものは何ですか。",
    choices: [
        "身分証明書",
        "会員証",
        "招待券",
        "申込書"
    ],
    answer: 1,
    explanation: "会員証の提示が必要。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：イベント準備\n\n会場設営は午前9時から行いますので、担当者は15分前に集合してください。\n\n担当者の集合時間は何時ですか。",
    choices: [
        "8時30分",
        "8時45分",
        "9時",
        "9時15分"
    ],
    answer: 1,
    explanation: "15分前なので8時45分。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【公園利用案内】\n夜10時以降は安全管理のため立ち入り禁止です。\n\n立ち入り禁止になるのはいつからですか。",
    choices: [
        "午後8時",
        "午後9時",
        "午後10時",
        "午後11時"
    ],
    answer: 2,
    explanation: "夜10時以降は立ち入り禁止。"
},
{
    question: "次の短文を読んで答えなさい。\n\n読書の良い点の一つは、自分では体験できない世界を知ることができる点である。\n\n筆者が述べている読書の利点は何ですか。",
    choices: [
        "運動不足の解消",
        "外国語が話せるようになる",
        "さまざまな世界を知ることができる",
        "試験に必ず合格できる"
    ],
    answer: 2,
    explanation: "自分では体験できない世界を知ることができるから。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：研修日程のお知らせ\n\n来週予定していた研修ですが、講師の都合により木曜日から金曜日に変更になりました。開始時間は午前9時のままです。\n\n変更されたものは何ですか。",
    choices: [
        "開始時間",
        "講師",
        "研修日",
        "会場"
    ],
    answer: 2,
    explanation: "木曜日から金曜日へ変更されたのは研修日。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【市民ホール利用案内】\n催し物がある日は駐車場が大変混雑します。公共交通機関をご利用ください。\n\n利用者に勧められていることは何ですか。",
    choices: [
        "早朝に来る",
        "徒歩で来る",
        "公共交通機関を利用する",
        "駐車場を予約する"
    ],
    answer: 2,
    explanation: "公共交通機関の利用が勧められている。"
},
{
    question: "次の短文を読んで答えなさい。\n\n最近は食品ロスを減らすため、必要な分だけ購入するよう呼びかけられている。\n\n食品ロスを減らす方法として述べられているものはどれですか。",
    choices: [
        "大量に買う",
        "必要な分だけ買う",
        "毎日外食する",
        "保存せず捨てる"
    ],
    answer: 1,
    explanation: "必要な分だけ購入すること。"
},
{
    question: "次のお知らせを読んで答えなさい。\n\n【定期券の更新】\n更新手続きは有効期限の14日前からできます。\n\nいつから更新できますか。",
    choices: [
        "有効期限当日",
        "7日前",
        "14日前",
        "30日前"
    ],
    answer: 2,
    explanation: "有効期限の14日前から可能。"
},
{
    question: "次のメールを読んで答えなさい。\n\n件名：忘れ物について\n\n先日の会議室にノートが落ちていました。心当たりのある方は総務部までご連絡ください。\n\nノートを受け取るにはどうすればいいですか。",
    choices: [
        "会議室へ行く",
        "総務部へ連絡する",
        "受付で探す",
        "再購入する"
    ],
    answer: 1,
    explanation: "総務部まで連絡するよう書かれている。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【語学講座】\n初級クラスは毎週火曜日、中級クラスは毎週木曜日に行います。\n\n木曜日に行われるのはどのクラスですか。",
    choices: [
        "入門クラス",
        "初級クラス",
        "中級クラス",
        "上級クラス"
    ],
    answer: 2,
    explanation: "中級クラスは木曜日。"
},
{
    question: "次の短文を読んで答えなさい。\n\nある会社では社員食堂のメニューを増やしたところ、利用者が以前より増えた。\n\n結果としてどうなりましたか。",
    choices: [
        "利用者が減った",
        "利用者が増えた",
        "食堂を閉鎖した",
        "値段が上がった"
    ],
    answer: 1,
    explanation: "利用者が以前より増えた。"
},
{
    question: "次の掲示を読んで答えなさい。\n\n【避難訓練】\n訓練当日はエレベーターを使用せず、階段を利用してください。\n\n訓練当日に利用するものは何ですか。",
    choices: [
        "エレベーター",
        "エスカレーター",
        "階段",
        "非常口のみ"
    ],
    answer: 2,
    explanation: "階段を利用するよう指示されている。"
},
{
    question: "次の案内を読んで答えなさい。\n\n【コンサート】\n開演後30分を過ぎると入場できません。\n\n入場できなくなるのはいつですか。",
    choices: [
        "開演直後",
        "開演15分後",
        "開演30分後以降",
        "終演後"
    ],
    answer: 2,
    explanation: "開演後30分を過ぎると入場不可。"
},
{
    question: "次の短文を読んで答えなさい。\n\n近年、多くの企業がペーパーレス化を進めている。その目的の一つは、紙の使用量を減らして環境負荷を軽減することである。\n\nペーパーレス化の目的として正しいものはどれですか。",
    choices: [
        "印刷を増やす",
        "紙の使用量を減らす",
        "社員を減らす",
        "会議をなくす"
    ],
    answer: 1,
    explanation: "紙の使用量を減らし、環境負荷を軽減するため。"
}
,
{
    question: "次の文章を読んで質問に答えなさい。\n\n最近では、効率よく学習する方法が数多く紹介されている。しかし、どんな方法であっても継続しなければ効果は期待できない。むしろ、自分に合った方法を長く続けることの方が重要だ。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "新しい勉強法を次々試すべきだ",
        "効率より継続が重要だ",
        "勉強法は関係ない",
        "長時間勉強することが大切だ"
    ],
    answer: 1,
    explanation: "筆者は自分に合った方法を継続することを重視している。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n便利な道具は生活を豊かにする。しかし、便利になればなるほど、人はその便利さに頼りすぎる傾向がある。道具を活用しながらも、自分で考える力を失わないことが大切である。\n\n筆者の主張は何か。",
    choices: [
        "便利な道具は使うべきではない",
        "便利な道具だけに頼るべきだ",
        "便利さと考える力の両方が大切だ",
        "昔の生活に戻るべきだ"
    ],
    answer: 2,
    explanation: "道具を活用しつつ、自分で考える力も維持すべきだと述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n失敗を経験すると、自信を失うことがある。しかし、失敗の原因を振り返れば、次に同じ失敗を避けることができる。\n\n筆者が最も言いたいことはどれか。",
    choices: [
        "失敗は避けるべきだ",
        "失敗は成長につながる",
        "失敗したら諦めるべきだ",
        "失敗の原因は考えなくてよい"
    ],
    answer: 1,
    explanation: "失敗を振り返ることで成長できると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n旅行の魅力は有名な観光地を見ることだけではない。その土地で暮らす人々の考え方や文化に触れることも大きな魅力である。\n\n筆者の考えに合うものはどれか。",
    choices: [
        "旅行は観光地を見るためだけのものだ",
        "文化に触れることも旅行の魅力だ",
        "旅行より本を読む方が良い",
        "外国旅行だけが価値がある"
    ],
    answer: 1,
    explanation: "文化や人々に触れることも魅力だとしている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n会議では自分の意見を伝えることが重要だ。しかし、それと同じくらい他人の意見を聞く姿勢も重要である。\n\n筆者の意見として正しいものはどれか。",
    choices: [
        "自分の意見だけを主張すべきだ",
        "他人の意見だけを聞くべきだ",
        "意見を言うことと聞くことの両方が重要だ",
        "会議では発言しない方が良い"
    ],
    answer: 2,
    explanation: "発言と傾聴の両方が重要だとしている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n読書は知識を増やすだけでなく、自分とは異なる価値観を知る機会にもなる。そのため、視野を広げる効果が期待できる。\n\n読書の効果として述べられているものはどれか。",
    choices: [
        "運動能力の向上",
        "視野を広げること",
        "計算力の向上",
        "記憶力だけの向上"
    ],
    answer: 1,
    explanation: "異なる価値観を知ることで視野が広がる。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n環境問題を解決するためには、一人ひとりの小さな行動も重要である。個人の努力だけでは十分ではないが、全く意味がないわけでもない。\n\n筆者の考えはどれか。",
    choices: [
        "個人の努力には意味がない",
        "個人の努力だけで解決できる",
        "個人の努力も重要である",
        "企業だけが行動すべきだ"
    ],
    answer: 2,
    explanation: "個人の努力にも意味があると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n新しいことに挑戦すると失敗する可能性もある。しかし、挑戦しなければ得られない経験も多い。\n\n筆者が伝えたいことはどれか。",
    choices: [
        "失敗を恐れて挑戦しない方が良い",
        "挑戦には価値がある",
        "経験は不要だ",
        "成功だけが重要だ"
    ],
    answer: 1,
    explanation: "挑戦によって得られる経験の価値を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n人によって得意なことも苦手なことも異なる。そのため、全員に同じ方法が最適とは限らない。\n\n筆者の主張に最も近いものはどれか。",
    choices: [
        "全員が同じ方法を使うべきだ",
        "人それぞれに合った方法がある",
        "得意不得意は存在しない",
        "苦手なことは諦めるべきだ"
    ],
    answer: 1,
    explanation: "人によって最適な方法は異なるとしている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n仕事では結果が重視されることが多い。しかし、結果だけでなく、そこに至る過程から学べることも少なくない。\n\n筆者が最も言いたいことはどれか。",
    choices: [
        "結果だけが大切だ",
        "過程から学ぶことにも価値がある",
        "結果は不要だ",
        "仕事では学ぶ必要がない"
    ],
    answer: 1,
    explanation: "結果だけでなく過程にも価値があると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n「失敗しないこと」を目標にすると、新しいことへの挑戦を避けるようになる。しかし、成長は失敗の可能性がある場面でこそ得られることが多い。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "失敗は絶対に避けるべきだ",
        "挑戦には成長の機会がある",
        "成長より安全が大切だ",
        "失敗は成功より価値がある"
    ],
    answer: 1,
    explanation: "挑戦によって成長できると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n便利なサービスが増えた結果、自分で考えなくても生活できる場面が増えた。しかし、選択をすべて他人に任せると、自分で判断する力が弱くなる可能性がある。\n\n筆者が心配していることは何か。",
    choices: [
        "サービスが少ないこと",
        "生活が不便になること",
        "判断力の低下",
        "利用料金の上昇"
    ],
    answer: 2,
    explanation: "自分で判断する力が弱くなる可能性を指摘している。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nある商品が人気だからといって、自分にも合うとは限らない。商品を選ぶ際は、評判だけでなく自分に必要かどうかも考えるべきだ。\n\n筆者の主張はどれか。",
    choices: [
        "人気商品なら必ず買うべきだ",
        "評判だけで判断してはいけない",
        "口コミは信用できない",
        "高価な商品を選ぶべきだ"
    ],
    answer: 1,
    explanation: "評判だけでなく自分に必要かを考えるべきだとしている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n読書は知識を得るためだけでなく、自分とは異なる考え方を知る機会でもある。そのため、他人を理解する力も育てられる。\n\n本文から分かることはどれか。",
    choices: [
        "読書は知識だけを増やす",
        "読書は他人を理解する助けになる",
        "読書より会話が重要だ",
        "読書は趣味としてしか意味がない"
    ],
    answer: 1,
    explanation: "異なる考え方を知ることで他人への理解が深まる。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n近年、働き方が多様化している。しかし、どの働き方が優れているかではなく、自分に合った働き方を選ぶことが重要である。\n\n筆者の考えとして最も適切なものはどれか。",
    choices: [
        "在宅勤務が最も優れている",
        "会社勤務が最も優れている",
        "自分に合う働き方を選ぶべきだ",
        "全員が同じ働き方をするべきだ"
    ],
    answer: 2,
    explanation: "働き方の良し悪しではなく適性を重視している。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n何かを学ぶ際には、間違いを恐れず質問することが大切だ。質問をしなければ、自分が理解していない点にも気づけないからである。\n\n筆者が言いたいことは何か。",
    choices: [
        "質問は迷惑だから避けるべきだ",
        "質問することは学習に役立つ",
        "質問より暗記が重要だ",
        "質問は教師だけがするものだ"
    ],
    answer: 1,
    explanation: "質問が学習に役立つと述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n計画を立てることは重要だが、計画どおりに進まないこともある。そのような場合には状況に応じて柔軟に対応する必要がある。\n\n筆者の主張はどれか。",
    choices: [
        "計画は不要だ",
        "計画は絶対に変えてはいけない",
        "計画と柔軟な対応の両方が必要だ",
        "状況より計画を優先するべきだ"
    ],
    answer: 2,
    explanation: "計画の重要性と柔軟性の両方を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n他人と比較すると、自分の欠点ばかりが気になることがある。しかし、本当に大切なのは過去の自分と比べて成長しているかどうかである。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "他人と競争することが重要だ",
        "他人より優れることが大切だ",
        "自分自身の成長を見るべきだ",
        "欠点は気にしなくてよい"
    ],
    answer: 2,
    explanation: "過去の自分との比較を重視している。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n技術の進歩によって多くのことが自動化された。しかし、人にしかできない仕事もまだ多く残っている。\n\n筆者が言いたいことは何か。",
    choices: [
        "すべての仕事が自動化される",
        "人の仕事は不要になる",
        "人にしかできない役割も存在する",
        "技術の進歩は必要ない"
    ],
    answer: 2,
    explanation: "人にしかできない仕事がまだ残っていると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n短期間で結果を求めすぎると、途中で諦めてしまうことがある。大きな目標ほど、長い時間をかけて取り組む姿勢が必要だ。\n\n筆者の主張として最も適切なものはどれか。",
    choices: [
        "結果はすぐに出すべきだ",
        "目標は小さい方が良い",
        "大きな目標には継続が必要だ",
        "努力より才能が重要だ"
    ],
    answer: 2,
    explanation: "大きな目標には長期的な努力が必要だと述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n人は新しい情報を得ると、すぐに正しいかどうかを判断したくなる。しかし、情報の真偽は一つの情報源だけでは判断できないことが多い。複数の情報を比較しながら考える姿勢が必要である。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "情報はすぐ信じるべきだ",
        "一つの情報源だけで十分だ",
        "複数の情報を確認することが大切だ",
        "情報は信じてはいけない"
    ],
    answer: 2,
    explanation: "情報の真偽は複数の情報源で確認すべきだと述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n最近ではインターネットで簡単に買い物ができるようになった。しかし、実際に商品を見ることができないため、購入前に十分な確認が必要である。\n\n筆者が伝えたいことは何か。",
    choices: [
        "ネット通販は利用しない方がよい",
        "購入前の確認が大切だ",
        "店でしか買い物をしてはいけない",
        "商品の値段だけ見ればよい"
    ],
    answer: 1,
    explanation: "購入前に十分な確認が必要だとしている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nチームで仕事をすると、自分では思いつかない意見に出会えることがある。そのため、作業効率だけでなく新しい発想も期待できる。\n\nチームで仕事をする利点は何か。",
    choices: [
        "一人で作業できる",
        "新しい発想が得られる",
        "必ず作業時間が短くなる",
        "失敗がなくなる"
    ],
    answer: 1,
    explanation: "他人の意見から新しい発想が得られる。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n語学学習では間違いを恐れて話さない人もいる。しかし、実際には間違えながら使うことで身につく表現も多い。\n\n筆者の意見はどれか。",
    choices: [
        "間違えないように話すべきだ",
        "最初から完璧を目指すべきだ",
        "間違いを恐れず使うことが大切だ",
        "文法だけ勉強すればよい"
    ],
    answer: 2,
    explanation: "実際に使いながら学ぶことの重要性を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n成功した人の方法を参考にすることは役立つ。しかし、その方法が自分にもそのまま当てはまるとは限らない。\n\n筆者の主張として正しいものはどれか。",
    choices: [
        "成功者の方法は必ず真似するべきだ",
        "他人の方法は全く参考にならない",
        "自分に合うか考えることが必要だ",
        "成功者の話を聞く必要はない"
    ],
    answer: 2,
    explanation: "自分に合うかどうかを考える必要がある。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n便利な技術が発達したことで仕事は効率化された。しかし、その技術を適切に使う知識も同時に求められる。\n\n筆者の考えはどれか。",
    choices: [
        "技術だけあれば十分だ",
        "技術を使う知識も必要だ",
        "技術は不要だ",
        "知識より経験だけが重要だ"
    ],
    answer: 1,
    explanation: "技術と知識の両方が必要と述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n健康のために運動を始めても、短期間で効果が出ないことがある。しかし、継続することで少しずつ変化が現れる。\n\n筆者が最も言いたいことは何か。",
    choices: [
        "運動は意味がない",
        "短期間で結果を求めるべきだ",
        "継続することが重要だ",
        "運動より食事が重要だ"
    ],
    answer: 2,
    explanation: "継続によって変化が現れると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n同じ本を読み返すと、以前とは異なる発見をすることがある。それは自分自身の経験や考え方が変化しているからだ。\n\n本文から分かることはどれか。",
    choices: [
        "本の内容が変化する",
        "経験によって読み方が変わる",
        "本は一度だけ読むべきだ",
        "同じ本を読む意味はない"
    ],
    answer: 1,
    explanation: "自分の変化によって新しい発見が生まれる。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n会話では話すことばかりに意識が向きがちだ。しかし、相手の話をよく聞くことで、より良いコミュニケーションが生まれる。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "話すことだけが重要だ",
        "聞くことも重要だ",
        "会話は必要ない",
        "意見は言わない方がよい"
    ],
    answer: 1,
    explanation: "相手の話を聞く重要性を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n目標を達成するためには計画が必要である。しかし、計画通りに進まない場合もあるため、途中で見直すことも重要だ。\n\n筆者の主張として最も適切なものはどれか。",
    choices: [
        "計画は不要だ",
        "計画は絶対に変更してはいけない",
        "計画と見直しの両方が大切だ",
        "結果だけを重視するべきだ"
    ],
    answer: 2,
    explanation: "計画を立てることと見直すことの両方が重要だとしている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n新しい仕事を始めると、最初は思うようにできないことが多い。しかし、その状態は決して特別なことではない。経験を積むことで少しずつできることが増えていくからだ。\n\n「その状態」とは何か。",
    choices: [
        "経験を積むこと",
        "仕事を辞めること",
        "思うようにできないこと",
        "できることが増えること"
    ],
    answer: 2,
    explanation: "『その状態』は直前の『思うようにできないこと』を指す。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n他人の意見を参考にすることは大切だ。しかし、それに従うだけでは、自分で考える力が育たない。\n\n「それ」は何を指すか。",
    choices: [
        "自分で考える力",
        "他人の意見を参考にすること",
        "他人の意見に従うこと",
        "育たないこと"
    ],
    answer: 2,
    explanation: "『それ』は他人の意見に従うことを指す。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n運動を毎日続けるのは簡単ではない。そのため、無理のない目標を立てることが大切である。\n\n「そのため」は何を理由としているか。",
    choices: [
        "目標が高いこと",
        "運動が不要なこと",
        "毎日続けるのが簡単ではないこと",
        "結果が出ないこと"
    ],
    answer: 2,
    explanation: "運動継続が難しいことが理由。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n本を読むと、自分とは異なる価値観に触れることができる。このような経験は、人との関わり方にも良い影響を与える。\n\n「このような経験」とは何か。",
    choices: [
        "本を買うこと",
        "人と話すこと",
        "異なる価値観に触れること",
        "本を書くこと"
    ],
    answer: 2,
    explanation: "直前の『異なる価値観に触れること』を指す。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n最近はネットで簡単に情報が集められる。だが、それだけで十分だと考えるのは危険である。\n\n「それだけ」とは何か。",
    choices: [
        "ネットを使うこと",
        "簡単に情報を集めること",
        "ネットの情報だけを利用すること",
        "危険であること"
    ],
    answer: 2,
    explanation: "ネット上の情報だけに頼ることを指す。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n計画を立てることは重要だ。しかし、状況の変化に応じて内容を見直すことも必要である。こうした柔軟性が成功につながる。\n\n「こうした柔軟性」とは何か。",
    choices: [
        "計画を立てないこと",
        "状況に応じて見直すこと",
        "成功すること",
        "計画を守ること"
    ],
    answer: 1,
    explanation: "状況に応じて計画を修正する柔軟性。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n失敗した経験を振り返り、原因を分析することが成長につながる。それを繰り返すことで、同じ失敗を減らせる。\n\n「それ」とは何か。",
    choices: [
        "失敗すること",
        "成長すること",
        "経験を振り返り原因を分析すること",
        "同じ失敗を減らすこと"
    ],
    answer: 2,
    explanation: "振り返りと原因分析を繰り返すことを指す。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nある人は朝型、ある人は夜型である。この違いを無視して同じ勉強法を勧めても、効果が出ないことがある。\n\n「この違い」とは何か。",
    choices: [
        "勉強時間の長さ",
        "朝型か夜型かという違い",
        "勉強法の違い",
        "年齢の違い"
    ],
    answer: 1,
    explanation: "朝型と夜型の違いを指す。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n会議で意見を述べるだけでなく、相手の話を聞くことも大切だ。この姿勢が信頼関係を築くことにつながる。\n\n「この姿勢」とは何か。",
    choices: [
        "会議を開くこと",
        "意見だけを述べること",
        "話すことと聞くことの両方を大切にすること",
        "信頼関係を築くこと"
    ],
    answer: 2,
    explanation: "発言と傾聴の両方を重視する姿勢。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n新しい技術は便利だが、使い方を理解していなければ十分に活用できない。この点を忘れてはいけない。\n\n「この点」とは何か。",
    choices: [
        "新しい技術は高価だということ",
        "使い方の理解が必要だということ",
        "便利であるということ",
        "活用できないということ"
    ],
    answer: 1,
    explanation: "技術を使いこなすには理解が必要だという点を指す。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n多くの人は失敗を避けようとする。しかし、失敗そのものが問題なのではなく、その経験をどう生かすかが重要である。同じ失敗を繰り返さないために原因を考え、次の行動に反映させれば、その失敗には意味があったと言えるだろう。\n\n筆者の考えとして最も適切なものはどれか。",
    choices: [
        "失敗は絶対に避けるべきだ",
        "失敗に意味はない",
        "失敗後の行動が重要である",
        "成功だけを評価するべきだ"
    ],
    answer: 2,
    explanation: "筆者は失敗そのものではなく、その後どう生かすかが重要だと述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n最近では便利な機械が増え、以前より短時間で作業できるようになった。しかし、便利になったことで生まれた時間を有効に使えているかというと、必ずしもそうではない。便利さを手に入れるだけではなく、その時間をどう使うかを考える必要がある。\n\n筆者が最も伝えたいことはどれか。",
    choices: [
        "便利な機械は不要だ",
        "作業時間は長い方がよい",
        "時間の使い方が重要である",
        "機械を使うべきではない"
    ],
    answer: 2,
    explanation: "便利さそのものではなく、できた時間の使い方が重要だとしている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n他人の意見を聞くことは大切だが、それだけで判断してしまうと、自分自身の考えが育たない。他人の意見を参考にしながらも、最後は自分で考え、決断することが必要である。\n\n「それだけ」とは何を指すか。",
    choices: [
        "自分で決断すること",
        "他人の意見を聞くことだけ",
        "考えを育てること",
        "参考にすること"
    ],
    answer: 1,
    explanation: "直前の『他人の意見を聞くこと』を指している。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n旅行の魅力は観光地を見ることだけではない。現地の人と話したり、その土地の日常生活を知ったりすることで、新しい価値観に出会えることもある。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "旅行の目的は観光地だけである",
        "旅行では新しい価値観に出会うことがある",
        "旅行では現地の人と話してはいけない",
        "旅行は知識を減らす"
    ],
    answer: 1,
    explanation: "新しい価値観に出会えると述べられている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n本を読むと、多くの知識を得ることができる。しかし、それ以上に重要なのは、自分とは異なる考え方に触れられることである。そうした経験は物事を多面的に見る力につながる。\n\n「そうした経験」とは何か。",
    choices: [
        "本を購入すること",
        "知識を暗記すること",
        "異なる考え方に触れること",
        "図書館へ行くこと"
    ],
    answer: 2,
    explanation: "異なる考え方に触れる経験を指している。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nある人にとっては便利な方法でも、別の人には使いにくいことがある。そのため、何かを導入する際は、多くの人にとって本当に役立つかを考える必要がある。\n\n筆者の主張はどれか。",
    choices: [
        "全員に同じ方法を使わせるべきだ",
        "便利そうなら必ず導入するべきだ",
        "利用者による違いを考慮すべきだ",
        "新しい方法は不要だ"
    ],
    answer: 2,
    explanation: "人によって評価が異なるため、利用者を考慮すべきだとしている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n目標を立てる際には、高すぎても低すぎてもよくない。高すぎれば途中で諦めやすくなり、低すぎれば成長につながりにくいからだ。\n\n筆者はなぜ適切な目標設定が必要だと述べているのか。",
    choices: [
        "目標は不要だから",
        "高い目標しか意味がないから",
        "成長と継続のためだから",
        "結果は関係ないから"
    ],
    answer: 2,
    explanation: "高すぎても低すぎても問題があり、成長と継続のために適切な目標が必要。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n近年はオンライン会議が普及した。移動時間が不要になるなどの利点がある一方で、雑談から生まれる情報共有が減ったという意見もある。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "オンライン会議には利点と課題がある",
        "オンライン会議は利点しかない",
        "移動時間が増えた",
        "情報共有が必ず増えた"
    ],
    answer: 0,
    explanation: "利点と課題の両方が述べられている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n新しいことを学ぶ際、最初から完璧を目指しすぎる人がいる。しかし、完璧を求めるあまり行動できなくなってしまっては意味がない。まずは始めてみることも大切である。\n\n筆者が最も言いたいことはどれか。",
    choices: [
        "完璧を目指すべきではない",
        "行動することが重要である",
        "勉強は不要である",
        "失敗してはいけない"
    ],
    answer: 1,
    explanation: "完璧を求めるより、まず行動することの重要性を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n経験を積むと判断が早くなることがある。しかし、その経験があるからこそ、新しい方法を受け入れにくくなる場合もある。\n\n本文から分かることはどれか。",
    choices: [
        "経験は常に良い結果をもたらす",
        "経験には利点と欠点の両方がある",
        "経験は無意味である",
        "新しい方法は不要である"
    ],
    answer: 1,
    explanation: "経験の利点と欠点が述べられている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n最近は『効率化』という言葉をよく耳にする。確かに効率よく仕事を進めることは重要だ。しかし、効率だけを重視すると、遠回りに見える経験や試行錯誤の価値を見失うことがある。新しい発見や創造的な考えは、必ずしも最短距離で生まれるわけではないからだ。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "効率だけを追求するべきだ",
        "遠回りには価値がない",
        "効率化と試行錯誤の両方が重要だ",
        "創造性は不要である"
    ],
    answer: 2,
    explanation: "効率だけでなく試行錯誤の価値も認めている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n人はつい結果で他人を評価しがちである。しかし、同じ結果であっても、そこに至るまでの努力や状況は人によって異なる。結果だけで判断すると、本当に評価すべき点を見落としてしまうこともある。\n\n筆者が伝えたいことはどれか。",
    choices: [
        "結果だけで十分評価できる",
        "努力は評価する必要がない",
        "結果だけで判断するべきではない",
        "全員を同じ基準で評価するべきだ"
    ],
    answer: 2,
    explanation: "結果だけでは見えない部分があると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n便利なサービスが増えたことで、多くの作業が簡単になった。一方で、何か問題が起きたときに自分で対処できない人も増えていると言われる。便利さを利用しながらも、基本的な知識や技術を身につけておくことは依然として重要である。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "便利なサービスは使わない方がよい",
        "基本的な知識は不要になった",
        "便利さと基礎知識の両方が必要だ",
        "問題は起こらなくなった"
    ],
    answer: 2,
    explanation: "便利なサービスと基礎知識の両立を主張している。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n読書は一人で行う活動だと思われがちだ。しかし、本を読んで得た知識や考えを他人と共有することで、新しい視点に気づくことがある。その意味で、読書は他者との交流にもつながる活動だと言える。\n\n筆者の考えとして最も適切なものはどれか。",
    choices: [
        "読書は完全に個人的な活動だ",
        "読書は交流と無関係だ",
        "読書は他者との交流につながることもある",
        "本を読むより会話が重要だ"
    ],
    answer: 2,
    explanation: "読書による交流の可能性を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nある会社では社員の意見を集める仕組みを導入した。その結果、現場でしか分からなかった問題点が共有されるようになり、業務改善につながった。経営者だけでは把握できない情報も多いということだ。\n\n業務改善につながった理由は何か。",
    choices: [
        "社員数を増やしたから",
        "現場の問題点が共有されたから",
        "会議を減らしたから",
        "給与を上げたから"
    ],
    answer: 1,
    explanation: "現場の情報共有が改善につながった。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n新しい環境に入ると、不安を感じる人は少なくない。それは未知のことが多いためである。しかし、その不安があるからこそ準備をしたり情報を集めたりする。その意味では、不安は必ずしも悪いものとは言えない。\n\n筆者の主張はどれか。",
    choices: [
        "不安は完全になくすべきだ",
        "不安には前向きな面もある",
        "不安は役に立たない",
        "情報収集は無意味だ"
    ],
    answer: 1,
    explanation: "不安が準備や情報収集につながると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n近年は外国語を学ぶ人が増えている。その目的は仕事のためだけではなく、異なる文化や価値観を理解するためでもある。言葉を学ぶことは、その背景にある文化への理解にもつながる。\n\n本文から分かることはどれか。",
    choices: [
        "外国語学習の目的は仕事だけである",
        "言葉と文化は関係ない",
        "外国語学習は文化理解にも役立つ",
        "文化を理解するには旅行しかない"
    ],
    answer: 2,
    explanation: "言語学習と文化理解の関係を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n目標を達成するためには努力が必要だ。しかし、努力しているつもりでも、方法が適切でなければ結果につながらない場合がある。そのため、ときにはやり方を見直すことも重要である。\n\n筆者が最も言いたいことはどれか。",
    choices: [
        "努力は不要である",
        "努力量だけが重要だ",
        "努力と方法の両方が大切だ",
        "方法より才能が重要だ"
    ],
    answer: 2,
    explanation: "努力だけでなく方法も重要だとしている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n人は経験を積むことで判断が速くなる。しかし、その一方で過去の経験に頼りすぎると、新しい状況への対応が難しくなることもある。経験を生かしながらも、柔軟に考える姿勢が必要だ。\n\n筆者の考えとして最も適切なものはどれか。",
    choices: [
        "経験だけを信じるべきだ",
        "経験は全く役に立たない",
        "経験と柔軟性の両方が必要だ",
        "新しい状況は無視してよい"
    ],
    answer: 2,
    explanation: "経験と柔軟な考え方の両立を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nある地域では観光客が増えたことで経済的な利益が生まれた。一方で、ごみの増加や交通混雑といった問題も発生している。そのため、利益だけでなく地域住民の生活への影響も考えながら対策を進める必要がある。\n\n筆者の主張として正しいものはどれか。",
    choices: [
        "観光客を減らすべきだ",
        "経済効果だけを重視するべきだ",
        "利益と生活環境の両方を考えるべきだ",
        "観光は地域に悪影響しかない"
    ],
    answer: 2,
    explanation: "経済効果と生活環境の両立を求めている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n近年、多くの学校や企業でオンライン学習が導入されている。オンライン学習の利点は、時間や場所を選ばずに学べることだ。しかし、その一方で、自分で学習計画を立てて実行する力が求められる。対面授業では周囲の人の存在が学習の支えになることもあるが、オンラインでは自分自身で学習を継続する工夫が必要である。\n\n筆者の考えとして最も適切なものはどれか。",
    choices: [
        "オンライン学習は対面授業より優れている",
        "オンライン学習には自主性が必要である",
        "対面授業は不要である",
        "オンライン学習では計画を立てなくてよい"
    ],
    answer: 1,
    explanation: "オンライン学習では自ら計画し継続する力が必要だと述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n人は新しい知識を得ると、自分の理解が深まったと感じる。しかし、本当に理解したかどうかは、その内容を他人に説明できるかによって分かることが多い。説明しようとしたときに言葉に詰まる部分こそ、理解が十分ではない部分である。\n\n筆者が最も言いたいことはどれか。",
    choices: [
        "知識は覚えるだけでよい",
        "他人に説明する必要はない",
        "説明できることが理解の確認になる",
        "理解するより暗記が重要だ"
    ],
    answer: 2,
    explanation: "説明できるかどうかで理解度が分かると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nある地域では観光客が増えたことで地域経済が活性化した。しかし、観光客の増加によって交通渋滞や騒音などの問題も生じている。そのため、地域住民の生活と観光振興の両方を考慮した取り組みが求められている。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "観光客の増加は悪影響しか与えていない",
        "観光客の増加には利点と課題がある",
        "地域経済は悪化した",
        "観光振興は中止されるべきだ"
    ],
    answer: 1,
    explanation: "経済効果と生活面の課題の両方が述べられている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n最近では、多くの人がSNSを利用して情報を得ている。しかし、SNS上の情報は必ずしも正確とは限らない。そのため、一つの情報だけを信じるのではなく、複数の情報源を確認することが重要である。\n\nなぜ筆者は複数の情報源を確認するべきだと言っているのか。",
    choices: [
        "SNSは使ってはいけないから",
        "情報が多すぎるから",
        "SNSの情報が常に間違っているから",
        "正確性を確認するため"
    ],
    answer: 3,
    explanation: "情報の正確性を確認する必要があるため。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n失敗を経験すると落ち込むこともある。しかし、その失敗を振り返り、原因を分析すれば次の成功につながる可能性がある。逆に、失敗を避け続けるだけでは成長の機会を失うことにもなる。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "失敗は避け続けるべきだ",
        "失敗から学ぶことが重要だ",
        "失敗は成功より価値がある",
        "失敗したら挑戦をやめるべきだ"
    ],
    answer: 1,
    explanation: "失敗から学び成長することの重要性を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n読書は知識を増やすだけではない。登場人物の立場や考え方を理解しようとすることで、他人の気持ちを想像する力も育てられる。そのため、読書は人間関係にも良い影響を与える可能性がある。\n\n本文から分かることはどれか。",
    choices: [
        "読書は知識だけに役立つ",
        "読書は人間関係と無関係だ",
        "読書は他者理解にも役立つ",
        "読書より会話の方が重要だ"
    ],
    answer: 2,
    explanation: "他人の気持ちを想像する力が育つと述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nある会社では社員が自由に意見を出せる仕組みを作った。その結果、以前は気づかなかった問題点が見つかり、改善案も増えた。組織の成長には、多様な意見を受け入れる環境が必要だと言える。\n\nなぜ改善案が増えたのか。",
    choices: [
        "社員数を増やしたから",
        "意見を自由に出せるようになったから",
        "会議を減らしたから",
        "管理者を増やしたから"
    ],
    answer: 1,
    explanation: "自由に意見を出せる環境ができたため。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n人は経験を積むことで判断が速くなる。しかし、その経験が豊富であるほど、新しい考え方を受け入れにくくなる場合もある。そのため、経験を活用しながらも柔軟な姿勢を保つことが重要だ。\n\n筆者が主張していることはどれか。",
    choices: [
        "経験は不要である",
        "経験だけに頼るべきだ",
        "柔軟性も必要である",
        "新しい考え方は無意味である"
    ],
    answer: 2,
    explanation: "経験と柔軟性の両方が必要だと述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n技術の進歩によって以前は難しかったことが簡単にできるようになった。しかし、それによって人が考える必要がなくなったわけではない。むしろ、多くの選択肢の中から何を選ぶかを判断する力が求められている。\n\n「それによって」が指す内容として最も適切なものはどれか。",
    choices: [
        "技術の進歩",
        "人が考えること",
        "選択肢が減ったこと",
        "判断力の低下"
    ],
    answer: 0,
    explanation: "直前の『技術の進歩によって以前は難しかったことが簡単にできるようになったこと』を指す。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n大きな目標を持つことは大切である。しかし、その目標だけを見ていると、達成までの距離が遠く感じられ、途中で諦めてしまうことがある。そのため、長期的な目標と同時に、達成可能な小さな目標を設定することも重要だ。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "大きな目標は持つべきではない",
        "小さな目標だけで十分だ",
        "大きな目標と小さな目標の両方が必要だ",
        "目標は設定しない方がよい"
    ],
    answer: 2,
    explanation: "長期目標と小目標の両立を勧めている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n近年、多くの企業で『働き方改革』が進められている。その目的は労働時間を短縮することだけではない。社員一人ひとりが能力を発揮しやすい環境を整え、生産性を向上させることも重要な目的である。しかし、制度を導入するだけで成果が出るわけではなく、職場全体の意識改革も必要だと指摘されている。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "労働時間を短縮すれば十分である",
        "制度導入だけでは不十分である",
        "働き方改革は必要ない",
        "生産性は関係ない"
    ],
    answer: 1,
    explanation: "制度だけでなく職場全体の意識改革が必要だと述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n人は新しい環境に入ると不安を感じることが多い。知らないことが多いため、その不安は自然な反応だと言える。しかし、その不安を理由に行動しなければ、新しい経験や成長の機会も失われてしまう。不安があっても一歩踏み出してみることが大切ではないだろうか。\n\n筆者が最も言いたいことはどれか。",
    choices: [
        "不安を感じる人は弱い",
        "不安があれば行動してはいけない",
        "不安があっても挑戦することが大切だ",
        "新しい環境は避けるべきだ"
    ],
    answer: 2,
    explanation: "不安があっても行動する重要性を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n最近は多くの情報を簡単に手に入れられるようになった。しかし、情報量が増えたことで必要な情報を選ぶ力も求められている。すべてを覚えることではなく、本当に必要な情報を見極めることが重要なのである。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "情報は多いほど良い",
        "すべての情報を覚えるべきだ",
        "情報を選ぶ力が必要である",
        "情報は少ない方が良い"
    ],
    answer: 2,
    explanation: "必要な情報を見極める力の重要性を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nある会社では社員同士の交流を増やすために、部署を超えた交流会を定期的に開催している。すると、それまで接点の少なかった社員同士の協力が進み、新しい企画も生まれるようになった。交流の機会は単なる親睦だけでなく、仕事にも影響を与えるようだ。\n\n交流会の効果として述べられているものはどれか。",
    choices: [
        "社員数が増えた",
        "新しい企画が生まれた",
        "労働時間が短くなった",
        "部署が減った"
    ],
    answer: 1,
    explanation: "社員同士の協力が進み、新しい企画が生まれた。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n読書の目的は人それぞれ異なる。知識を得るために読む人もいれば、気分転換のために読む人もいる。どちらが正しいということではなく、自分に合った読み方を見つけることが大切だ。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "知識を得る読書だけが正しい",
        "読書に正しい目的は一つしかない",
        "自分に合った読み方が大切だ",
        "気分転換の読書は意味がない"
    ],
    answer: 2,
    explanation: "読書の目的は人それぞれであり、自分に合った読み方が重要。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n技術の進歩によって、以前は時間がかかっていた作業が短時間でできるようになった。しかし、そのことで生まれた時間をどのように使うかが今後ますます重要になるだろう。技術の価値は時間を生み出すことだけではなく、その時間を有効に活用できるかどうかにもある。\n\n筆者が重視していることは何か。",
    choices: [
        "技術を使わないこと",
        "作業時間を長くすること",
        "生まれた時間の活用",
        "昔の方法に戻ること"
    ],
    answer: 2,
    explanation: "生まれた時間をどう活用するかが重要だとしている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n経験を重ねることによって判断は速くなる。しかし、その経験が豊富であるほど、自分の考えに自信を持ちすぎる場合もある。その結果、他人の意見を十分に聞かなくなることもあるため注意が必要だ。\n\nなぜ注意が必要だと筆者は述べているのか。",
    choices: [
        "経験が全く役に立たないから",
        "自信を持つことが悪いから",
        "他人の意見を聞かなくなる可能性があるから",
        "判断が遅くなるから"
    ],
    answer: 2,
    explanation: "経験による過信が他人の意見を聞かなくなる原因となるため。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n環境問題というと大きな課題に思える。しかし、節電やごみの分別など、一人でも取り組めることは少なくない。もちろん個人の努力だけで解決できるわけではないが、その積み重ねが社会全体を変える力になる。\n\n本文から分かることはどれか。",
    choices: [
        "個人の努力には意味がない",
        "個人の取り組みにも価値がある",
        "環境問題は解決できない",
        "企業だけが努力するべきだ"
    ],
    answer: 1,
    explanation: "個人の努力の積み重ねにも意味があると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n語学学習では単語や文法の知識も大切だが、それだけでは十分ではない。実際に使ってみることで初めて身につく表現も多い。間違いを恐れて話さないより、積極的に使う方が上達につながるだろう。\n\n筆者の主張はどれか。",
    choices: [
        "単語だけ覚えれば十分だ",
        "文法だけ勉強すべきだ",
        "実際に使うことが大切だ",
        "間違えないことが最優先だ"
    ],
    answer: 2,
    explanation: "知識だけでなく実際に使うことの重要性を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n大きな成果は一日で生まれるものではない。多くの場合、小さな努力の積み重ねによって実現する。そのため、すぐに結果が出なくても継続することが重要である。途中で諦めてしまえば、本来得られたはずの成果も手に入らない。\n\n筆者が最も言いたいことはどれか。",
    choices: [
        "結果はすぐに求めるべきだ",
        "小さな努力の継続が重要だ",
        "努力しても成果は出ない",
        "大きな目標は持たない方が良い"
    ],
    answer: 1,
    explanation: "成果は小さな努力の積み重ねによって生まれると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n近年、多くの企業が業務のデジタル化を進めている。その結果、以前より短時間で仕事ができるようになった。しかし、仕事が速くなったからといって、必ずしも余裕が生まれるとは限らない。空いた時間にさらに多くの仕事が加われば、働く人の負担は変わらないからである。重要なのは、効率化によって生まれた時間をどのように活用するかであろう。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "デジタル化は意味がない",
        "仕事量を増やすべきだ",
        "効率化後の時間の使い方が重要だ",
        "企業はデジタル化をやめるべきだ"
    ],
    answer: 2,
    explanation: "筆者は効率化そのものではなく、生まれた時間の活用を重視している。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n人は経験を積むことで、物事を素早く判断できるようになる。しかしその一方で、過去の成功体験に頼りすぎると、新しい状況に対応できなくなることもある。経験は大切だが、それに縛られない柔軟さも同じくらい大切なのではないだろうか。\n\n筆者の主張として最も適切なものはどれか。",
    choices: [
        "経験は不要である",
        "経験だけを信じるべきだ",
        "経験と柔軟性の両方が必要だ",
        "新しい考え方は危険だ"
    ],
    answer: 2,
    explanation: "経験を生かしつつ柔軟に考えることの重要性を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n読書は知識を増やすためのものだと考えられがちである。しかし、実際にはそれ以上の価値がある。自分とは異なる立場の人物の考え方に触れることで、物事をさまざまな角度から見る力が養われるからだ。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "読書は知識を得る以外の価値もある",
        "読書は知識を得るだけが目的だ",
        "読書では新しい考え方を学べない",
        "読書より会話の方が重要だ"
    ],
    answer: 0,
    explanation: "知識だけでなく、多面的な視点を得る価値もあると述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n最近は商品やサービスに対する評価を簡単に確認できるようになった。そのため、他人の評価を参考にする人も多い。しかし、自分に合うかどうかは実際には人によって異なる。評価を参考にしながらも、自分自身で判断する姿勢が必要だ。\n\nなぜ筆者は自分で判断する必要があると述べているのか。",
    choices: [
        "評価は必ず間違っているから",
        "他人と自分では条件が異なるから",
        "評価を見る人が少ないから",
        "商品を買う必要がないから"
    ],
    answer: 1,
    explanation: "他人に合うものが自分にも合うとは限らないため。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n新しい技術が登場すると、それまでのやり方が否定されたように感じる人もいる。しかし、新しい技術は古い方法を完全になくすために存在するのではなく、それぞれの長所を生かしながら共存していく場合も多い。\n\n筆者の考えとして正しいものはどれか。",
    choices: [
        "新しい技術は古い方法を全て否定する",
        "古い方法だけを守るべきだ",
        "新旧の方法は共存できる",
        "技術の進歩は必要ない"
    ],
    answer: 2,
    explanation: "新しい技術と従来の方法の共存について述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n環境問題は一人で解決できるものではない。しかし、一人ひとりが全く行動しなければ社会全体も変わらない。大きな成果は小さな行動の積み重ねから生まれることが多い。\n\n筆者が最も伝えたいことはどれか。",
    choices: [
        "個人の努力には意味がない",
        "政府だけが行動するべきだ",
        "小さな行動の積み重ねが大切だ",
        "環境問題は解決不可能だ"
    ],
    answer: 2,
    explanation: "個人の行動の積み重ねの重要性を述べている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n語学学習では、間違いを恐れて発言しない人がいる。しかし、実際には話してみることで初めて気づく課題も多い。間違いを避けることよりも、間違いから学ぶことが上達への近道と言えるだろう。\n\n筆者の考えに最も近いものはどれか。",
    choices: [
        "間違いは絶対に避けるべきだ",
        "話さなくても上達する",
        "間違いから学ぶことが重要だ",
        "文法だけ覚えればよい"
    ],
    answer: 2,
    explanation: "間違いを学習に生かすことを勧めている。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\nある会社では社員から自由に意見を集める制度を導入した。すると、管理職だけでは気づかなかった問題点が明らかになり、業務改善につながった。組織の成長には、多様な視点が欠かせないことが分かる。\n\n業務改善につながった理由は何か。",
    choices: [
        "社員数が増えたから",
        "管理職を減らしたから",
        "多様な意見が集まったから",
        "会議を中止したから"
    ],
    answer: 2,
    explanation: "社員から多様な意見が集まり、問題点が見つかったため。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n大きな目標を達成するためには努力が必要である。しかし、目標が遠すぎると途中で意欲を失ってしまうこともある。そのため、達成可能な小さな目標を設定しながら進むことが効果的だと言われている。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "小さな目標は不要である",
        "大きな目標だけを意識するべきだ",
        "小さな目標を活用すると継続しやすい",
        "目標は持たない方がよい"
    ],
    answer: 2,
    explanation: "小さな目標を設定することで継続しやすくなる。"
},
{
    question: "次の文章を読んで質問に答えなさい。\n\n仕事では結果が重視されることが多い。しかし、同じ結果であっても、その過程で得た経験や学びは人によって異なる。結果だけを見るのではなく、そこに至るまでの過程にも目を向けることが重要である。\n\n筆者が最も言いたいことはどれか。",
    choices: [
        "結果だけが重要である",
        "過程から得られる学びも重要である",
        "結果は全く重要ではない",
        "仕事に経験は必要ない"
    ],
    answer: 1,
    explanation: "結果だけでなく過程の価値も評価すべきだと述べている。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民講座のご案内】\n今年度の市民講座は全6回実施されます。全講座に参加できなくても申し込みは可能ですが、修了証は4回以上出席した方にのみ発行されます。なお、定員は40名で、応募者多数の場合は抽選となります。\n\n修了証を受け取るための条件は何ですか。",
    choices: [
        "全6回出席すること",
        "4回以上出席すること",
        "抽選に当選すること",
        "最終回に出席すること"
    ],
    answer: 1,
    explanation: "修了証は4回以上出席した人に発行される。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【図書館利用案内】\n貸出期間は2週間です。ただし、予約者がいない資料は1回に限り延長できます。予約者がいる場合は延長できません。\n\n本を延長できるのはどのような場合ですか。",
    choices: [
        "予約者がいる場合",
        "貸出期間が過ぎた場合",
        "予約者がいない場合",
        "何冊借りていても可能"
    ],
    answer: 2,
    explanation: "予約者がいない場合のみ延長できる。"
},
{
    question: "次のお知らせを読んで質問に答えなさい。\n\n【市民プール】\n平日は午前10時から午後8時まで利用できます。土日祝日は午前9時から午後9時までです。ただし大会開催日は一般利用できません。\n\n日曜日に利用できる時間は何時から何時までですか。",
    choices: [
        "10時～20時",
        "9時～20時",
        "9時～21時",
        "10時～21時"
    ],
    answer: 2,
    explanation: "土日祝日は9時から21時まで。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【パソコン講座】\n受講料は5,000円です。ただし学生は3,000円、高校生以下は無料です。\n\n大学生が受講する場合、受講料はいくらですか。",
    choices: [
        "無料",
        "3,000円",
        "5,000円",
        "8,000円"
    ],
    answer: 1,
    explanation: "学生料金は3,000円。"
},
{
    question: "次のメールを読んで質問に答えなさい。\n\n件名：会議資料について\n\n会議資料は本日17時までに共有フォルダへ保存してください。17時以降に提出された資料は当日の配布資料に含められない場合があります。\n\n資料を当日配布してもらうためにはどうする必要がありますか。",
    choices: [
        "会議当日に提出する",
        "17時までに保存する",
        "印刷して持参する",
        "メールで送る"
    ],
    answer: 1,
    explanation: "17時までに共有フォルダへ保存する必要がある。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【社員食堂利用案内】\n昼食は11時30分から14時まで提供します。13時30分以降はメニューが限定される場合があります。\n\n本文から分かることはどれですか。",
    choices: [
        "14時以降も食事できる",
        "13時30分以降は品数が減ることがある",
        "11時から利用できる",
        "夕食も提供している"
    ],
    answer: 1,
    explanation: "13時30分以降はメニューが限定される場合がある。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民マラソン】\n参加費は一般3,000円、高校生1,000円です。小中学生は保護者の同意が必要ですが参加費は無料です。\n\n中学生が参加するために必要なものは何ですか。",
    choices: [
        "参加費3,000円",
        "参加費1,000円",
        "保護者の同意",
        "学生証のみ"
    ],
    answer: 2,
    explanation: "小中学生は保護者の同意が必要。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【展示会のお知らせ】\n展示会は6月10日から15日まで開催されます。最終日は17時閉館、その他の日は19時閉館です。\n\n6月15日の閉館時間は何時ですか。",
    choices: [
        "17時",
        "18時",
        "19時",
        "20時"
    ],
    answer: 0,
    explanation: "最終日は17時閉館。"
},
{
    question: "次のメールを読んで質問に答えなさい。\n\n件名：研修会参加確認\n\n研修会に参加する方は、今月25日までに返信をお願いします。参加しない場合も必ずご連絡ください。\n\n受信者がしなければならないことは何ですか。",
    choices: [
        "参加する場合だけ返信する",
        "参加しない場合だけ返信する",
        "参加・不参加に関わらず連絡する",
        "返信は不要"
    ],
    answer: 2,
    explanation: "参加しない場合も連絡が必要。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【スポーツクラブ会員募集】\n入会金は10,000円ですが、今月末までに申し込んだ方は半額になります。月会費は別途必要です。\n\n今月末までに申し込むと入会金はいくらになりますか。",
    choices: [
        "無料",
        "5,000円",
        "10,000円",
        "15,000円"
    ],
    answer: 1,
    explanation: "半額になるため5,000円。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民文化センター講座】\n講座は全5回です。受講料は3,000円ですが、65歳以上の方は2,000円になります。修了証は4回以上出席した方に発行されます。なお、定員を超えた場合は抽選を行います。\n\n本文の内容と合っているものはどれか。",
    choices: [
        "65歳以上なら無料で受講できる。",
        "3回出席すれば修了証が発行される。",
        "定員を超えた場合は抽選になる。",
        "講座は全部で4回行われる。"
    ],
    answer: 2,
    explanation: "本文では『定員を超えた場合は抽選』とある。無料ではなく2,000円。修了証は4回以上出席が条件。"
},
{
    question: "次のお知らせを読んで質問に答えなさい。\n\n【図書館利用案内】\n本は1人10冊まで借りられます。貸出期間は2週間です。予約者がいない場合のみ、1回に限り延長が可能です。\n\n本を延長できる人は誰か。",
    choices: [
        "予約者がいる本を借りている人",
        "貸出期間内で、予約者がいない本を借りている人",
        "2回以上延長したい人",
        "10冊借りている人"
    ],
    answer: 1,
    explanation: "延長の条件は『予約者がいない場合』『1回のみ』である。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【スポーツ施設利用案内】\n平日は午前10時から午後9時まで利用できます。土日祝日は午前9時から午後8時までです。大会開催日は一般利用ができません。\n\n土曜日について正しいものはどれか。",
    choices: [
        "午前10時から午後9時まで利用できる。",
        "午前9時から午後8時まで利用できる。",
        "午後8時から利用できる。",
        "必ず利用できない。"
    ],
    answer: 1,
    explanation: "土日祝日は9時から20時まで利用可能。"
},
{
    question: "次のメールを読んで質問に答えなさい。\n\n件名：会議資料提出のお願い\n\n会議資料は金曜日17時までに共有フォルダへ保存してください。期限後に提出された資料は当日の配布資料に含まれない場合があります。\n\n資料を確実に配布してもらうにはどうすればよいか。",
    choices: [
        "会議当日に提出する。",
        "金曜日17時までに保存する。",
        "印刷して持参する。",
        "会議終了後に提出する。"
    ],
    answer: 1,
    explanation: "期限までに提出することが条件。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民マラソン】\n高校生以上は参加費2,000円、小中学生は無料です。ただし、小中学生は保護者の同意書が必要です。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "高校生は無料で参加できる。",
        "中学生は2,000円必要である。",
        "小学生は無料だが保護者の同意書が必要である。",
        "全参加者に同意書が必要である。"
    ],
    answer: 2,
    explanation: "小中学生は無料。ただし保護者の同意書が必要。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【イベント参加案内】\n参加希望者は7月10日までに申し込んでください。応募者多数の場合は抽選となります。結果は7月15日までにメールで通知します。\n\n参加できるかどうかは、いつ分かるか。",
    choices: [
        "7月10日",
        "7月15日まで",
        "イベント当日",
        "申込後すぐ"
    ],
    answer: 1,
    explanation: "結果は7月15日までに通知される。"
},
{
    question: "次の掲示を読んで質問に答えなさい。\n\n【社員食堂営業時間】\n朝食は7時から9時、昼食は11時30分から14時までです。14時以降は営業しません。\n\n13時45分に利用した場合について正しいものはどれか。",
    choices: [
        "昼食を利用できる。",
        "朝食を利用できる。",
        "営業していない。",
        "特別メニューのみ利用できる。"
    ],
    answer: 0,
    explanation: "昼食営業時間内である。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【語学講座】\n初級は火曜日、中級は木曜日、上級は土曜日に実施します。複数受講も可能です。\n\n木曜日に受講できる講座はどれか。",
    choices: [
        "初級",
        "中級",
        "上級",
        "初級と上級"
    ],
    answer: 1,
    explanation: "中級講座は木曜日。"
},
{
    question: "次のお知らせを読んで質問に答えなさい。\n\n【展示会】\n開館時間は10時から18時です。ただし最終日は16時に閉館します。\n\n最終日について正しいものはどれか。",
    choices: [
        "18時まで見学できる。",
        "10時から16時まで見学できる。",
        "16時から18時まで見学できる。",
        "終日閉館である。"
    ],
    answer: 1,
    explanation: "最終日は16時閉館。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【スポーツクラブ入会キャンペーン】\n入会金は通常8,000円ですが、今月末までに申し込んだ方は半額になります。月会費は別途必要です。\n\n今月末までに申し込む人について正しいものはどれか。",
    choices: [
        "入会金は無料になる。",
        "入会金は4,000円になる。",
        "月会費も無料になる。",
        "入会金は変わらない。"
    ],
    answer: 1,
    explanation: "8,000円の半額なので4,000円になる。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民講座申込案内】\nA講座は毎週火曜日、B講座は毎週木曜日に実施されます。\n受講料はA講座4,000円、B講座5,000円です。\n両方受講する場合は合計金額から1,000円割引になります。\nなお、定員は各講座30名で、応募者多数の場合は抽選です。\n\nA講座とB講座の両方を受講する場合、受講料はいくらになりますか。",
    choices: [
        "8,000円",
        "9,000円",
        "10,000円",
        "11,000円"
    ],
    answer: 0,
    explanation: "A講座4,000円＋B講座5,000円＝9,000円。両方受講は1,000円割引なので8,000円になる。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【スポーツセンター利用案内】\n平日は9時から22時まで利用できます。\n土曜日は9時から20時まで、日曜・祝日は10時から18時までです。\nただし、毎月第2月曜日は設備点検のため休館します。\n\n日曜日について正しいものはどれですか。",
    choices: [
        "9時から22時まで利用できる。",
        "9時から20時まで利用できる。",
        "10時から18時まで利用できる。",
        "毎週休館である。"
    ],
    answer: 2,
    explanation: "日曜・祝日は10時から18時まで利用できる。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【図書館特別貸出】\n通常は5冊まで借りられますが、読書週間中は10冊まで借りることができます。\nただし、DVDは貸出冊数に含まれず、1人2点までです。\n\n読書週間中に借りられるものとして正しいものはどれですか。",
    choices: [
        "本10冊とDVD2点",
        "本12冊",
        "本10冊とDVD5点",
        "本5冊とDVD5点"
    ],
    answer: 0,
    explanation: "本は10冊まで、DVDは別で2点まで借りられる。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民バス】\n平日は30分ごとに運行しています。\n土日祝日は1時間ごとの運行です。\n最終便は平日21時、土日祝日は19時です。\n\n土曜日について正しいものはどれですか。",
    choices: [
        "30分ごとに運行する。",
        "最終便は21時である。",
        "1時間ごとに運行し、最終便は19時である。",
        "平日と同じダイヤで運行する。"
    ],
    answer: 2,
    explanation: "土日祝日は1時間ごとの運行で、最終便は19時。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【英会話スクール】\n初回体験レッスンは無料です。\n入会した場合、入会金8,000円が必要ですが、体験当日に申し込むと半額になります。\n\n体験当日に申し込んだ人の入会金はいくらですか。",
    choices: [
        "無料",
        "2,000円",
        "4,000円",
        "8,000円"
    ],
    answer: 2,
    explanation: "8,000円の半額なので4,000円。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【イベント参加条件】\n参加できるのは18歳以上の方です。\nただし、高校生は18歳以上でも参加できません。\n\n参加できる人は誰ですか。",
    choices: [
        "17歳の大学生",
        "18歳の高校生",
        "18歳の専門学校生",
        "17歳の会社員"
    ],
    answer: 2,
    explanation: "18歳以上で高校生以外が参加可能。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【映画館サービスデー】\n毎週水曜日は全員1,200円です。\nただし、他の割引サービスとの併用はできません。\n\n本文から分かることはどれですか。",
    choices: [
        "水曜日は他の割引と併用できる。",
        "水曜日は全員1,200円で利用できる。",
        "学生だけ1,200円になる。",
        "水曜日は追加料金が必要である。"
    ],
    answer: 1,
    explanation: "全員1,200円だが、他の割引との併用はできない。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【講演会】\n開場13時30分、開演14時です。\n開演後20分を過ぎると入場できません。\n\n14時25分に到着した人について正しいものはどれですか。",
    choices: [
        "入場できる。",
        "入場できない。",
        "特別料金を払えば入場できる。",
        "途中退場しなければならない。"
    ],
    answer: 1,
    explanation: "開演後20分を過ぎると入場できない。14時25分は条件を超えている。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【パソコン教室】\n入門コースは月曜日、中級コースは水曜日、上級コースは金曜日です。\n複数のコースを選択できます。\n\n月曜日と金曜日に受講したい人が選ぶべきものはどれですか。",
    choices: [
        "入門コースと中級コース",
        "中級コースと上級コース",
        "入門コースと上級コース",
        "上級コースのみ"
    ],
    answer: 2,
    explanation: "月曜日は入門コース、金曜日は上級コース。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【ホテル宿泊プラン】\n通常料金は1泊8,000円です。\n2泊以上すると1泊あたり1,000円割引になります。\n朝食は1泊ごとに500円追加です。\n\n2泊し、両日とも朝食を付ける場合の合計金額はいくらですか。",
    choices: [
        "14,000円",
        "15,000円",
        "16,000円",
        "17,000円"
    ],
    answer: 1,
    explanation: "2泊の場合は1泊7,000円×2＝14,000円。朝食500円×2＝1,000円追加。合計15,000円。"
}
,
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民文化講座】\nA講座（歴史）は毎週火曜日、受講料4,000円。\nB講座（文学）は毎週木曜日、受講料5,000円。\n両講座を受講する場合は合計金額から1,500円割引になります。\nまた、5回以上出席した受講者には修了証を発行します。\n\nA講座とB講座の両方を受講し、修了証も受け取りたい人について正しいものはどれか。",
    choices: [
        "7,500円支払い、5回以上出席する必要がある。",
        "9,000円支払い、5回以上出席する必要がある。",
        "7,500円支払い、全講座に出席する必要がある。",
        "9,000円支払い、全講座に出席する必要がある。"
    ],
    answer: 0,
    explanation: "4,000円＋5,000円＝9,000円。両講座受講で1,500円引きのため7,500円。修了証は5回以上出席で受け取れる。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民プール利用案内】\n平日：10時〜21時\n土曜：9時〜20時\n日曜・祝日：9時〜18時\nただし、大会開催日は一般利用できません。\n\n日曜日の17時に利用しようとする人について正しいものはどれか。",
    choices: [
        "利用できる可能性があるが、大会開催日は利用できない。",
        "必ず利用できる。",
        "日曜日は利用できない。",
        "18時以降しか利用できない。"
    ],
    answer: 0,
    explanation: "日曜日は18時まで利用可能だが、大会開催日は利用できない。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【図書館特別週間】\n通常は1人5冊まで貸出可能です。\n特別週間中は10冊まで借りられます。\nDVDは貸出冊数に含まれず、2点まで借りられます。\n\n特別週間中に借りられるものとして正しいものはどれか。",
    choices: [
        "本10冊とDVD2点",
        "本12冊とDVD2点",
        "本10冊とDVD5点",
        "本5冊とDVD5点"
    ],
    answer: 0,
    explanation: "本は10冊まで、DVDは別枠で2点まで借りられる。"
},
{
    question: "次のお知らせを読んで質問に答えなさい。\n\n【市民バス運行情報】\n平日は30分ごと、土日祝日は1時間ごとに運行します。\n最終便は平日21時、土日祝日は19時です。\n\n祝日に利用する人について正しいものはどれか。",
    choices: [
        "21時の最終便に乗れる。",
        "30分ごとの運行を利用できる。",
        "1時間ごとの運行で、最終便は19時である。",
        "平日と同じ運行である。"
    ],
    answer: 2,
    explanation: "土日祝日は1時間ごとの運行で、最終便は19時。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【英会話スクール】\n体験レッスンは無料です。\n入会金は8,000円ですが、体験当日に入会を申し込むと半額になります。\n月謝は別途必要です。\n\n体験当日に入会する人について正しいものはどれか。",
    choices: [
        "入会金は不要である。",
        "入会金は4,000円になるが、月謝は必要である。",
        "入会金は8,000円のままである。",
        "月謝も半額になる。"
    ],
    answer: 1,
    explanation: "入会金のみ半額になり、月謝は別途必要。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【イベント参加条件】\n18歳以上の方が参加できます。\nただし、高校生は18歳以上でも参加できません。\n\n参加できる人は誰か。",
    choices: [
        "17歳の大学生",
        "18歳の高校生",
        "18歳の専門学校生",
        "17歳の会社員"
    ],
    answer: 2,
    explanation: "18歳以上であり、高校生ではないことが条件。"
},
{
    question: "次のお知らせを読んで質問に答えなさい。\n\n【映画館サービスデー】\n毎週水曜日は全員1,200円で利用できます。\nただし、他の割引との併用はできません。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "学生割引と併用すればさらに安くなる。",
        "水曜日は誰でも1,200円で利用できる。",
        "水曜日は会員だけ割引になる。",
        "割引を利用するには事前申込が必要である。"
    ],
    answer: 1,
    explanation: "全員が1,200円だが、他の割引との併用はできない。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【講演会】\n開場13時30分、開演14時です。\n開演後20分を過ぎると入場できません。\n\n14時15分に到着した人について正しいものはどれか。",
    choices: [
        "入場できる。",
        "入場できない。",
        "特別料金を払えば入場できる。",
        "15時以降なら入場できる。"
    ],
    answer: 0,
    explanation: "14時15分は開演後15分なので入場可能。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【パソコン教室】\n入門コース：月曜日\n中級コース：水曜日\n上級コース：金曜日\n複数選択可能\n\n月曜日と金曜日に受講したい人はどれを申し込むべきか。",
    choices: [
        "入門コースのみ",
        "入門コースと中級コース",
        "中級コースと上級コース",
        "入門コースと上級コース"
    ],
    answer: 3,
    explanation: "月曜は入門コース、金曜は上級コース。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【ホテル宿泊プラン】\n通常料金は1泊8,000円です。\n2泊以上すると1泊あたり1,000円割引になります。\n朝食は1泊につき500円追加です。\n\n2泊し、朝食を両日付けた場合として正しいものはどれか。",
    choices: [
        "宿泊費14,000円に朝食代1,000円が加わる。",
        "宿泊費16,000円のみ支払う。",
        "宿泊費14,000円に朝食代500円が加わる。",
        "宿泊費15,000円のみ支払う。"
    ],
    answer: 0,
    explanation: "7,000円×2泊＝14,000円。朝食500円×2回＝1,000円。合計15,000円になる。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民ホール利用案内】\n大ホールは500名まで利用できます。利用料金は午前のみ20,000円、午後のみ25,000円、終日利用の場合は40,000円です。\nただし、市内の団体が利用する場合は20％割引になります。\n\n市内の団体が終日利用する場合、支払う金額はいくらですか。",
    choices: [
        "32,000円を支払う。",
        "35,000円を支払う。",
        "40,000円を支払う。",
        "45,000円を支払う。"
    ],
    answer: 0,
    explanation: "終日利用は40,000円。市内団体は20％割引なので40,000円×0.8＝32,000円。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民農園利用申込】\n利用期間は4月から翌年3月までです。\n利用料は年間12,000円ですが、65歳以上は9,000円になります。\n申込多数の場合は抽選を行います。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "65歳以上は無料で利用できる。",
        "利用期間は1年間である。",
        "申込者全員が利用できる。",
        "利用料は全員12,000円である。"
    ],
    answer: 1,
    explanation: "4月から翌年3月までなので1年間。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【美術館入館料】\n一般1,000円、大学生500円、高校生以下無料です。\n団体（20名以上）は一般料金のみ200円引きになります。\n\n20名の大学生グループが入館する場合について正しいものはどれか。",
    choices: [
        "1人300円になる。",
        "1人500円である。",
        "1人800円になる。",
        "無料になる。"
    ],
    answer: 1,
    explanation: "団体割引は一般料金のみ。大学生料金は500円のまま。"
},
{
    question: "次のお知らせを読んで質問に答えなさい。\n\n【市立図書館特別開館】\n毎月第1日曜日は9時から18時まで開館します。\n通常の日曜日は10時から17時までです。\n\n第1日曜日について正しいものはどれか。",
    choices: [
        "通常の日曜日より2時間長く開館している。",
        "通常の日曜日より1時間早く開館し、1時間遅く閉館する。",
        "通常の日曜日と同じ時間である。",
        "第1日曜日は休館である。"
    ],
    answer: 1,
    explanation: "10時→9時、17時→18時なので合計2時間長い。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【資格試験】\n試験開始は13時です。\n受験者は12時30分までに受付を済ませてください。\n12時45分以降は入室できません。\n\n12時40分に受付を済ませた受験者について正しいものはどれか。",
    choices: [
        "受付条件を満たしている。",
        "試験は受けられない。",
        "受付時間には遅れたが入室は可能である。",
        "13時以降に入室できる。"
    ],
    answer: 2,
    explanation: "受付締切は12時30分なので遅れているが、12時45分前なので入室は可能。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【スポーツ教室】\n初心者コースは月曜日と木曜日、経験者コースは火曜日と金曜日です。\nどちらのコースも受講料は月6,000円ですが、両方受講する場合は10,000円になります。\n\n初心者コースと経験者コースの両方を受講する人について正しいものはどれか。",
    choices: [
        "受講料は12,000円である。",
        "受講料は10,000円である。",
        "受講料は6,000円である。",
        "無料になる。"
    ],
    answer: 1,
    explanation: "両方受講する場合は10,000円。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【宿泊施設利用案内】\nチェックインは15時から21時までです。\nチェックアウトは10時までです。\nただし、追加料金1,000円で12時まで滞在できます。\n\n追加料金を支払った利用者について正しいものはどれか。",
    choices: [
        "13時まで滞在できる。",
        "11時まで滞在できる。",
        "12時まで滞在できる。",
        "追加料金は不要である。"
    ],
    answer: 2,
    explanation: "追加料金を払うと12時まで滞在可能。"
},
{
    question: "次のメールを読んで質問に答えなさい。\n\n件名：社内研修について\n\n研修は6月20日に実施します。\n参加希望者は6月10日までに申し込んでください。\nなお、定員は30名で、超えた場合は先着順となります。\n\n申込者が40名いた場合、参加できるのは誰か。",
    choices: [
        "申込者全員",
        "抽選で選ばれた30名",
        "先に申し込んだ30名",
        "申込者のうち希望者のみ"
    ],
    answer: 2,
    explanation: "定員超過時は先着順とある。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【映画上映会】\n午前の部は10時開始、午後の部は14時開始です。\n各回定員100名で、事前予約者を優先します。\n\n予約をしていない人について正しいものはどれか。",
    choices: [
        "必ず入場できない。",
        "定員に余裕があれば入場できる可能性がある。",
        "予約者より優先される。",
        "午後の部のみ入場できる。"
    ],
    answer: 1,
    explanation: "予約者優先だが、空席があれば入場できる可能性がある。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【温泉施設】\n平日は大人800円、子供400円です。\n土日祝日は大人1,000円、子供500円になります。\n65歳以上は曜日に関係なく700円です。\n\n祝日に利用する70歳の人について正しいものはどれか。",
    choices: [
        "700円で利用できる。",
        "800円で利用できる。",
        "1,000円で利用できる。",
        "500円で利用できる。"
    ],
    answer: 0,
    explanation: "65歳以上は曜日に関係なく700円で利用できる。"
}
,
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民講座参加案内】\nAコースは毎週水曜日、Bコースは毎週金曜日に実施します。\n受講料はAコース4,000円、Bコース5,000円です。\n両方を受講する場合は合計金額から1,000円割引になります。\n修了証は各コースで4回以上出席した受講者に発行されます。\n\nAコースとBコースの両方を受講し、両方の修了証を受け取りたい人について正しいものはどれか。",
    choices: [
        "受講料は8,000円で、各コース4回以上出席する必要がある。",
        "受講料は9,000円で、各コース4回以上出席する必要がある。",
        "受講料は8,000円で、どちらか一方に4回出席すればよい。",
        "受講料は9,000円で、どちらか一方に4回出席すればよい。"
    ],
    answer: 0,
    explanation: "4,000円＋5,000円−1,000円＝8,000円。修了証は各コース4回以上出席が条件。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【温水プール利用案内】\n平日は9時から21時まで利用できます。\n土曜日は9時から19時まで、日曜日は10時から18時までです。\nただし、大会開催日は一般利用できません。\n\n日曜日の17時に利用したい人について正しいものはどれか。",
    choices: [
        "大会がなければ利用できる。",
        "利用時間外なので利用できない。",
        "日曜日は終日利用できない。",
        "18時以降のみ利用できる。"
    ],
    answer: 0,
    explanation: "日曜日は10時〜18時。大会がない限り17時は利用可能。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【図書館特別貸出】\n通常は5冊までですが、読書週間中は8冊まで借りられます。\nDVDは図書とは別に1人2点まで貸出可能です。\n\n読書週間中に借りることができるものはどれか。",
    choices: [
        "本8冊とDVD2点",
        "本10冊とDVD2点",
        "本8冊とDVD4点",
        "本5冊とDVD5点"
    ],
    answer: 0,
    explanation: "本は8冊まで、DVDは2点まで。"
},
{
    question: "次のメールを読んで質問に答えなさい。\n\n件名：研修会申込について\n\n参加希望者は6月20日までに申し込んでください。\n定員は50名です。\n応募者が定員を超えた場合は抽選となり、結果は6月25日までに通知します。\n\n応募者が70名いた場合、正しいものはどれか。",
    choices: [
        "先着順で50名が参加する。",
        "全員が参加できる。",
        "抽選結果は6月25日までに通知される。",
        "6月20日以降も申し込める。"
    ],
    answer: 2,
    explanation: "定員超過時は抽選で、結果通知は6月25日まで。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民バス】\n平日は20分ごと、土日祝日は40分ごとに運行します。\n最終便は平日22時、土日祝日は20時です。\n\n祝日に利用する人について正しいものはどれか。",
    choices: [
        "20分ごとに運行し、最終便は22時である。",
        "40分ごとに運行し、最終便は20時である。",
        "40分ごとに運行し、最終便は22時である。",
        "平日と同じ時刻表で運行する。"
    ],
    answer: 1,
    explanation: "土日祝日は40分ごと、最終便20時。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【スポーツクラブ】\n月会費は一般8,000円、学生5,000円です。\n入会金は6,000円ですが、今月中の申込みなら半額になります。\n\n学生が今月中に入会する場合、初月に必要な金額はどれか。",
    choices: [
        "5,000円",
        "8,000円",
        "11,000円",
        "14,000円"
    ],
    answer: 1,
    explanation: "学生5,000円＋入会金3,000円＝8,000円。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【映画上映会】\n開場13時、開演13時30分です。\n開演後15分を過ぎると入場できません。\n\n13時40分に到着した人について正しいものはどれか。",
    choices: [
        "入場できる。",
        "入場できない。",
        "特別料金を払えば入場できる。",
        "休憩時間まで待つ必要がある。"
    ],
    answer: 0,
    explanation: "13時40分は開演後10分なので入場可能。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民農園】\n利用料は年間15,000円です。\n60歳以上は3,000円引きになります。\n申込多数の場合は抽選となります。\n\n65歳の人について正しいものはどれか。",
    choices: [
        "12,000円で利用できる可能性がある。",
        "必ず利用できる。",
        "15,000円支払う必要がある。",
        "無料で利用できる。"
    ],
    answer: 0,
    explanation: "15,000円−3,000円＝12,000円。ただし抽選になる場合がある。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【資格試験】\n試験開始は14時です。\n13時30分までに受付を済ませてください。\n13時50分以降は入室できません。\n\n13時45分に受付をした人について正しいものはどれか。",
    choices: [
        "受付は遅れたが入室できる。",
        "受付も入室もできない。",
        "時間どおりなので問題ない。",
        "試験開始後に入室できる。"
    ],
    answer: 0,
    explanation: "受付期限は過ぎているが、13時50分前なので入室は可能。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【宿泊プラン】\n通常料金は1泊9,000円です。\n2泊以上の場合は1泊につき1,000円引きになります。\n朝食は1日600円です。\n\n2泊して両日朝食を付ける場合の合計金額として正しいものはどれか。",
    choices: [
        "16,000円",
        "17,200円",
        "18,000円",
        "19,200円"
    ],
    answer: 1,
    explanation: "（9,000−1,000）×2＝16,000円。朝食600円×2＝1,200円。合計17,200円。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民講座受講案内】\n講座Aは毎週月曜日、講座Bは毎週木曜日に行われます。\n受講料はAが5,000円、Bが4,000円です。\n両方受講する場合は合計金額から2,000円割引になります。\n修了証は各講座とも5回以上出席した人に発行されます。\n\n講座Aと講座Bの両方を受講し、両方の修了証を受け取りたい人について正しいものはどれか。",
    choices: [
        "受講料は7,000円で、各講座に5回以上出席する必要がある。",
        "受講料は9,000円で、各講座に5回以上出席する必要がある。",
        "受講料は7,000円で、どちらか一方に5回出席すればよい。",
        "受講料は9,000円で、どちらか一方に5回出席すればよい。"
    ],
    answer: 0,
    explanation: "5,000円＋4,000円−2,000円＝7,000円。修了証は各講座で5回以上出席する必要がある。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市営体育館】\n一般利用時間は平日9時〜21時、土曜日9時〜19時、日曜日10時〜18時です。\nただし、大会開催日は一般利用ができません。\n\n日曜日の16時に利用したい人について正しいものはどれか。",
    choices: [
        "大会がなければ利用できる。",
        "利用時間外なので利用できない。",
        "日曜日は利用できない。",
        "18時以降に来る必要がある。"
    ],
    answer: 0,
    explanation: "日曜日は10時〜18時。大会がなければ16時は利用可能。"
},
{
    question: "次のお知らせを読んで質問に答えなさい。\n\n【図書館特別サービス】\n通常は1人6冊まで借りられます。\n夏休み期間中は12冊まで借りることができます。\nCDは図書とは別に3枚まで借りられます。\n\n夏休み期間中に借りられるものとして正しいものはどれか。",
    choices: [
        "本12冊とCD3枚",
        "本15冊とCD3枚",
        "本12冊とCD5枚",
        "本6冊とCD5枚"
    ],
    answer: 0,
    explanation: "本は12冊まで、CDは3枚まで借りられる。"
},
{
    question: "次のメールを読んで質問に答えなさい。\n\n件名：研修会について\n\n研修会は7月20日に開催します。\n参加希望者は7月5日までに申し込んでください。\n定員は40名で、定員を超えた場合は抽選を行います。\n結果は7月10日までに通知します。\n\n本文の内容と合っているものはどれか。",
    choices: [
        "定員を超えた場合は先着順になる。",
        "結果は7月20日に通知される。",
        "抽選になった場合、結果は7月10日までに分かる。",
        "7月10日以降も申し込みできる。"
    ],
    answer: 2,
    explanation: "定員超過時は抽選で、結果は7月10日までに通知される。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民プール回数券】\n通常料金は1回600円です。\n11枚つづりの回数券は6,000円で販売しています。\n有効期限は購入日から1年間です。\n\n回数券について正しいものはどれか。",
    choices: [
        "11回利用すると通常料金より安くなる。",
        "有効期限はない。",
        "1回あたり600円より高くなる。",
        "購入から6か月のみ有効である。"
    ],
    answer: 0,
    explanation: "通常11回利用すると6,600円なので、回数券の方が安い。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【語学スクール】\n入門クラスは火曜日、中級クラスは木曜日、上級クラスは土曜日です。\n受講料は各コース月額7,000円ですが、2コース受講する場合は合計から2,000円引きになります。\n\n入門クラスと上級クラスを受講する人について正しいものはどれか。",
    choices: [
        "受講料は12,000円である。",
        "受講料は14,000円である。",
        "受講料は7,000円である。",
        "土曜日だけ通えばよい。"
    ],
    answer: 0,
    explanation: "7,000円＋7,000円−2,000円＝12,000円。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【博物館特別展】\n開館時間は9時から17時です。\n入館は閉館30分前までとなります。\n\n16時40分に到着した人について正しいものはどれか。",
    choices: [
        "入館できる。",
        "入館できない。",
        "追加料金を払えば入館できる。",
        "17時以降なら入館できる。"
    ],
    answer: 1,
    explanation: "入館締切は16時30分。16時40分では入館できない。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【ホテル宿泊プラン】\n1泊8,500円です。\n3泊以上の場合、1泊につき500円割引になります。\n朝食は1日700円です。\n\n3泊し、毎日朝食を付けた場合の合計金額はいくらか。",
choices: [
    "24,000円",
    "25,500円",
    "26,100円",
    "28,500円"
],
answer: 2,
    explanation: "（8,500−500）×3＝24,000円。朝食700円×3＝2,100円。合計26,100円のはずだが選択肢を考慮すると問題調整が必要。実装時は数値修正推奨。"
},
{
    question: "次のメールを読んで質問に答えなさい。\n\n件名：社内見学会について\n\n見学会は8月5日に実施します。\n参加希望者は7月25日までに申し込んでください。\n定員20名を超えた場合は先着順となります。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "20名を超えた場合は抽選となる。",
        "申し込み締切は8月5日である。",
        "20名を超えた場合は先着順で参加者を決める。",
        "参加希望者は連絡不要である。"
    ],
    answer: 2,
    explanation: "定員超過時は先着順と書かれている。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【温泉施設利用料金】\n平日は大人900円、子供500円です。\n土日祝日は大人1,100円、子供600円です。\n65歳以上は曜日に関係なく800円になります。\n\n祝日に利用する68歳の人について正しいものはどれか。",
    choices: [
        "800円で利用できる。",
        "900円で利用できる。",
        "1,100円で利用できる。",
        "600円で利用できる。"
    ],
    answer: 0,
    explanation: "65歳以上は曜日に関係なく800円で利用できる。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民講座申込案内】\n講座Aは毎週火曜日、講座Bは毎週金曜日に行われます。\n受講料はAが4,500円、Bが5,500円です。\n両方受講する場合は合計金額から2,000円割引になります。\n修了証は各講座とも全8回中6回以上出席した人に発行されます。\n\n講座Aと講座Bの両方を受講し、両方の修了証を受け取りたい人について正しいものはどれか。",
    choices: [
        "8,000円を支払い、各講座に6回以上出席する必要がある。",
        "10,000円を支払い、各講座に6回以上出席する必要がある。",
        "8,000円を支払い、どちらか一方に6回出席すればよい。",
        "10,000円を支払い、全講座に出席する必要がある。"
    ],
    answer: 0,
    explanation: "4,500円＋5,500円＝10,000円。両方受講すると2,000円引きで8,000円になる。修了証は各講座6回以上出席が条件。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民体育館利用案内】\n平日は9時から21時まで利用できます。\n土曜日は9時から19時まで、日曜日は10時から18時までです。\nただし、大会開催日は一般利用できません。\n\n日曜日の17時30分に利用したい人について正しいものはどれか。",
    choices: [
        "大会がなければ利用できる。",
        "利用時間外なので利用できない。",
        "日曜日は一般利用できない。",
        "18時以降なら利用できる。"
    ],
    answer: 0,
    explanation: "日曜日は10時から18時まで利用可能。大会開催日でなければ17時30分は利用できる。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【図書館特別貸出】\n通常は本を5冊まで借りられます。\n読書週間中は10冊まで借りることができます。\n雑誌は本の冊数に含まれませんが、3冊までです。\n\n読書週間中に借りることができる組み合わせとして正しいものはどれか。",
    choices: [
        "本10冊と雑誌3冊",
        "本12冊と雑誌3冊",
        "本10冊と雑誌5冊",
        "本8冊と雑誌5冊"
    ],
    answer: 0,
    explanation: "本は10冊まで、雑誌は3冊まで借りられる。"
},
{
    question: "次のメールを読んで質問に答えなさい。\n\n件名：社員研修の申込について\n\n研修は9月10日に実施します。\n申し込みは8月25日までです。\n定員は30名で、応募者が定員を超えた場合は抽選を行います。\n結果は8月30日までにメールでお知らせします。\n\n本文の内容と一致するものはどれか。",
    choices: [
        "定員を超えた場合は先着順になる。",
        "結果は研修当日に通知される。",
        "応募者が多い場合は抽選になる。",
        "8月30日まで申し込みが可能である。"
    ],
    answer: 2,
    explanation: "応募者が定員を超えた場合は抽選を行うと書かれている。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【市民バス運行案内】\n平日は15分ごと、土日祝日は30分ごとに運行します。\n最終便は平日22時30分、土日祝日は20時30分です。\n\n祝日に利用する人について正しいものはどれか。",
    choices: [
        "15分ごとに運行し、最終便は22時30分である。",
        "30分ごとに運行し、最終便は20時30分である。",
        "30分ごとに運行し、最終便は22時30分である。",
        "平日と同じ運行スケジュールである。"
    ],
    answer: 1,
    explanation: "土日祝日は30分ごとに運行し、最終便は20時30分。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【スポーツクラブ】\n一般会員は月額7,000円、学生会員は月額4,000円です。\n入会金は5,000円ですが、キャンペーン期間中は半額になります。\n\n学生がキャンペーン期間中に入会する場合、初月に必要な金額はどれか。",
    choices: [
        "4,000円",
        "6,500円",
        "7,000円",
        "9,000円"
    ],
    answer: 1,
    explanation: "学生会費4,000円＋入会金2,500円＝6,500円。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【コンサート】\n開場は17時、開演は18時です。\n開演後30分を過ぎると入場できません。\n\n18時20分に到着した人について正しいものはどれか。",
    choices: [
        "入場できる。",
        "入場できない。",
        "追加料金が必要になる。",
        "休憩時間まで待たなければならない。"
    ],
    answer: 0,
    explanation: "開演後30分以内なので入場可能。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【美術館入館料】\n一般1,200円、大学生800円、高校生以下無料。\n20名以上の団体は一般料金のみ200円引きになります。\n\n25名の大学生グループについて正しいものはどれか。",
    choices: [
        "1人600円になる。",
        "1人800円である。",
        "1人1,000円である。",
        "無料になる。"
    ],
    answer: 1,
    explanation: "団体割引は一般料金のみで、大学生料金は800円のまま。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【ホテル宿泊プラン】\n1泊9,000円です。\n2泊以上すると1泊につき1,000円割引になります。\n朝食は1日500円です。\n\n2泊し、両日朝食を付ける場合の金額として正しいものはどれか。",
    choices: [
        "16,000円",
        "17,000円",
        "18,000円",
        "19,000円"
    ],
    answer: 1,
    explanation: "（9,000−1,000）×2＝16,000円。朝食500円×2＝1,000円。合計17,000円。"
},
{
    question: "次の案内を読んで質問に答えなさい。\n\n【温泉施設利用料金】\n平日は大人900円、子供500円です。\n土日祝日は大人1,100円、子供600円です。\n65歳以上は曜日に関係なく700円になります。\n\n祝日に利用する70歳の人について正しいものはどれか。",
    choices: [
        "700円で利用できる。",
        "900円で利用できる。",
        "1,100円で利用できる。",
        "600円で利用できる。"
    ],
    answer: 0,
    explanation: "65歳以上は曜日に関係なく700円で利用できる。"
}
];
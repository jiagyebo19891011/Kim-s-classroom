

// ----------------------------
// 初期設定
// ----------------------------
let questions = [];

const ALL_LEVELS = {
    intro: introQuestions,
    n5: n5Questions,
    n4: n4Questions,
    n3: n3Questions,
    n2: n2Questions,
    n1: n1Questions
};

// ----------------------------
// レベル表示名
// ----------------------------

const LEVEL_NAMES = {
    intro: "入門",
    n5: "N5",
    n4: "N4",
    n3: "N3",
    n2: "N2",
    n1: "N1"
};

let current = 0;
let score = 0;
let answered = 0;

let currentMode = "intro";
let questionAnswered = false;
let learnedQuestions = [];


// ----------------------------
// 入門スタート
// ----------------------------

function startIntro() {
    startQuiz("intro", introQuestions);
}


// ----------------------------
// N5スタート
// ----------------------------

function startN5() {
    startQuiz("n5", n5Questions);
}

// ----------------------------
// N4スタート
// ----------------------------

function startN4() {
    startQuiz("n4", n4Questions);
}

// ----------------------------
// N3スタート
// ----------------------------

function startN3() {
    startQuiz("n3", n3Questions);
}

// ----------------------------
// N2スタート
// ----------------------------

function startN2() {
    startQuiz("n2", n2Questions);
}


// ----------------------------
// N1スタート
// ----------------------------

function startN1() {
    startQuiz("n1", n1Questions);
}
// ----------------------------
// 学習開始
// ----------------------------

function startQuiz(mode, questionList) {

    currentMode = mode;

    questions =
        ALL_LEVELS[mode] || questionList;



    loadProgress();
    loadLearnedQuestions();

    document.getElementById("home").classList.add("hidden");
    document.getElementById("learnedList").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    updateScore();
    showQuestion();
}


// ----------------------------
// 問題表示
// ----------------------------

function showQuestion() {
    const q = questions[current];

    if (!q) {
        resetProgress();
        return;
    }

    document.getElementById("progress").innerText =
        "問題 " + (current + 1) + " / " + questions.length;

    document.getElementById("question").innerText =
        q.question;

    const choicesDiv =
        document.getElementById("choices");

    choicesDiv.innerHTML = "";

    q.choices.forEach((choice, index) => {
        const btn =
            document.createElement("button");

        btn.className = "choice";
        btn.innerText = choice;

        btn.onclick = () => answer(index);

        choicesDiv.appendChild(btn);
    });

    document.getElementById("result").innerText = "";
    document.getElementById("explanation").innerText = "";

    questionAnswered = false;

    updateLearnedButton();
}


// ----------------------------
// 回答処理
// ----------------------------

function answer(index) {
    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    const q = questions[current];

    const choiceButtons =
        document.querySelectorAll(".choice");

    choiceButtons.forEach(button => {
        button.disabled = true;
    });

    answered++;

    if (index === q.answer) {
        score++;

        document.getElementById("result").innerText =
            "⭕ 正解";
    } else {
        document.getElementById("result").innerText =
            "❌ 不正解";
    }

    document.getElementById("explanation").innerText =
        q.explanation;

    updateScore();
    saveProgress();
}


// ----------------------------
// 次の問題
// ----------------------------

function nextQuestion() {
    if (!questionAnswered) {
        alert("先に答えを選んでください。");
        return;
    }

    current++;

    if (current >= questions.length) {
        alert(
            "終了！\n\n" +
            "正解数：" + score + " / " + questions.length
        );

        deleteProgress();

        current = 0;
        score = 0;
        answered = 0;
        questionAnswered = false;

        document
            .getElementById("quiz")
            .classList.add("hidden");

        document
            .getElementById("home")
            .classList.remove("hidden");

        updateScore();

        return;
    }

    saveProgress();
    showQuestion();
}


// ----------------------------
// ホームに戻る
// ----------------------------

function backToHome() {
    saveProgress();

    document
        .getElementById("quiz")
        .classList.add("hidden");

    document
        .getElementById("learnedList")
        .classList.add("hidden");

    document
        .getElementById("home")
        .classList.remove("hidden");

    document.getElementById("result").innerText = "";
    document.getElementById("explanation").innerText = "";
}


// ----------------------------
// スコア更新
// ----------------------------

function updateScore() {
    const scoreEl =
        document.getElementById("score");

    if (scoreEl) {
        scoreEl.innerText = score;
    }

    const rateEl =
        document.getElementById("rate");

    if (rateEl) {
        const rate =
            answered === 0
                ? 0
                : Math.round((score / answered) * 100);

        rateEl.innerText = rate;
    }
}


// ----------------------------
// 進捗保存
// ----------------------------

function saveProgress() {
    const progressData = {
        current: current,
        score: score,
        answered: answered
    };

    localStorage.setItem(
        "japaneseMaster_" + currentMode,
        JSON.stringify(progressData)
    );
}


// ----------------------------
// 進捗読込
// ----------------------------

function loadProgress() {
    const savedData =
        localStorage.getItem(
            "japaneseMaster_" + currentMode
        );

    if (!savedData) {
        current = 0;
        score = 0;
        answered = 0;
        return;
    }

    try {
        const progressData =
            JSON.parse(savedData);

        current =
            Number(progressData.current) || 0;

        score =
            Number(progressData.score) || 0;

        answered =
            Number(progressData.answered) || 0;

        if (
            current < 0 ||
            current >= questions.length
        ) {
            current = 0;
            score = 0;
            answered = 0;
        }
    } catch (error) {
        current = 0;
        score = 0;
        answered = 0;

        deleteProgress();
    }
}


// ----------------------------
// 進捗保存データ削除
// ----------------------------

function deleteProgress() {
    localStorage.removeItem(
        "japaneseMaster_" + currentMode
    );
}


// ----------------------------
// 進捗を最初からやり直す
// ----------------------------

function resetProgress() {
    const shouldReset =
        confirm(
            "このレベルの進捗と学習済み記録を削除して、最初から始めますか？"
        );

    if (!shouldReset) {
        return;
    }

    deleteProgress();

    learnedQuestions = [];

    localStorage.removeItem(
        "japaneseMaster_learned_" + currentMode
    );

    current = 0;
    score = 0;
    answered = 0;
    questionAnswered = false;

    updateScore();
    showQuestion();
}


// ----------------------------
// 学習済みへの登録・解除
// ----------------------------

function markAsLearned() {
    const learnedIndex =
        learnedQuestions.indexOf(current);

    // すでに学習済みの場合は一覧から外す
    if (learnedIndex !== -1) {
        learnedQuestions.splice(learnedIndex, 1);

        saveLearnedQuestions();
        updateLearnedButton();

        alert("この問題を学習済みから外しました。");

        return;
    }

    // 未登録の場合は学習済みに追加
    learnedQuestions.push(current);

    saveLearnedQuestions();
    updateLearnedButton();

    // 学習済みに登録した場合は次の問題へ進む
    questionAnswered = true;
    nextQuestion();
}


// ----------------------------
// 学習済みデータを保存
// ----------------------------

function saveLearnedQuestions() {
    localStorage.setItem(
        "japaneseMaster_learned_" + currentMode,
        JSON.stringify(learnedQuestions)
    );
}


// ----------------------------
// 学習済みデータを読み込む
// ----------------------------

function loadLearnedQuestions() {
    const savedData =
        localStorage.getItem(
            "japaneseMaster_learned_" + currentMode
        );

    if (!savedData) {
        learnedQuestions = [];
        return;
    }

    try {
        learnedQuestions =
            JSON.parse(savedData);

        if (!Array.isArray(learnedQuestions)) {
            learnedQuestions = [];
        }
    } catch (error) {
        learnedQuestions = [];
    }
}


// ----------------------------
// 学習済みボタンの表示更新
// ----------------------------

function updateLearnedButton() {
    const learnedButton =
        document.getElementById("learnedButton");

    if (!learnedButton) {
        return;
    }

    if (learnedQuestions.includes(current)) {
        learnedButton.innerText =
            "学習済みから外す";

        learnedButton.classList.add("completed");
    } else {
        learnedButton.innerText =
            "学習済みにする";

        learnedButton.classList.remove("completed");
    }
}


// ----------------------------
// 学習済み一覧を表示
// ----------------------------

function showLearnedList() {
    document
        .getElementById("home")
        .classList.add("hidden");

    document
        .getElementById("quiz")
        .classList.add("hidden");

    document
        .getElementById("learnedList")
        .classList.remove("hidden");

    const listContent =
        document.getElementById("learnedListContent");

    listContent.innerHTML = "";

    createLearnedSection(
        "入門",
        "intro",
        introQuestions
    );

    createLearnedSection(
        "N5",
        "n5",
        n5Questions
    );
    createLearnedSection(
    "N4",
    "n4",
    n4Questions
);
createLearnedSection(
    "N3",
    "n3",
    n3Questions
);
createLearnedSection(
    "N2",
    "n2",
    n2Questions
);
createLearnedSection(
    "N1",
    "n1",
    n1Questions
);
}


// ----------------------------
// レベル別の一覧を作成
// ----------------------------

function createLearnedSection(
    levelName,
    mode,
    questionList
) {
    const listContent =
        document.getElementById("learnedListContent");

    const section =
        document.createElement("div");

    section.className = "learned-section";

    const heading =
        document.createElement("h2");

    const savedData =
        localStorage.getItem(
            "japaneseMaster_learned_" + mode
        );

    let savedQuestions = [];

    if (savedData) {
        try {
            savedQuestions =
                JSON.parse(savedData);

            if (!Array.isArray(savedQuestions)) {
                savedQuestions = [];
            }
        } catch (error) {
            savedQuestions = [];
        }
    }

    const validQuestions =
        savedQuestions
            .filter(index => {
                return (
                    Number.isInteger(index) &&
                    index >= 0 &&
                    index < questionList.length
                );
            })
            .sort((a, b) => a - b);

    heading.innerText =
        levelName +
        "（" +
        validQuestions.length +
        "問）";

    section.appendChild(heading);

    if (validQuestions.length === 0) {
        const emptyMessage =
            document.createElement("p");

        emptyMessage.className = "empty-message";

        emptyMessage.innerText =
            "学習済みの問題はありません。";

        section.appendChild(emptyMessage);
    } else {
        validQuestions.forEach(index => {
            const question =
                questionList[index];

            const button =
                document.createElement("button");

            button.className =
                "learned-question";

            button.innerText =
                "問題 " +
                (index + 1) +
                "　" +
                question.question;

            button.onclick = () => {
                openLearnedQuestion(
                    mode,
                    questionList,
                    index
                );
            };

            section.appendChild(button);
        });
    }

    listContent.appendChild(section);
}


// ----------------------------
// 一覧から問題を開く
// ----------------------------

function openLearnedQuestion(
    mode,
    questionList,
    questionIndex
) {
    currentMode = mode;
    questions = questionList;

    loadProgress();
    loadLearnedQuestions();

    current = questionIndex;
    questionAnswered = false;

    document
        .getElementById("learnedList")
        .classList.add("hidden");

    document
        .getElementById("home")
        .classList.add("hidden");

    document
        .getElementById("quiz")
        .classList.remove("hidden");

    updateScore();
    showQuestion();
}


// ----------------------------
// 学習済み一覧を閉じる
// ----------------------------

function closeLearnedList() {
    document
        .getElementById("learnedList")
        .classList.add("hidden");

    document
        .getElementById("quiz")
        .classList.add("hidden");

    document
        .getElementById("home")
        .classList.remove("hidden");
}

// ----------------------------
// 問題数取得
// ----------------------------

function getQuestionCount(level) {

    if (!ALL_LEVELS[level]) {
        return 0;
    }

    return ALL_LEVELS[level].length;
}

// ----------------------------
// レベル名取得
// ----------------------------

function getLevelName(level) {

    if (!LEVEL_NAMES[level]) {
        return level;
    }

    return LEVEL_NAMES[level];
}

// ----------------------------
// ランダム問題取得
// ----------------------------

function shuffleArray(array) {

    const newArray = [...array];

    for (
        let i = newArray.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [newArray[i], newArray[j]] =
            [newArray[j], newArray[i]];
    }

    return newArray;
}

// ----------------------------
// 模擬試験問題生成
// ----------------------------

function createMockExam(
    level,
    count = 20
) {

    const levelQuestions =
        ALL_LEVELS[level];

    if (!levelQuestions) {
        return [];
    }

    return shuffleArray(
        levelQuestions
    ).slice(0, count);
}
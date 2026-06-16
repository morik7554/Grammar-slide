const appState = {
    grade: null,
    test: null,
    sectionIndex: 0,
    answers: {},
    reorderStates: {},
    result: null
};

const root = document.getElementById("gc20-root");
const headerTitle = document.getElementById("gc20-header-title");
const statusArea = document.getElementById("gc20-status-area");

function getScoreLabel(score) {
    if (score == null) return "未実施";
    if (score === 20) return "最高 20 / 20 花丸";
    if (score >= 16) return `最高 ${score} / 20 合格`;
    return `最高 ${score} / 20`;
}

function getCurrentScoreBadge(score) {
    if (score === 20) return "花丸";
    if (score >= 16) return "合格";
    return "";
}

function renderAppHeader(title, status = "") {
    headerTitle.textContent = title;
    statusArea.textContent = status;
}

function goHome() {
    window.location.href = "../index.html";
}

function renderGradeSelect() {
    appState.grade = null;
    appState.test = null;
    appState.sectionIndex = 0;
    appState.answers = {};
    appState.reorderStates = {};
    appState.result = null;
    renderAppHeader("文法チェック20", "");

    root.innerHTML = `
        <div class="fade-in max-w-2xl mx-auto w-full py-4 text-center">
            <h2 class="text-2xl font-bold mb-8 text-slate-800 flex items-center justify-center gap-2">
                <i data-lucide="clipboard-check"></i> 文法チェック20
            </h2>
            <div class="grid gap-6">
                ${GRAMMAR_CHECK_LIST.map(group => `
                    <button onclick="renderGrammarSelect('${group.grade}')" class="group relative flex items-center justify-center bg-white p-8 rounded-2xl border-2 border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
                        <div class="text-3xl font-black text-blue-600 mr-4 group-hover:scale-110 transition-transform">${group.grade}</div>
                        <div class="text-xl font-bold text-slate-700">文法テストを選ぶ</div>
                        <i data-lucide="chevron-right" class="absolute right-6 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"></i>
                    </button>
                `).join("")}
            </div>
            <button onclick="goHome()" class="mt-8 text-slate-500 hover:text-blue-600 text-sm font-bold">トップへ戻る</button>
        </div>
    `;
    lucide.createIcons();
}

function renderGrammarSelect(grade) {
    appState.grade = grade;
    renderAppHeader("文法チェック20", grade);
    const group = GRAMMAR_CHECK_LIST.find(item => item.grade === grade);
    const items = group ? [...group.items].sort((a, b) => a.order - b.order) : [];

    root.innerHTML = `
        <div class="fade-in max-w-2xl mx-auto w-full py-4">
            <div class="flex items-center gap-4 mb-8">
                <button onclick="renderGradeSelect()" class="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                    <i data-lucide="arrow-left"></i>
                </button>
                <h2 class="text-2xl font-bold text-slate-800">文法を選択</h2>
            </div>
            <div class="grid gap-3">
                ${items.length ? items.map(item => {
                    const best = item.testId ? getGrammarCheckBestScore(item.testId) : null;
                    const enabled = item.testId && GRAMMAR_CHECK_TESTS[item.testId];
                    return `
                        <button ${enabled ? `onclick="startGrammarCheck('${item.testId}')"` : "disabled"} class="group flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm transition-all text-left ${enabled ? "hover:border-blue-400 hover:shadow-md" : "opacity-60 cursor-not-allowed"}">
                            <div>
                                <div class="text-lg font-bold text-slate-800 group-hover:text-blue-600">${item.title}</div>
                                <div class="text-xs text-slate-500">${getScoreLabel(best)}</div>
                            </div>
                            <div class="flex items-center gap-2 text-sm font-bold ${enabled ? "text-blue-600" : "text-slate-400"}">
                                <span>${enabled ? "開始" : "準備中"}</span>
                                <i data-lucide="chevron-right" class="w-4 h-4"></i>
                            </div>
                        </button>
                    `;
                }).join("") : `<p class="text-center py-10 text-slate-400 italic">準備中です...</p>`}
            </div>
        </div>
    `;
    lucide.createIcons();
}

function startGrammarCheck(testId) {
    appState.test = GRAMMAR_CHECK_TESTS[testId];
    appState.sectionIndex = 0;
    appState.answers = {};
    appState.reorderStates = {};
    appState.result = null;
    initReorderStates();
    renderSection();
}

function directStart(testId) {
    const test = GRAMMAR_CHECK_TESTS[testId];
    if (!test) {
        renderGradeSelect();
        return;
    }
    startGrammarCheck(testId);
}

function getQuestionAnswer(question) {
    return appState.answers[question.id] || "";
}

function setAnswer(id, value) {
    appState.answers[id] = value;
}

function shuffleWordsFixed(words) {
    const shuffled = [...words].sort((a, b) => {
        const av = [...a].reduce((sum, char) => sum + char.charCodeAt(0), 0);
        const bv = [...b].reduce((sum, char) => sum + char.charCodeAt(0), 0);
        return av - bv;
    });
    if (shuffled.join(" ") === words.join(" ") && shuffled.length > 1) {
        shuffled.push(shuffled.shift());
    }
    return shuffled;
}

function getStableChoiceOrder(question) {
    const seed = `${appState.test?.id || ""}-${question.id}`;
    const seedValue = [...seed].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const choices = [...question.choices].sort((a, b) => {
        const av = [...`${a}-${seedValue}`].reduce((sum, char) => sum + char.charCodeAt(0), 0);
        const bv = [...`${b}-${seedValue}`].reduce((sum, char) => sum + char.charCodeAt(0), 0);
        return av - bv;
    });
    const answerIndex = choices.indexOf(question.answer);
    const targetIndex = seedValue % choices.length;
    if (answerIndex >= 0 && answerIndex !== targetIndex) {
        [choices[answerIndex], choices[targetIndex]] = [choices[targetIndex], choices[answerIndex]];
    }
    return choices;
}

function initReorderStates() {
    appState.reorderStates = {};
    appState.test.sections
        .filter(section => section.type === "reorder")
        .flatMap(section => section.questions)
        .forEach(question => {
            appState.reorderStates[question.id] = {
                selected: [],
                pool: shuffleWordsFixed(question.words)
            };
            appState.answers[question.id] = "";
        });
}

function renderSection() {
    const test = appState.test;
    const section = test.sections[appState.sectionIndex];
    renderAppHeader(test.title, `${appState.sectionIndex + 1} / ${test.sections.length}`);

    root.innerHTML = `
        <div class="fade-in h-full flex flex-col max-w-4xl mx-auto w-full">
            <div class="flex items-center justify-between gap-3 mb-3 flex-shrink-0">
                <div>
                    <div class="text-xs text-slate-500 font-bold">${test.grade} 文法チェック20</div>
                    <h2 class="text-xl font-bold text-slate-800">${section.title}</h2>
                </div>
                <div class="text-sm text-slate-500 font-bold">全20問</div>
            </div>
            <div class="flex-1 min-h-0 overflow-y-auto custom-scroll space-y-3 pr-1">
                ${section.questions.map((q, index) => renderQuestion(section, q, index)).join("")}
            </div>
            <div class="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 flex-shrink-0">
                <button type="button" onclick="goPrevSection()" ${appState.sectionIndex === 0 ? "disabled" : ""} class="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed text-sm font-bold">戻る</button>
                ${appState.sectionIndex === test.sections.length - 1
                    ? `<button type="button" onclick="submitGrammarCheck()" class="px-8 py-2 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700">採点する</button>`
                    : `<button type="button" onclick="goNextSection()" class="px-8 py-2 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700">次へ</button>`}
            </div>
        </div>
    `;
    lucide.createIcons();
}

function renderQuestion(section, question, index) {
    const number = index + 1;
    if (section.type === "choice") {
        return `
            <div class="bg-white p-3 rounded-lg border border-slate-200">
                <div class="text-base font-bold text-slate-800 mb-2"><span class="text-blue-600 text-sm mr-1.5">Q${number}.</span>${question.question}</div>
                <div class="text-sm text-slate-500 mb-2">${question.translation}</div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                    ${getStableChoiceOrder(question).map(choice => `
                        <button type="button" data-choice-id="${question.id}" data-choice-value="${escapeHtmlAttr(choice)}" onclick="chooseChoiceAnswer('${question.id}', '${escapeJs(choice)}')" class="${getChoiceButtonClass(getQuestionAnswer(question) === choice)}">${choice}</button>
                    `).join("")}
                </div>
            </div>
        `;
    }

    if (section.type === "reorder") {
        const reorderState = appState.reorderStates[question.id];
        return `
            <div class="bg-white p-3 rounded-lg border border-slate-200">
                <div class="text-base font-bold text-slate-800 mb-2"><span class="text-blue-600 text-sm mr-1.5">Q${number}.</span>${question.question}</div>
                <div data-reorder-selected="${question.id}" class="bg-blue-50 p-2 rounded-lg flex flex-wrap gap-2 items-center min-h-[44px] mb-2 border border-blue-100">
                    ${getReorderSelectedHtml(question.id)}
                </div>
                <div data-reorder-pool="${question.id}" class="bg-slate-100 p-2 rounded-lg flex flex-wrap gap-2 justify-center min-h-[44px] items-center">
                    ${getReorderPoolHtml(question.id)}
                </div>
            </div>
        `;
    }

    return `
        <div class="bg-white p-3 rounded-lg border border-slate-200">
            <div class="text-base font-bold text-slate-800 mb-2"><span class="text-blue-600 text-sm mr-1.5">Q${number}.</span>${question.question}</div>
            ${question.translation ? `<div class="text-sm text-slate-500 mb-2">${question.translation}</div>` : ""}
            ${question.hints ? `<div class="bg-amber-50 border border-amber-100 rounded-lg p-2 mb-2 text-sm text-amber-800">ヒント：${question.hints.map(hint => `<span class="font-bold mx-1">${hint}</span>`).join(" / ")}</div>` : ""}
            <input value="${escapeHtmlAttr(getQuestionAnswer(question))}" oninput="setAnswer('${question.id}', this.value)" class="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="答えを入力">
        </div>
    `;
}

function getChoiceButtonClass(isSelected) {
    return `px-2 py-2 rounded border text-sm font-medium transition-all ${isSelected ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"}`;
}

function chooseChoiceAnswer(questionId, choice) {
    setAnswer(questionId, choice);
    document.querySelectorAll(`[data-choice-id="${questionId}"]`).forEach(button => {
        button.className = getChoiceButtonClass(button.dataset.choiceValue === choice);
    });
}

function getReorderSelectedHtml(questionId) {
    const reorderState = appState.reorderStates[questionId];
    return reorderState.selected.map((word, selectedIndex) => `<button type="button" onclick="returnReorderWord('${questionId}', ${selectedIndex})" class="px-2 py-1 bg-blue-100 border border-blue-300 text-blue-800 shadow-sm rounded text-base font-bold hover:bg-red-100 hover:text-red-600 transition-all">${word}</button>`).join("") || '<span class="text-slate-400 text-sm">単語を選んでください</span>';
}

function getReorderPoolHtml(questionId) {
    const reorderState = appState.reorderStates[questionId];
    return reorderState.pool.map((word, poolIndex) => `<button type="button" onclick="selectReorderWord('${questionId}', ${poolIndex})" class="px-3 py-1 bg-white border border-slate-300 shadow-sm rounded text-base font-medium text-slate-700 hover:border-blue-400 transition-all">${word}</button>`).join("") || '<span class="text-slate-400 text-sm">全て選択済み</span>';
}

function updateReorderQuestion(questionId) {
    const selectedEl = document.querySelector(`[data-reorder-selected="${questionId}"]`);
    const poolEl = document.querySelector(`[data-reorder-pool="${questionId}"]`);
    if (selectedEl) selectedEl.innerHTML = getReorderSelectedHtml(questionId);
    if (poolEl) poolEl.innerHTML = getReorderPoolHtml(questionId);
}

function syncReorderAnswer(questionId) {
    const reorderState = appState.reorderStates[questionId];
    const question = appState.test.sections
        .flatMap(section => section.questions)
        .find(item => item.id === questionId);
    let answer = reorderState.selected.join(" ");
    const finalMark = question?.answer.match(/[.?]$/)?.[0] || "";
    if (answer && finalMark && !/[.?]$/.test(answer)) {
        answer += finalMark;
    }
    appState.answers[questionId] = answer;
}

function selectReorderWord(questionId, poolIndex) {
    const reorderState = appState.reorderStates[questionId];
    reorderState.selected.push(reorderState.pool.splice(poolIndex, 1)[0]);
    syncReorderAnswer(questionId);
    updateReorderQuestion(questionId);
}

function returnReorderWord(questionId, selectedIndex) {
    const reorderState = appState.reorderStates[questionId];
    reorderState.pool.push(reorderState.selected.splice(selectedIndex, 1)[0]);
    syncReorderAnswer(questionId);
    updateReorderQuestion(questionId);
}

function goPrevSection() {
    if (appState.sectionIndex > 0) {
        appState.sectionIndex -= 1;
        renderSection();
    }
}

function goNextSection() {
    if (appState.sectionIndex < appState.test.sections.length - 1) {
        appState.sectionIndex += 1;
        renderSection();
    }
}

function getAllQuestions() {
    return appState.test.sections.flatMap(section => section.questions.map(question => ({ section, question })));
}

function getCorrectAnswers(question) {
    return question.answers || [question.answer];
}

function hasBlankAnswers() {
    return getAllQuestions().some(({ question }) => getQuestionAnswer(question) === "");
}

function submitGrammarCheck() {
    if (hasBlankAnswers() && !window.confirm("未入力の問題があります。このまま採点しますか？")) return;

    const sectionScores = {};
    const questionResults = [];
    let total = 0;

    appState.test.sections.forEach(section => {
        let correct = 0;
        section.questions.forEach(question => {
            const userAnswer = getQuestionAnswer(question);
            const answers = getCorrectAnswers(question);
            const isCorrect = answers.includes(userAnswer);
            if (isCorrect) {
                correct += 1;
                total += 1;
            }
            questionResults.push({ section, question, userAnswer, answers, isCorrect });
        });
        sectionScores[section.id] = { correct, total: section.questions.length };
    });

    saveGrammarCheckBestScore(appState.test.id, total);
    appState.result = { total, sectionScores, questionResults };
    renderResult();
}

function renderResult() {
    const result = appState.result;
    const best = getGrammarCheckBestScore(appState.test.id);
    const badge = getCurrentScoreBadge(result.total);
    renderAppHeader("文法チェック20 結果", `${result.total} / 20`);

    root.innerHTML = `
        <div class="fade-in max-w-4xl mx-auto w-full py-4">
            <div class="bg-white rounded-xl border border-slate-200 shadow-sm p-5 mb-4">
                <div class="text-sm text-slate-500 font-bold mb-1">${appState.test.grade} ${appState.test.title}</div>
                <h2 class="text-2xl font-black text-slate-800 mb-2">今回の点数：${result.total} / 20 ${badge ? `<span class="text-red-500">${badge}</span>` : ""}</h2>
                <div class="text-sm text-slate-600 mb-4">最高点：${best} / 20 ${getCurrentScoreBadge(best)}</div>
                <div class="grid md:grid-cols-2 gap-2">
                    ${appState.test.sections.map(section => {
                        const score = result.sectionScores[section.id];
                        return `<div class="bg-slate-50 rounded-lg border border-slate-100 p-3 text-sm font-bold text-slate-700">${section.title}　${score.correct} / ${score.total}</div>`;
                    }).join("")}
                </div>
            </div>
            <div class="space-y-3">
                ${result.questionResults.map((item, index) => renderResultQuestion(item, index)).join("")}
            </div>
            <div class="mt-5 flex gap-3 justify-center">
                <button onclick="renderGrammarSelect('${appState.test.grade}')" class="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors shadow-sm text-sm font-bold">文法選択へ</button>
                <button onclick="startGrammarCheck('${appState.test.id}')" class="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md text-sm font-bold">もう一度解く</button>
            </div>
        </div>
    `;
    lucide.createIcons();
}

function renderResultQuestion(item, index) {
    const answerText = item.answers.join(" / ");
    return `
        <div class="bg-white p-3 rounded-lg border border-slate-200">
            <div class="flex items-start gap-2">
                <div class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border ${item.isCorrect ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}">
                    <i data-lucide="${item.isCorrect ? "check" : "x"}" class="w-4 h-4"></i>
                </div>
                <div class="flex-grow min-w-0">
                    <div class="text-xs text-slate-500 font-bold mb-1">${item.section.title} Q${index + 1}</div>
                    <div class="text-base font-bold text-slate-800 mb-2">${item.question.question}</div>
                    <div class="grid md:grid-cols-2 gap-2 text-sm mb-2">
                        <div class="bg-slate-50 rounded p-2 border border-slate-100">自分の答え：<span class="font-bold">${escapeHtml(item.userAnswer || "未入力")}</span></div>
                        <div class="bg-blue-50 rounded p-2 border border-blue-100">正解：<span class="font-bold text-blue-700">${escapeHtml(answerText)}</span></div>
                    </div>
                    <button onclick="toggleExplanation('${item.question.id}')" class="text-xs font-bold text-blue-600 hover:text-blue-800">解説を見る</button>
                    <div id="exp-${item.question.id}" class="hidden mt-2 text-sm text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">${item.question.explanation}</div>
                </div>
            </div>
        </div>
    `;
}

function toggleExplanation(questionId) {
    const el = document.getElementById(`exp-${questionId}`);
    if (el) el.classList.toggle("hidden");
}

function escapeJs(value) {
    return String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function escapeHtmlAttr(text) {
    return escapeHtml(text);
}

const params = new URLSearchParams(window.location.search);
const testId = params.get("test");
if (testId) {
    directStart(testId);
} else {
    renderGradeSelect();
}

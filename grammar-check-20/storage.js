const GRAMMAR_CHECK_STORAGE_KEY = "grammar_check_20_best_scores";

function loadGrammarCheckScores() {
    try {
        const raw = localStorage.getItem(GRAMMAR_CHECK_STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

function getGrammarCheckBestScore(testId) {
    const scores = loadGrammarCheckScores();
    return Number.isFinite(scores[testId]) ? scores[testId] : null;
}

function saveGrammarCheckBestScore(testId, score) {
    const scores = loadGrammarCheckScores();
    const current = Number.isFinite(scores[testId]) ? scores[testId] : null;
    if (current == null || score > current) {
        scores[testId] = score;
        localStorage.setItem(GRAMMAR_CHECK_STORAGE_KEY, JSON.stringify(scores));
    }
}

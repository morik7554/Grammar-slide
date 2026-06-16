/*
 * 文法チェック20 問題作成ルール
 * - 20問全体を1つのテストとして見て、同じ英文・同じ日本語文の使い回しを避ける。
 * - 大問1は文法理解、大問2は正確な語句、大問3は語順、大問4は英文作成を確認する。
 * - 主語・動詞・場面が1つに偏りすぎないように分散させる。
 * - 穴埋め・並び替え・和文英訳は完全一致採点に向く、答えが決まりやすい文にする。
 * - 新規追加後は、同一テスト内の重複・類似・偏りを必ず確認する。
 */
window.GRAMMAR_CHECK_TESTS = {
    "g1-be-verb-i-am": {
        id: "g1-be-verb-i-am",
        grade: "中1",
        title: "I am ～ (私は～です)",
        passScore: 16,
        perfectScore: 20,
        sections: [
            {
                id: "choice",
                title: "大問1　選択問題",
                type: "choice",
                questions: [
                    { id: "c1", question: "_____ am Ken.", translation: "私はケンです。", choices: ["I", "You", "He", "She"], answer: "I", explanation: "自分のことを言うときは主語に I を使います。" },
                    { id: "c2", question: "I _____ a student.", translation: "私は学生です。", choices: ["am", "are", "is", "be"], answer: "am", explanation: "I の後ろの be 動詞は am です。" },
                    { id: "c3", question: "I am _____.", translation: "私は幸せです。", choices: ["happy", "a happy", "happily", "happiness"], answer: "happy", explanation: "「私は幸せです」は I am happy. と表します。" },
                    { id: "c4", question: "I am _____ Tokyo.", translation: "私は東京出身です。", choices: ["from", "in", "at", "on"], answer: "from", explanation: "「〜出身です」は am from ... を使います。" },
                    { id: "c5", question: "I _____ not tired.", translation: "私は疲れていません。", choices: ["am", "are", "is", "be"], answer: "am", explanation: "否定文でも I の be 動詞は am です。" },
                    { id: "c6", question: "_____ a singer.", translation: "私は歌手です。", choices: ["I'm", "I", "Am", "My"], answer: "I'm", explanation: "I am は短くして I'm と書けます。" },
                    { id: "c7", question: "Which sentence means 「私は先生です。」?", translation: "「私は先生です。」を表す英文を選びなさい。", choices: ["I am a teacher.", "I is a teacher.", "I are a teacher.", "Am I a teacher."], answer: "I am a teacher.", explanation: "I の後ろは am。teacher は1人なので a teacher とします。" },
                    { id: "c8", question: "Which sentence is correct?", translation: "正しい英文を選びなさい。", choices: ["I am hungry.", "i am hungry.", "I are hungry.", "I am a hungry."], answer: "I am hungry.", explanation: "英語の I はいつも大文字で、I の be 動詞は am です。" }
                ]
            },
            {
                id: "fill",
                title: "大問2　穴埋め問題",
                type: "fill",
                questions: [
                    { id: "f1", question: "I _____ Kenta.", translation: "私はケンタです。", answer: "am", explanation: "I の後ろには am を使います。" },
                    { id: "f2", question: "_____ am from Canada.", translation: "私はカナダ出身です。", answer: "I", explanation: "自分のことを言う主語は I です。" },
                    { id: "f3", question: "I am _____ musician.", translation: "私は音楽家です。", answer: "a", explanation: "musician は1人の人なので a musician とします。" },
                    { id: "f4", question: "I am _____ sleepy.", translation: "私は眠くありません。", answer: "not", explanation: "be 動詞の否定文は be 動詞の後ろに not を置きます。" },
                    { id: "f5", question: "_____ from Osaka.", translation: "私は大阪出身です。", answer: "I'm", explanation: "I'm は I am の短い形です。" }
                ]
            },
            {
                id: "reorder",
                title: "大問3　並び替え問題",
                type: "reorder",
                questions: [
                    { id: "r1", question: "私はケンです。", words: ["I", "am", "Ken"], answer: "I am Ken.", explanation: "主語 I の後ろに am を置きます。" },
                    { id: "r2", question: "私は学生です。", words: ["I", "am", "a", "student"], answer: "I am a student.", explanation: "「私は〜です」は I am ... で始めます。" },
                    { id: "r3", question: "私は幸せです。", words: ["I", "am", "happy"], answer: "I am happy.", explanation: "気持ちや状態は I am + 形容詞で表します。" },
                    { id: "r4", question: "私は日本出身です。", words: ["I", "am", "from", "Japan"], answer: "I am from Japan.", explanation: "出身地は from Japan のように表します。" },
                    { id: "r5", question: "私は疲れていません。", words: ["I", "am", "not", "tired"], answer: "I am not tired.", explanation: "否定文は I am not + 形容詞の形です。" }
                ]
            },
            {
                id: "translation",
                title: "大問4　和文英訳",
                type: "translation",
                questions: [
                    { id: "t1", question: "私は医者です。", hints: ["I", "doctor"], answers: ["I am a doctor.", "I'm a doctor."], explanation: "I am a doctor. が基本形です。I am は I'm にできます。" },
                    { id: "t2", question: "私は札幌出身です。", hints: ["from", "Sapporo"], answers: ["I am from Sapporo.", "I'm from Sapporo."], explanation: "「〜出身です」は am from ... を使います。" }
                ]
            }
        ]
    },
    "g3-present-perfect-continuous": {
        id: "g3-present-perfect-continuous",
        grade: "中3",
        title: "現在完了形（継続）",
        passScore: 16,
        perfectScore: 20,
        sections: [
            {
                id: "choice",
                title: "大問1　選択問題",
                type: "choice",
                questions: [
                    { id: "c1", question: "I have lived in Yokohama _____ ten years.", translation: "私は10年間横浜に住んでいます。", choices: ["for", "since", "from", "during"], answer: "for", explanation: "期間を表す「〜の間」は for を使います。" },
                    { id: "c2", question: "She has studied English _____ last year.", translation: "彼女は去年から英語を勉強しています。", choices: ["since", "for", "before", "yet"], answer: "since", explanation: "始まった時点を表す「〜から」は since を使います。" },
                    { id: "c3", question: "Ken _____ sick for three days.", translation: "ケンは3日間ずっと病気です。", choices: ["has been", "was", "is", "have been"], answer: "has been", explanation: "現在まで続く状態は has been を使います。Ken は三人称単数なので has です。" },
                    { id: "c4", question: "We have known him _____ 2020.", translation: "私たちは2020年から彼を知っています。", choices: ["since", "for", "already", "just"], answer: "since", explanation: "2020 は始まりの時点なので since を使います。" },
                    { id: "c5", question: "How long _____ you lived here?", translation: "あなたはどのくらいここに住んでいますか。", choices: ["have", "has", "did", "are"], answer: "have", explanation: "How long + have/has + 主語 + 過去分詞で継続期間を尋ねます。" },
                    { id: "c6", question: "My brother has played soccer _____ five years.", translation: "私の兄は5年間サッカーをしています。", choices: ["for", "since", "yet", "ago"], answer: "for", explanation: "five years は期間なので for です。" },
                    { id: "c7", question: "They have been friends _____ they were children.", translation: "彼らは子どものころから友達です。", choices: ["since", "for", "during", "already"], answer: "since", explanation: "since の後ろには、過去の時点や文を置くことができます。" },
                    { id: "c8", question: "Which sentence means 「私は2時間待っています」?", translation: "「私は2時間待っています」を表す英文を選びなさい。", choices: ["I have waited for two hours.", "I waited two hours ago.", "I am waiting yesterday.", "I wait since two hours."], answer: "I have waited for two hours.", explanation: "今まで続いている動作は have + 過去分詞で表します。two hours は期間なので for を使います。" }
                ]
            },
            {
                id: "fill",
                title: "大問2　穴埋め問題",
                type: "fill",
                questions: [
                    { id: "f1", question: "I have lived here _____ 2018.", translation: "私は2018年からここに住んでいます。", answer: "since", explanation: "2018 は始まりの時点なので since を使います。" },
                    { id: "f2", question: "She has played the piano _____ six years.", translation: "彼女は6年間ピアノを弾いています。", answer: "for", explanation: "six years は期間なので for です。" },
                    { id: "f3", question: "Ken _____ been busy since Monday.", translation: "ケンは月曜日から忙しいです。", answer: "has", explanation: "Ken は三人称単数なので has been になります。" },
                    { id: "f4", question: "How _____ have you known Yuki?", translation: "あなたはどのくらいユキを知っていますか。", answer: "long", explanation: "期間を尋ねるときは How long を使います。" },
                    { id: "f5", question: "We have _____ in this city for a long time.", translation: "私たちは長い間この町に住んでいます。", answer: "lived", explanation: "現在完了は have + 過去分詞。live の過去分詞は lived です。" }
                ]
            },
            {
                id: "reorder",
                title: "大問3　並び替え問題",
                type: "reorder",
                questions: [
                    { id: "r1", question: "私は5年間英語を勉強しています。", words: ["I", "have", "studied", "English", "for", "five", "years"], answer: "I have studied English for five years.", explanation: "期間は for five years と表します。" },
                    { id: "r2", question: "彼女は去年から大阪に住んでいます。", words: ["She", "has", "lived", "in", "Osaka", "since", "last", "year"], answer: "She has lived in Osaka since last year.", explanation: "始まりの時点は since last year です。" },
                    { id: "r3", question: "あなたはどのくらいここにいますか。", words: ["How", "long", "have", "you", "been", "here?"], answer: "How long have you been here?", explanation: "How long の後ろは疑問文の語順になります。" },
                    { id: "r4", question: "私たちは子どものころから友達です。", words: ["We", "have", "been", "friends", "since", "we", "were", "children"], answer: "We have been friends since we were children.", explanation: "since の後ろに文を続けて、始まりの時点を表せます。" },
                    { id: "r5", question: "ケンは3日間学校を休んでいます。", words: ["Ken", "has", "been", "absent", "from", "school", "for", "three", "days"], answer: "Ken has been absent from school for three days.", explanation: "状態の継続は has been + 形容詞で表します。" }
                ]
            },
            {
                id: "translation",
                title: "大問4　和文英訳",
                type: "translation",
                questions: [
                    { id: "t1", question: "私は3年間テニスをしています。", hints: ["for", "three"], answers: ["I have played tennis for three years."], explanation: "期間を表す for three years を文末に置きます。" },
                    { id: "t2", question: "あなたはどのくらい英語を勉強していますか。", hints: ["How", "studied"], answers: ["How long have you studied English?"], explanation: "How long have you + 過去分詞 ...? の形です。" }
                ]
            }
        ]
    },
    "g3-present-perfect-experience": {
        id: "g3-present-perfect-experience",
        grade: "中3",
        title: "現在完了形（経験）",
        passScore: 16,
        perfectScore: 20,
        sections: [
            {
                id: "choice",
                title: "大問1　選択問題",
                type: "choice",
                questions: [
                    { id: "c1", question: "I have _____ been to Kyoto.", translation: "私は京都へ行ったことがあります。", choices: ["ever", "yet", "just", "for"], answer: "ever", explanation: "経験をたずねたり表したりするとき、ever は「今までに」という意味で使います。" },
                    { id: "c2", question: "She has _____ seen this movie.", translation: "彼女はこの映画を一度も見たことがありません。", choices: ["never", "ever", "already", "yet"], answer: "never", explanation: "never は「一度も〜ない」という経験の否定を表します。" },
                    { id: "c3", question: "Have you _____ eaten natto?", translation: "あなたは今までに納豆を食べたことがありますか。", choices: ["ever", "never", "already", "since"], answer: "ever", explanation: "経験を尋ねる疑問文では ever をよく使います。" },
                    { id: "c4", question: "Ken has visited Nara _____.", translation: "ケンは奈良を2回訪れたことがあります。", choices: ["twice", "yet", "since", "for"], answer: "twice", explanation: "回数は once, twice, three times のように表します。" },
                    { id: "c5", question: "I have never _____ sushi.", translation: "私は一度も寿司を作ったことがありません。", choices: ["made", "make", "making", "makes"], answer: "made", explanation: "現在完了は have + 過去分詞。make の過去分詞は made です。" },
                    { id: "c6", question: "_____ your brother ever played the guitar?", translation: "あなたのお兄さんは今までにギターを弾いたことがありますか。", choices: ["Has", "Have", "Did", "Is"], answer: "Has", explanation: "your brother は三人称単数なので Has で始めます。" },
                    { id: "c7", question: "We have been to Okinawa three _____.", translation: "私たちは沖縄へ3回行ったことがあります。", choices: ["times", "time", "yet", "ever"], answer: "times", explanation: "3回は three times と複数形にします。" },
                    { id: "c8", question: "Which sentence means 「私は一度も北海道へ行ったことがありません」?", translation: "意味が合う英文を選びなさい。", choices: ["I have never been to Hokkaido.", "I have ever been to Hokkaido.", "I went to Hokkaido now.", "I have been Hokkaido never."], answer: "I have never been to Hokkaido.", explanation: "「一度も〜ない」は have never been to ... で表します。" }
                ]
            },
            {
                id: "fill",
                title: "大問2　穴埋め問題",
                type: "fill",
                questions: [
                    { id: "f1", question: "Have you _____ visited Tokyo?", translation: "あなたは今までに東京を訪れたことがありますか。", answer: "ever", explanation: "経験の疑問文では ever を使います。" },
                    { id: "f2", question: "I have _____ played rugby.", translation: "私は一度もラグビーをしたことがありません。", answer: "never", explanation: "never は「一度も〜ない」という意味です。" },
                    { id: "f3", question: "She has read this book _____.", translation: "彼女はこの本を2回読んだことがあります。", answer: "twice", explanation: "2回は twice です。" },
                    { id: "f4", question: "My father has _____ to Canada.", translation: "私の父はカナダへ行ったことがあります。", answer: "been", explanation: "「行ったことがある」は have/has been to です。" },
                    { id: "f5", question: "Have they ever _____ Japanese food?", translation: "彼らは今までに日本食を作ったことがありますか。", answer: "made", explanation: "make の過去分詞は made です。" }
                ]
            },
            {
                id: "reorder",
                title: "大問3　並び替え問題",
                type: "reorder",
                questions: [
                    { id: "r1", question: "私は京都へ行ったことがあります。", words: ["I", "have", "been", "to", "Kyoto"], answer: "I have been to Kyoto.", explanation: "経験の「行ったことがある」は have been to です。" },
                    { id: "r2", question: "あなたは今までに富士山を見たことがありますか。", words: ["Have", "you", "ever", "seen", "Mt.", "Fuji?"], answer: "Have you ever seen Mt. Fuji?", explanation: "疑問文では Have you ever + 過去分詞 ...? を使います。" },
                    { id: "r3", question: "彼女は一度もその歌を聞いたことがありません。", words: ["She", "has", "never", "heard", "the", "song"], answer: "She has never heard the song.", explanation: "never は has の後ろ、過去分詞の前に置きます。" },
                    { id: "r4", question: "ケンはその映画を3回見たことがあります。", words: ["Ken", "has", "seen", "the", "movie", "three", "times"], answer: "Ken has seen the movie three times.", explanation: "回数は文末に three times と置けます。" },
                    { id: "r5", question: "私たちは一度も沖縄へ行ったことがありません。", words: ["We", "have", "never", "been", "to", "Okinawa"], answer: "We have never been to Okinawa.", explanation: "have never been to ... で「一度も行ったことがない」です。" }
                ]
            },
            {
                id: "translation",
                title: "大問4　和文英訳",
                type: "translation",
                questions: [
                    { id: "t1", question: "あなたは今までに京都へ行ったことがありますか。", hints: ["ever", "Kyoto"], answers: ["Have you ever been to Kyoto?"], explanation: "経験の疑問文は Have you ever been to ...? です。" },
                    { id: "t2", question: "私は一度もその映画を見たことがありません。", hints: ["never", "seen"], answers: ["I have never seen the movie.", "I've never seen the movie."], explanation: "never は have の後ろに置きます。" }
                ]
            }
        ]
    },
    "g3-present-perfect-completion": {
        id: "g3-present-perfect-completion",
        grade: "中3",
        title: "現在完了形（完了）",
        passScore: 16,
        perfectScore: 20,
        sections: [
            {
                id: "choice",
                title: "大問1　選択問題",
                type: "choice",
                questions: [
                    { id: "c1", question: "I have _____ finished my homework.", translation: "私はちょうど宿題を終えたところです。", choices: ["just", "ever", "never", "yet"], answer: "just", explanation: "just は「ちょうど〜したところ」という意味で、have の後ろに置きます。" },
                    { id: "c2", question: "She has _____ eaten lunch.", translation: "彼女はすでに昼食を食べました。", choices: ["already", "yet", "ago", "ever"], answer: "already", explanation: "肯定文で「すでに」は already を使います。" },
                    { id: "c3", question: "Have you cleaned your room _____?", translation: "あなたはもう部屋を掃除しましたか。", choices: ["yet", "already", "just", "never"], answer: "yet", explanation: "疑問文で「もう」は yet を文末に置きます。" },
                    { id: "c4", question: "I haven't read the book _____.", translation: "私はまだその本を読んでいません。", choices: ["yet", "already", "just", "ago"], answer: "yet", explanation: "否定文で「まだ」は yet を文末に置きます。" },
                    { id: "c5", question: "The bus has _____ arrived.", translation: "そのバスはちょうど到着したところです。", choices: ["just", "yet", "ever", "yesterday"], answer: "just", explanation: "「ちょうど到着したところ」は has just arrived です。" },
                    { id: "c6", question: "He has _____ gone home.", translation: "彼はすでに家に帰ってしまいました。", choices: ["already", "yet", "ago", "now"], answer: "already", explanation: "「すでに家に帰ってしまった」は has already gone home です。" },
                    { id: "c7", question: "Has Ken come here _____?", translation: "ケンはもうここに来ましたか。", choices: ["yet", "already", "just", "last"], answer: "yet", explanation: "現在完了の疑問文では yet を文末に置きます。" },
                    { id: "c8", question: "We have _____ finished the work.", translation: "私たちはすでにその仕事を終えました。", choices: ["already", "yet", "ago", "then"], answer: "already", explanation: "肯定文の「もう・すでに」は already が自然です。" }
                ]
            },
            {
                id: "fill",
                title: "大問2　穴埋め問題",
                type: "fill",
                questions: [
                    { id: "f1", question: "I have _____ finished my lunch.", translation: "私はちょうど昼食を終えたところです。", answer: "just", explanation: "「ちょうど」は just。have just finished の語順です。" },
                    { id: "f2", question: "She has _____ finished her homework.", translation: "彼女はすでに宿題を終えました。", answer: "already", explanation: "肯定文の「すでに」は already を使います。" },
                    { id: "f3", question: "Have you finished your homework _____?", translation: "あなたはもう宿題を終えましたか。", answer: "yet", explanation: "疑問文の「もう」は yet を文末に置きます。" },
                    { id: "f4", question: "I haven't cleaned my room _____.", translation: "私はまだ部屋を掃除していません。", answer: "yet", explanation: "否定文の「まだ」は yet を文末に置きます。" },
                    { id: "f5", question: "Ken has _____ left for school.", translation: "ケンはちょうど学校へ出発したところです。", answer: "just", explanation: "「ちょうど出発したところ」は has just left です。" }
                ]
            },
            {
                id: "reorder",
                title: "大問3　並び替え問題",
                type: "reorder",
                questions: [
                    { id: "r1", question: "私はちょうど宿題を終えたところです。", words: ["I", "have", "just", "finished", "my", "homework"], answer: "I have just finished my homework.", explanation: "just は have の後ろに置きます。" },
                    { id: "r2", question: "彼女はすでに昼食を食べました。", words: ["She", "has", "already", "eaten", "lunch"], answer: "She has already eaten lunch.", explanation: "already は has の後ろに置きます。" },
                    { id: "r3", question: "あなたはもうその本を読みましたか。", words: ["Have", "you", "read", "the", "book", "yet?"], answer: "Have you read the book yet?", explanation: "疑問文は Have you + 過去分詞、yet は文末です。" },
                    { id: "r4", question: "彼らはまだ夕食を食べていません。", words: ["They", "haven't", "eaten", "dinner", "yet"], answer: "They haven't eaten dinner yet.", explanation: "否定文は haven't + 過去分詞、yet は文末です。" },
                    { id: "r5", question: "その電車はちょうど出発したところです。", words: ["The", "train", "has", "just", "left"], answer: "The train has just left.", explanation: "単数主語なので has just left になります。" }
                ]
            },
            {
                id: "translation",
                title: "大問4　和文英訳",
                type: "translation",
                questions: [
                    {
                        id: "t1",
                        question: "私はちょうどレポートを終えたところです。",
                        hints: ["just", "report"],
                        answers: ["I have just finished my report.", "I've just finished my report."],
                        explanation: "have just + 過去分詞で「ちょうど〜したところ」を表します。"
                    },
                    {
                        id: "t2",
                        question: "あなたはもう昼食を食べましたか。",
                        hints: ["eaten", "yet"],
                        answers: ["Have you eaten lunch yet?", "Have you had lunch yet?"],
                        explanation: "疑問文では Have you + 過去分詞、yet は文末に置きます。"
                    }
                ]
            }
        ]
    },
    "g3-present-perfect-summary": {
        id: "g3-present-perfect-summary",
        grade: "中3",
        title: "現在完了形まとめ",
        passScore: 16,
        perfectScore: 20,
        sections: [
            {
                id: "choice",
                title: "大問1　選択問題",
                type: "choice",
                questions: [
                    { id: "c1", question: "I have lived here _____ ten years.", translation: "私は10年間ここに住んでいます。", choices: ["for", "since", "ever", "yet"], answer: "for", explanation: "ten years は期間なので for を使います。" },
                    { id: "c2", question: "Have you _____ been to Nara?", translation: "あなたは今までに奈良へ行ったことがありますか。", choices: ["ever", "never", "already", "for"], answer: "ever", explanation: "経験を尋ねる疑問文では ever をよく使います。" },
                    { id: "c3", question: "She has _____ finished her report.", translation: "彼女はすでにレポートを終えました。", choices: ["already", "yet", "ever", "since"], answer: "already", explanation: "完了用法の肯定文では already を使えます。" },
                    { id: "c4", question: "I haven't cleaned my desk _____.", translation: "私はまだ机を掃除していません。", choices: ["yet", "already", "ever", "for"], answer: "yet", explanation: "否定文の「まだ」は yet を文末に置きます。" },
                    { id: "c5", question: "Ken has _____ soccer since he was seven.", translation: "ケンは7歳のころからサッカーをしています。", choices: ["played", "play", "playing", "plays"], answer: "played", explanation: "現在完了は has + 過去分詞。play の過去分詞は played です。" },
                    { id: "c6", question: "We have _____ seen snow in April.", translation: "私たちは4月に雪を見たことが一度もありません。", choices: ["never", "ever", "just", "yet"], answer: "never", explanation: "never は「一度も〜ない」という経験の否定です。" },
                    { id: "c7", question: "How long _____ you known Yuki?", translation: "あなたはどのくらいユキを知っていますか。", choices: ["have", "has", "did", "are"], answer: "have", explanation: "How long + have/has + 主語 + 過去分詞で期間を尋ねます。" },
                    { id: "c8", question: "The train has _____ left.", translation: "その電車はちょうど出発したところです。", choices: ["just", "ever", "for", "since"], answer: "just", explanation: "just は「ちょうど〜したところ」で、have/has の後ろに置きます。" }
                ]
            },
            {
                id: "fill",
                title: "大問2　穴埋め問題",
                type: "fill",
                questions: [
                    { id: "f1", question: "I have studied English _____ five years.", translation: "私は5年間英語を勉強しています。", answer: "for", explanation: "five years は期間なので for です。" },
                    { id: "f2", question: "She has lived in Japan _____ 2021.", translation: "彼女は2021年から日本に住んでいます。", answer: "since", explanation: "2021 は始まりの時点なので since です。" },
                    { id: "f3", question: "Have you _____ seen this movie?", translation: "あなたは今までにこの映画を見たことがありますか。", answer: "ever", explanation: "経験を尋ねる疑問文では ever を使います。" },
                    { id: "f4", question: "I have _____ finished my homework.", translation: "私はちょうど宿題を終えたところです。", answer: "just", explanation: "「ちょうど」は just。have just finished の語順です。" },
                    { id: "f5", question: "He has _____ been to Hokkaido.", translation: "彼は一度も北海道へ行ったことがありません。", answer: "never", explanation: "「一度も〜ない」は never で表します。" }
                ]
            },
            {
                id: "reorder",
                title: "大問3　並び替え問題",
                type: "reorder",
                questions: [
                    { id: "r1", question: "私は3年間ここに住んでいます。", words: ["I", "have", "lived", "here", "for", "three", "years"], answer: "I have lived here for three years.", explanation: "継続の期間は for three years とします。" },
                    { id: "r2", question: "あなたは今までに大阪へ行ったことがありますか。", words: ["Have", "you", "ever", "been", "to", "Osaka?"], answer: "Have you ever been to Osaka?", explanation: "経験の疑問文は Have you ever been to ...? です。" },
                    { id: "r3", question: "私たちはすでに昼食を食べました。", words: ["We", "have", "already", "eaten", "lunch"], answer: "We have already eaten lunch.", explanation: "already は have の後ろ、過去分詞の前に置きます。" },
                    { id: "r4", question: "ケンはまだその本を読んでいません。", words: ["Ken", "hasn't", "read", "the", "book", "yet"], answer: "Ken hasn't read the book yet.", explanation: "否定文では hasn't + 過去分詞、yet は文末です。" },
                    { id: "r5", question: "彼女は子どものころからピアノを弾いています。", words: ["She", "has", "played", "the", "piano", "since", "she", "was", "a", "child"], answer: "She has played the piano since she was a child.", explanation: "since の後ろに文を続けて、始まりの時点を表します。" }
                ]
            },
            {
                id: "translation",
                title: "大問4　和文英訳",
                type: "translation",
                questions: [
                    { id: "t1", question: "私は4年間ピアノを練習しています。", hints: ["practiced", "four"], answers: ["I have practiced the piano for four years.", "I've practiced the piano for four years."], explanation: "継続は have + 過去分詞、期間は for four years です。" },
                    { id: "t2", question: "あなたはもう宿題を終えましたか。", hints: ["finished", "yet"], answers: ["Have you finished your homework yet?"], explanation: "完了用法の疑問文では yet を文末に置きます。" }
                ]
            }
        ]
    }
};

(function addGeneratedGrade1Tests() {
    function makeChoices(answer, distractors) {
        const choices = [answer, ...distractors].filter((value, index, array) => array.indexOf(value) === index);
        return choices.slice(0, 4);
    }

    function sentenceToWords(sentence) {
        const words = sentence.trim().split(/\s+/);
        return words.map((word, index) => {
            if (index !== words.length - 1) return word;
            return word.replace(/\.$/, "");
        });
    }

    function getHints(sentence) {
        const words = sentenceToWords(sentence).filter(word => !["I", "You", "He", "She", "It", "This", "That", "We", "They", "a", "an", "the"].includes(word));
        return (words.length >= 2 ? words.slice(0, 2) : sentenceToWords(sentence).slice(0, 2));
    }

    function applyVariant(example, sectionType, index) {
        const sectionSpecificVariants = [
            { from: "a student", jp: "学生", fill: ["a teacher", "先生"], reorder: ["a player", "選手"], translation: ["a member", "部員"], meaning: ["a leader", "リーダー"] },
            { from: "a teacher", jp: "先生", fill: ["a doctor", "医者"], reorder: ["a coach", "コーチ"], translation: ["a writer", "作家"], meaning: ["a singer", "歌手"] },
            { from: "my friend", jp: "私の友達", fill: ["my classmate", "私のクラスメート"], reorder: ["my teammate", "私のチームメート"], translation: ["my neighbor", "私の近所の人"], meaning: ["my cousin", "私のいとこ"] },
            { from: "my brother", jp: "私の兄", fill: ["my uncle", "私のおじ"], reorder: ["my father", "私の父"], translation: ["my cousin", "私のいとこ"], meaning: ["my teammate", "私のチームメート"] },
            { from: "my sister", jp: "私の妹", fill: ["my cousin", "私のいとこ"], reorder: ["my mother", "私の母"], translation: ["my classmate", "私のクラスメート"], meaning: ["my friend", "私の友達"] },
            { from: "my book", jp: "私の本", fill: ["my notebook", "私のノート"], reorder: ["my dictionary", "私の辞書"], translation: ["my bag", "私のかばん"], meaning: ["my album", "私のアルバム"] },
            { from: "your pen", jp: "あなたのペン", fill: ["your pencil", "あなたの鉛筆"], reorder: ["your notebook", "あなたのノート"], translation: ["your bag", "あなたのかばん"], meaning: ["your eraser", "あなたの消しゴム"] },
            { from: "my school", jp: "私の学校", fill: ["my club", "私の部活"], reorder: ["my classroom", "私の教室"], translation: ["my house", "私の家"], meaning: ["my town", "私の町"] },
            { from: "a cat", jp: "猫", fill: ["a dog", "犬"], reorder: ["a bird", "鳥"], translation: ["a rabbit", "うさぎ"], meaning: ["a fish", "魚"] },
            { from: "new", jp: "新しく", fill: ["old", "古く"], reorder: ["small", "小さく"], translation: ["big", "大きく"], meaning: ["clean", "きれいでは"] },
            { from: "kind", jp: "親切", fill: ["helpful", "手助けしてくれる人"], reorder: ["friendly", "友好的"], translation: ["popular", "人気"], meaning: ["careful", "注意深い"] },
            { from: "happy", jp: "幸せ", fill: ["excited", "わくわくして"], reorder: ["ready", "準備ができて"], translation: ["fine", "元気"], meaning: ["sleepy", "眠い"] },
            { from: "tired", jp: "疲れて", fill: ["hungry", "お腹がすいて"], reorder: ["sleepy", "眠く"], translation: ["happy", "幸せでは"], meaning: ["sad", "悲しく"] },
            { from: "busy", jp: "忙しく", fill: ["ready", "準備ができて"], reorder: ["kind", "親切では"], translation: ["free", "ひまでは"], meaning: ["quiet", "静かでは"] },
            { from: "Tokyo", jp: "東京", fill: ["Sapporo", "札幌"], reorder: ["Yokohama", "横浜"], translation: ["Nara", "奈良"], meaning: ["Nagoya", "名古屋"] },
            { from: "soccer", jp: "サッカー", fill: ["basketball", "バスケットボール"], reorder: ["tennis", "テニス"], translation: ["volleyball", "バレーボール"], meaning: ["baseball", "野球"] },
            { from: "tennis", jp: "テニス", fill: ["badminton", "バドミントン"], reorder: ["baseball", "野球"], translation: ["table tennis", "卓球"], meaning: ["basketball", "バスケットボール"] },
            { from: "music", jp: "音楽", fill: ["movies", "映画"], reorder: ["English songs", "英語の歌"], translation: ["books", "本"], meaning: ["art", "美術"] },
            { from: "English", jp: "英語", fill: ["math", "数学"], reorder: ["science", "理科"], translation: ["Japanese", "国語"], meaning: ["history", "歴史"] },
            { from: "school", jp: "学校", fill: ["the library", "図書館"], reorder: ["the park", "公園"], translation: ["the station", "駅"], meaning: ["the classroom", "教室"] },
            { from: "breakfast", jp: "朝食", fill: ["dinner", "夕食"], reorder: ["lunch", "昼食"], translation: ["supper", "夕食"], meaning: ["snacks", "おやつ"] },
            { from: "dinner", jp: "夕食", fill: ["breakfast", "朝食"], reorder: ["lunch", "昼食"], translation: ["a cake", "ケーキ"], meaning: ["a sandwich", "サンドイッチ"] },
            { from: "homework", jp: "宿題", fill: ["the report", "レポート"], reorder: ["the worksheet", "ワークシート"], translation: ["the project", "企画"], meaning: ["the poster", "ポスター"] },
            { from: "TV", jp: "テレビ", fill: ["a movie", "映画"], reorder: ["a video", "動画"], translation: ["a soccer game", "サッカーの試合"], meaning: ["a drama", "ドラマ"] }
        ];
        if (example.en.includes("not tired") && example.jp.includes("疲れていません")) {
            const replacements = {
                fill: ["not sleepy", "眠くありません"],
                reorder: ["not hungry", "お腹がすいていません"],
                translation: ["not busy", "忙しくありません"],
                meaning: ["not sad", "悲しくありません"]
            };
            const replacement = replacements[sectionType];
            if (replacement) {
                const next = { ...example };
                next.en = next.en.replace("not tired", replacement[0]);
                next.jp = next.jp.replace("疲れていません", replacement[1]);
                next.blank = next.blank.replace("not tired", replacement[0]).replace("tired", replacement[0].replace("not ", ""));
                next.hints = getHints(next.en);
                next.answers = [next.en];
                return next;
            }
        }
        if (example.en.includes("not busy") && example.jp.includes("忙しくありません")) {
            const replacements = {
                fill: ["not ready", "準備ができていません"],
                reorder: ["not quiet", "静かではありません"],
                translation: ["not free", "ひまではありません"],
                meaning: ["not careful", "注意深くありません"]
            };
            const replacement = replacements[sectionType];
            if (replacement) {
                const next = { ...example };
                next.en = next.en.replace("not busy", replacement[0]);
                next.jp = next.jp.replace("忙しくありません", replacement[1]);
                next.blank = next.blank.replace("not busy", replacement[0]).replace("busy", replacement[0].replace("not ", ""));
                next.hints = getHints(next.en);
                next.answers = [next.en];
                return next;
            }
        }
        const sectionVariant = sectionSpecificVariants.find(item => nextIncludes(example, item.from, item.jp));
        if (sectionVariant && sectionVariant[sectionType]) {
            const [to, jpTo] = sectionVariant[sectionType];
            const next = { ...example };
            next.en = next.en.replace(sectionVariant.from, to);
            next.jp = next.jp.replace(sectionVariant.jp, jpTo);
            next.blank = next.blank.replace(sectionVariant.from, to);
            next.hints = getHints(next.en);
            next.answers = [next.en];
            return next;
        }

        const commonVariants = [
            ["a student", "a teacher", "学生", "先生"],
            ["a teacher", "a doctor", "先生", "医者"],
            ["my friend", "my classmate", "私の友達", "私のクラスメート"],
            ["my brother", "my uncle", "私の兄", "私のおじ"],
            ["my sister", "my cousin", "私の妹", "私のいとこ"],
            ["my book", "my notebook", "私の本", "私のノート"],
            ["your pen", "your pencil", "あなたのペン", "あなたの鉛筆"],
            ["my school", "my club", "私の学校", "私の部活"],
            ["a cat", "a dog", "猫", "犬"],
            ["new", "old", "新しく", "古く"],
            ["kind", "helpful", "親切", "手助けしてくれる人"],
            ["happy", "excited", "幸せ", "わくわくして"],
            ["hungry", "thirsty", "お腹がすいて", "のどがかわいて"],
            ["busy", "ready", "忙しく", "準備ができて"],
            ["Tokyo", "Sapporo", "東京", "札幌"],
            ["the book", "the magazine", "その本", "その雑誌"],
            ["homework", "the report", "宿題", "レポート"],
            ["lunch", "breakfast", "昼食", "朝食"],
            ["room", "desk", "部屋", "机"],
            ["the work", "the project", "その仕事", "その企画"],
            ["the movie", "the video", "その映画", "その動画"],
            ["the song", "the story", "その歌", "その物語"],
            ["Kyoto", "Nara", "京都", "奈良"],
            ["Hokkaido", "Okinawa", "北海道", "沖縄"],
            ["Yokohama", "Kobe", "横浜", "神戸"],
            ["five years", "four years", "5年間", "4年間"],
            ["three years", "two years", "3年間", "2年間"],
            ["two hours", "thirty minutes", "2時間", "30分"],
            ["last year", "last spring", "去年", "この前の春"],
            ["since Monday", "since Tuesday", "月曜日から", "火曜日から"]
        ];
        const lexicalVariants = {
            fill: [
                ["soccer", "basketball", "サッカー", "バスケットボール"],
                ["music", "movies", "音楽", "映画"],
                ["English", "math", "英語", "数学"],
                ["Osaka", "Kyoto", "大阪", "京都"],
                ["Japan", "Canada", "日本", "カナダ"],
                ["school", "the library", "学校", "図書館"],
                ["breakfast", "dinner", "朝食", "夕食"],
                ["tired", "hungry", "疲れて", "お腹がすいて"],
                ["busy", "free", "忙しく", "ひまでは"]
            ],
            reorder: [
                ["soccer", "tennis", "サッカー", "テニス"],
                ["music", "English songs", "音楽", "英語の歌"],
                ["English", "science", "英語", "理科"],
                ["Osaka", "Yokohama", "大阪", "横浜"],
                ["Japan", "Australia", "日本", "オーストラリア"],
                ["school", "the park", "学校", "公園"],
                ["breakfast", "lunch", "朝食", "昼食"],
                ["tired", "sleepy", "疲れて", "眠く"],
                ["busy", "kind", "忙しく", "親切では"]
            ],
            translation: [
                ["soccer", "volleyball", "サッカー", "バレーボール"],
                ["music", "books", "音楽", "本"],
                ["English", "Japanese", "英語", "国語"],
                ["Osaka", "Nara", "大阪", "奈良"],
                ["Japan", "Korea", "日本", "韓国"],
                ["school", "the station", "学校", "駅"],
                ["breakfast", "dinner", "朝食", "夕食"],
                ["tired", "happy", "疲れて", "幸せでは"],
                ["busy", "ready", "忙しく", "準備ができて"]
            ],
            meaning: [
                ["soccer", "baseball", "サッカー", "野球"],
                ["music", "art", "音楽", "美術"],
                ["English", "history", "英語", "歴史"],
                ["Osaka", "Nagoya", "大阪", "名古屋"],
                ["Japan", "America", "日本", "アメリカ"],
                ["school", "the classroom", "学校", "教室"],
                ["breakfast", "lunch", "朝食", "昼食"],
                ["tired", "sad", "疲れて", "悲しく"],
                ["busy", "quiet", "忙しく", "静かでは"]
            ]
        };
        const variants = [...(lexicalVariants[sectionType] || []), ...commonVariants];
        let next = { ...example };
        const sectionOffsets = { fill: 0, reorder: 11, translation: 22, meaning: 33 };
        const startIndex = index + (sectionOffsets[sectionType] || 0);
        const variant = variants
            .map((item, itemIndex) => variants[(startIndex + itemIndex) % variants.length])
            .find(item => next.en.includes(item[0]) && next.jp.includes(item[2]));
        if (variant) {
            next.en = next.en.replace(variant[0], variant[1]);
            next.jp = next.jp.replace(variant[2], variant[3]);
            next.blank = next.blank.replace(variant[0], variant[1]);
        }
        next = addSectionContext(next, sectionType);
        next.hints = getHints(next.en);
        next.answers = [next.en];
        return next;
    }

    function addSectionContext(example, sectionType) {
        if (sectionType === "choice" || sectionType === "meaning") return example;
        const contexts = {
            fill: {
                statement: ["today", "今日"],
                question: ["now", "今"],
                past: ["with my friends", "友達と"]
            },
            reorder: {
                statement: ["after school", "放課後"],
                question: ["today", "今日"],
                past: ["at the park", "公園で"]
            },
            translation: {
                statement: ["on weekends", "週末に"],
                question: ["after class", "授業の後"],
                past: ["after dinner", "夕食後に"]
            }
        };
        const contextSet = contexts[sectionType];
        if (!contextSet) return example;
        const isQuestion = /\?$/.test(example.en);
        const isPast = /\b(yesterday|last|ago)\b/.test(example.en);
        if (/\bfrom [A-Z]/.test(example.en) || isPast) return example;
        const [enContext, jpContext] = isPast ? contextSet.past : isQuestion ? contextSet.question : contextSet.statement;
        const punct = isQuestion ? "?" : ".";
        const baseEn = example.en.replace(/[.?]$/, "");
        const baseBlank = example.blank.replace(/[.?]$/, "");
        return {
            ...example,
            en: `${baseEn} ${enContext}${punct}`,
            jp: `${jpContext}、${example.jp}`,
            blank: `${baseBlank} ${enContext}${punct}`
        };
    }

    function nextIncludes(example, enPart, jpPart) {
        return example.en.includes(enPart) && example.jp.includes(jpPart);
    }

    function getSectionExamples(spec, sectionType, count) {
        if (spec[`${sectionType}Examples`]) return spec[`${sectionType}Examples`].slice(0, count);
        const offset = sectionType === "fill" ? 1 : sectionType === "reorder" ? 2 : 3;
        return Array.from({ length: count }, (_, index) => {
            const base = spec.examples[(index + offset) % spec.examples.length];
            return applyVariant(base, sectionType, index);
        });
    }

    function makeGeneratedTest(spec) {
        const choiceExamples = getSectionExamples(spec, "choice", 5);
        const fillExamples = getSectionExamples(spec, "fill", 5);
        const reorderExamples = getSectionExamples(spec, "reorder", 5);
        const translationExamples = getSectionExamples(spec, "translation", 2);
        const sentenceChoiceExamples = getSectionExamples(spec, "meaning", 3);

        const choiceQuestions = choiceExamples.map((example, index) => ({
            id: `c${index + 1}`,
            question: example.blank,
            translation: example.jp,
            choices: makeChoices(example.answer, example.distractors || spec.distractors),
            answer: example.answer,
            explanation: example.explanation || spec.rule
        }));

        sentenceChoiceExamples.forEach((example, index) => {
            choiceQuestions.push({
                id: `c${index + 6}`,
                question: example.blank,
                translation: example.jp,
                choices: makeChoices(example.answer, example.distractors || spec.distractors),
                answer: example.answer,
                explanation: spec.rule
            });
        });

        return {
            id: spec.id,
            grade: "中1",
            title: spec.title,
            passScore: 16,
            perfectScore: 20,
            sections: [
                {
                    id: "choice",
                    title: "大問1　選択問題",
                    type: "choice",
                    questions: choiceQuestions
                },
                {
                    id: "fill",
                    title: "大問2　穴埋め問題",
                    type: "fill",
                    questions: fillExamples.map((example, index) => ({
                        id: `f${index + 1}`,
                        question: example.blank,
                        translation: example.jp,
                        answer: example.answer,
                        explanation: example.explanation || spec.rule
                    }))
                },
                {
                    id: "reorder",
                    title: "大問3　並び替え問題",
                    type: "reorder",
                    questions: reorderExamples.map((example, index) => ({
                        id: `r${index + 1}`,
                        question: example.jp,
                        words: sentenceToWords(example.en),
                        answer: example.en,
                        explanation: spec.rule
                    }))
                },
                {
                    id: "translation",
                    title: "大問4　和文英訳",
                    type: "translation",
                    questions: translationExamples.map((example, index) => ({
                        id: `t${index + 1}`,
                        question: example.jp,
                        hints: example.hints || getHints(example.en),
                        answers: example.answers || [example.en],
                        explanation: spec.rule
                    }))
                }
            ]
        };
    }

    const grade1Specs = [
        {
            id: "g1-be-verb-you-are",
            title: "You are ～ (あなたは～です)",
            rule: "You の後ろの be 動詞は are です。You are は You're と短くできます。",
            distractors: ["am", "is", "be"],
            wrongSentences: ["You is a student.", "You am a student.", "Are you a student."],
            examples: [
                { jp: "あなたは学生です。", en: "You are a student.", blank: "You _____ a student.", answer: "are", hints: ["You", "student"] },
                { jp: "あなたは親切です。", en: "You are kind.", blank: "You _____ kind.", answer: "are", hints: ["You", "kind"] },
                { jp: "あなたは大阪出身です。", en: "You are from Osaka.", blank: "You are _____ Osaka.", answer: "from" },
                { jp: "あなたは疲れていません。", en: "You are not tired.", blank: "You are _____ tired.", answer: "not" },
                { jp: "あなたは私の友達です。", en: "You are my friend.", blank: "You _____ my friend.", answer: "are" }
            ]
        },
        {
            id: "g1-be-verb-he-she-is",
            title: "He/She is ～ (彼は/彼女は～です)",
            rule: "He と She の後ろの be 動詞は is です。He is は He's、She is は She's と短くできます。",
            distractors: ["am", "are", "be"],
            wrongSentences: ["He are my brother.", "She am kind.", "He my teacher."],
            examples: [
                { jp: "彼は私の兄です。", en: "He is my brother.", blank: "He _____ my brother.", answer: "is", hints: ["He", "brother"] },
                { jp: "彼女は親切です。", en: "She is kind.", blank: "She _____ kind.", answer: "is", hints: ["She", "kind"] },
                { jp: "彼は先生です。", en: "He is a teacher.", blank: "He is _____ teacher.", answer: "a" },
                { jp: "彼女は忙しくありません。", en: "She is not busy.", blank: "She is _____ busy.", answer: "not" },
                { jp: "彼は東京出身です。", en: "He is from Tokyo.", blank: "He is _____ Tokyo.", answer: "from" }
            ]
        },
        {
            id: "g1-be-verb-this-that",
            title: "This is ～ / That is ～",
            rule: "近くのものは This is、遠くのものは That is を使います。どちらも be 動詞は is です。",
            distractors: ["are", "am", "be"],
            wrongSentences: ["This are my bag.", "That am a cat.", "This my book."],
            examples: [
                { jp: "これは私の本です。", en: "This is my book.", blank: "This _____ my book.", answer: "is", hints: ["This", "book"] },
                { jp: "あれは猫です。", en: "That is a cat.", blank: "That is _____ cat.", answer: "a", hints: ["That", "cat"] },
                { jp: "これはあなたのペンです。", en: "This is your pen.", blank: "This _____ your pen.", answer: "is" },
                { jp: "あれは私の学校です。", en: "That is my school.", blank: "That _____ my school.", answer: "is" },
                { jp: "これは新しくありません。", en: "This is not new.", blank: "This is _____ new.", answer: "not" }
            ]
        },
        {
            id: "g1-be-verb-usage",
            title: "be動詞の使い分け (am / are / is)",
            rule: "I は am、You と複数は are、I と You 以外の単数は is を使います。",
            distractors: ["am", "are", "is"],
            wrongSentences: ["I are happy.", "You is kind.", "He are busy."],
            examples: [
                { jp: "私は幸せです。", en: "I am happy.", blank: "I _____ happy.", answer: "am", hints: ["I", "happy"] },
                { jp: "あなたは親切です。", en: "You are kind.", blank: "You _____ kind.", answer: "are", hints: ["You", "kind"] },
                { jp: "彼は忙しいです。", en: "He is busy.", blank: "He _____ busy.", answer: "is" },
                { jp: "彼らは学生です。", en: "They are students.", blank: "They _____ students.", answer: "are" },
                { jp: "これは私のペンです。", en: "This is my pen.", blank: "This _____ my pen.", answer: "is" }
            ]
        },
        {
            id: "g1-be-verb-negative",
            title: "be動詞の否定文",
            rule: "be 動詞の否定文は、be 動詞の後ろに not を置きます。",
            distractors: ["no", "do", "does"],
            wrongSentences: ["I not am tired.", "You do not are busy.", "He not is my brother."],
            examples: [
                { jp: "私は疲れていません。", en: "I am not tired.", blank: "I am _____ tired.", answer: "not", hints: ["not", "tired"] },
                { jp: "あなたは忙しくありません。", en: "You are not busy.", blank: "You are _____ busy.", answer: "not", hints: ["not", "busy"] },
                { jp: "彼は私の兄ではありません。", en: "He is not my brother.", blank: "He is _____ my brother.", answer: "not" },
                { jp: "これは私のペンではありません。", en: "This is not my pen.", blank: "This is _____ my pen.", answer: "not" },
                { jp: "彼らは先生ではありません。", en: "They are not teachers.", blank: "They are _____ teachers.", answer: "not" }
            ]
        },
        {
            id: "g1-be-verb-question",
            title: "be動詞の疑問文",
            rule: "be 動詞の疑問文は、be 動詞を主語の前に出します。",
            distractors: ["Do", "Does", "Is"],
            wrongSentences: ["You are busy?", "Do you are busy?", "He is a student?"],
            examples: [
                { jp: "あなたは忙しいですか。", en: "Are you busy?", blank: "_____ you busy?", answer: "Are", hints: ["Are", "busy"] },
                { jp: "彼は学生ですか。", en: "Is he a student?", blank: "_____ he a student?", answer: "Is", hints: ["Is", "student"] },
                { jp: "彼女は親切ですか。", en: "Is she kind?", blank: "_____ she kind?", answer: "Is" },
                { jp: "これはあなたの本ですか。", en: "Is this your book?", blank: "_____ this your book?", answer: "Is" },
                { jp: "彼らは友達ですか。", en: "Are they friends?", blank: "_____ they friends?", answer: "Are" }
            ]
        },
        {
            id: "g1-be-verb-summary",
            title: "be動詞のまとめ (肯定・否定・疑問)",
            rule: "be 動詞は主語に合わせ、否定文は not、疑問文は be 動詞を前に出します。",
            distractors: ["am", "are", "is", "not"],
            wrongSentences: ["I are not tired.", "Do you are busy?", "He are a student."],
            examples: [
                { jp: "私は学生です。", en: "I am a student.", blank: "I _____ a student.", answer: "am", hints: ["I", "student"] },
                { jp: "あなたは忙しくありません。", en: "You are not busy.", blank: "You are _____ busy.", answer: "not", hints: ["not", "busy"] },
                { jp: "彼は先生ですか。", en: "Is he a teacher?", blank: "_____ he a teacher?", answer: "Is" },
                { jp: "彼女は私の友達です。", en: "She is my friend.", blank: "She _____ my friend.", answer: "is" },
                { jp: "彼らは生徒ですか。", en: "Are they students?", blank: "_____ they students?", answer: "Are" }
            ]
        },
        {
            id: "g1-general-verb-intro",
            title: "一般動詞とは？ (肯定文)",
            rule: "一般動詞は play, like, study などの動作や状態を表す動詞です。肯定文は主語の後ろに動詞を置きます。",
            distractors: ["am", "are", "is"],
            wrongSentences: ["I am play soccer.", "You are like music.", "We are study English."],
            examples: [
                { jp: "私はサッカーをします。", en: "I play soccer.", blank: "I _____ soccer.", answer: "play", hints: ["play", "soccer"] },
                { jp: "あなたは音楽が好きです。", en: "You like music.", blank: "You _____ music.", answer: "like", hints: ["like", "music"] },
                { jp: "私たちは英語を勉強します。", en: "We study English.", blank: "We _____ English.", answer: "study" },
                { jp: "彼らは学校へ行きます。", en: "They go to school.", blank: "They _____ to school.", answer: "go" },
                { jp: "私は朝食を食べます。", en: "I eat breakfast.", blank: "I _____ breakfast.", answer: "eat" }
            ]
        },
        {
            id: "g1-general-verb-negative",
            title: "一般動詞の否定文",
            rule: "一般動詞の否定文は、動詞の前に don't を置き、動詞は原形にします。",
            distractors: ["am not", "isn't", "aren't"],
            wrongSentences: ["I not play soccer.", "I don't plays soccer.", "You aren't like music."],
            examples: [
                { jp: "私はサッカーをしません。", en: "I don't play soccer.", blank: "I _____ play soccer.", answer: "don't", hints: ["don't", "play"] },
                { jp: "あなたは音楽が好きではありません。", en: "You don't like music.", blank: "You _____ like music.", answer: "don't", hints: ["don't", "like"] },
                { jp: "私たちは英語を勉強しません。", en: "We don't study English.", blank: "We _____ study English.", answer: "don't" },
                { jp: "彼らは学校へ行きません。", en: "They don't go to school.", blank: "They _____ go to school.", answer: "don't" },
                { jp: "私は朝食を食べません。", en: "I don't eat breakfast.", blank: "I _____ eat breakfast.", answer: "don't" }
            ]
        },
        {
            id: "g1-general-verb-question",
            title: "一般動詞の疑問文",
            rule: "一般動詞の疑問文は、文の最初に Do を置き、動詞は原形にします。",
            distractors: ["Are", "Is", "Does"],
            wrongSentences: ["You play soccer?", "Are you play soccer?", "Do you plays soccer?"],
            examples: [
                { jp: "あなたはサッカーをしますか。", en: "Do you play soccer?", blank: "_____ you play soccer?", answer: "Do", hints: ["Do", "play"] },
                { jp: "あなたは音楽が好きですか。", en: "Do you like music?", blank: "_____ you like music?", answer: "Do", hints: ["Do", "like"] },
                { jp: "彼らは英語を勉強しますか。", en: "Do they study English?", blank: "_____ they study English?", answer: "Do" },
                { jp: "あなたたちは学校へ行きますか。", en: "Do you go to school?", blank: "_____ you go to school?", answer: "Do" },
                { jp: "あなたは朝食を食べますか。", en: "Do you eat breakfast?", blank: "_____ you eat breakfast?", answer: "Do" }
            ]
        },
        {
            id: "g1-general-verb-summary",
            title: "一般動詞のまとめ (肯定・否定・疑問)",
            rule: "一般動詞は肯定文ではそのまま、否定文では don't、疑問文では Do を使います。",
            distractors: ["am", "are", "is", "does"],
            wrongSentences: ["I am play tennis.", "I not play tennis.", "Are you play tennis?"],
            examples: [
                { jp: "私はテニスをします。", en: "I play tennis.", blank: "I _____ tennis.", answer: "play", hints: ["play", "tennis"] },
                { jp: "私はテニスをしません。", en: "I don't play tennis.", blank: "I _____ play tennis.", answer: "don't", hints: ["don't", "play"] },
                { jp: "あなたはテニスをしますか。", en: "Do you play tennis?", blank: "_____ you play tennis?", answer: "Do" },
                { jp: "私たちは犬が好きです。", en: "We like dogs.", blank: "We _____ dogs.", answer: "like" },
                { jp: "彼らは英語を勉強しません。", en: "They don't study English.", blank: "They _____ study English.", answer: "don't" }
            ]
        },
        {
            id: "g1-question-what",
            title: "疑問詞 what の文",
            rule: "what は「何」をたずねる疑問詞です。Yes/No ではなく、具体的な内容で答えます。",
            distractors: ["Who", "When", "Where"],
            wrongSentences: ["Who is this?", "When do you like?", "Where is your favorite sport?"],
            examples: [
                { jp: "これは何ですか。", en: "What is this?", blank: "_____ is this?", answer: "What", hints: ["What", "this"] },
                { jp: "あなたは何が好きですか。", en: "What do you like?", blank: "_____ do you like?", answer: "What", hints: ["What", "like"] },
                { jp: "あなたは何を勉強しますか。", en: "What do you study?", blank: "_____ do you study?", answer: "What" },
                { jp: "あなたの好きなスポーツは何ですか。", en: "What is your favorite sport?", blank: "_____ is your favorite sport?", answer: "What" },
                { jp: "あなたは何を食べますか。", en: "What do you eat?", blank: "_____ do you eat?", answer: "What" }
            ]
        },
        {
            id: "g1-question-who",
            title: "疑問詞 who の文",
            rule: "who は「だれ」をたずねる疑問詞です。人を答えるときに使います。",
            distractors: ["What", "When", "Where"],
            wrongSentences: ["What is he?", "Where is your teacher?", "When is that boy?"],
            examples: [
                { jp: "彼はだれですか。", en: "Who is he?", blank: "_____ is he?", answer: "Who", hints: ["Who", "he"] },
                { jp: "彼女はだれですか。", en: "Who is she?", blank: "_____ is she?", answer: "Who", hints: ["Who", "she"] },
                { jp: "あの少年はだれですか。", en: "Who is that boy?", blank: "_____ is that boy?", answer: "Who" },
                { jp: "あなたの先生はだれですか。", en: "Who is your teacher?", blank: "_____ is your teacher?", answer: "Who" },
                { jp: "あなたはだれが好きですか。", en: "Who do you like?", blank: "_____ do you like?", answer: "Who" }
            ]
        },
        {
            id: "g1-question-when",
            title: "疑問詞 when の文",
            rule: "when は「いつ」をたずねる疑問詞です。時や日付を答えます。",
            distractors: ["What", "Who", "Where"],
            wrongSentences: ["Where is your birthday?", "Who do you study?", "What do you play tennis?"],
            examples: [
                { jp: "あなたの誕生日はいつですか。", en: "When is your birthday?", blank: "_____ is your birthday?", answer: "When", hints: ["When", "birthday"] },
                { jp: "あなたはいつ英語を勉強しますか。", en: "When do you study English?", blank: "_____ do you study English?", answer: "When", hints: ["When", "study"] },
                { jp: "あなたはいつテニスをしますか。", en: "When do you play tennis?", blank: "_____ do you play tennis?", answer: "When" },
                { jp: "学校祭はいつですか。", en: "When is the school festival?", blank: "_____ is the school festival?", answer: "When" },
                { jp: "あなたはいつ昼食を食べますか。", en: "When do you eat lunch?", blank: "_____ do you eat lunch?", answer: "When" }
            ]
        },
        {
            id: "g1-question-where",
            title: "疑問詞 where の文",
            rule: "where は「どこ」をたずねる疑問詞です。場所を答えます。",
            distractors: ["What", "Who", "When"],
            wrongSentences: ["When is my bag?", "What do you live?", "Who do you play soccer?"],
            examples: [
                { jp: "私のかばんはどこですか。", en: "Where is my bag?", blank: "_____ is my bag?", answer: "Where", hints: ["Where", "bag"] },
                { jp: "あなたはどこに住んでいますか。", en: "Where do you live?", blank: "_____ do you live?", answer: "Where", hints: ["Where", "live"] },
                { jp: "あなたはどこでサッカーをしますか。", en: "Where do you play soccer?", blank: "_____ do you play soccer?", answer: "Where" },
                { jp: "彼はどこにいますか。", en: "Where is he?", blank: "_____ is he?", answer: "Where" },
                { jp: "あなたの学校はどこですか。", en: "Where is your school?", blank: "_____ is your school?", answer: "Where" }
            ]
        },
        {
            id: "g1-plural-nouns",
            title: "名詞の複数形 (s/es)",
            rule: "2つ以上の名詞はふつう s をつけます。語尾によって es や ies になるものもあります。",
            distractors: ["cat", "box", "city"],
            wrongSentences: ["I have two cat.", "There are three box.", "I like many city."],
            examples: [
                { jp: "私は2匹の猫を飼っています。", en: "I have two cats.", blank: "I have two _____.", answer: "cats", hints: ["two", "cats"] },
                { jp: "箱が3つあります。", en: "There are three boxes.", blank: "There are three _____.", answer: "boxes", hints: ["three", "boxes"] },
                { jp: "私はたくさんの町が好きです。", en: "I like many cities.", blank: "I like many _____.", answer: "cities" },
                { jp: "彼らは5冊の本を持っています。", en: "They have five books.", blank: "They have five _____.", answer: "books" },
                { jp: "私は2本のバスを見ます。", en: "I see two buses.", blank: "I see two _____.", answer: "buses" }
            ]
        },
        {
            id: "g1-imperative-sentence",
            title: "命令文の作り方",
            rule: "命令文は主語を言わずに動詞の原形で始めます。禁止は Don't + 動詞の原形です。",
            distractors: ["You", "Are", "To"],
            wrongSentences: ["You open the door.", "Are open the door.", "Not run here."],
            examples: [
                { jp: "ドアを開けなさい。", en: "Open the door.", blank: "_____ the door.", answer: "Open", hints: ["Open", "door"] },
                { jp: "ここで走ってはいけません。", en: "Don't run here.", blank: "_____ run here.", answer: "Don't", hints: ["Don't", "run"] },
                { jp: "静かにしてください。", en: "Please be quiet.", blank: "Please _____ quiet.", answer: "be" },
                { jp: "私の話を聞きなさい。", en: "Listen to me.", blank: "_____ to me.", answer: "Listen" },
                { jp: "その窓を閉めなさい。", en: "Close the window.", blank: "_____ the window.", answer: "Close" }
            ]
        },
        {
            id: "g1-pronoun-chart",
            title: "代名詞の変化表 (I my me mine)",
            rule: "代名詞は役割によって形が変わります。主語、所有、目的語、所有代名詞を区別します。",
            distractors: ["I", "my", "me", "mine"],
            wrongSentences: ["My like English.", "This is me book.", "Ken knows I."],
            examples: [
                { jp: "私は英語が好きです。", en: "I like English.", blank: "_____ like English.", answer: "I", hints: ["I", "like"] },
                { jp: "これは私の本です。", en: "This is my book.", blank: "This is _____ book.", answer: "my", hints: ["my", "book"] },
                { jp: "ケンは私を知っています。", en: "Ken knows me.", blank: "Ken knows _____.", answer: "me" },
                { jp: "このペンは私のものです。", en: "This pen is mine.", blank: "This pen is _____.", answer: "mine" },
                { jp: "彼女は彼の妹です。", en: "She is his sister.", blank: "She is _____ sister.", answer: "his" }
            ]
        },
        {
            id: "g1-present-continuous",
            title: "現在進行形 (be + ing)",
            rule: "現在進行形は be 動詞 + 動詞の ing 形で「今〜しているところ」を表します。",
            distractors: ["play", "plays", "played"],
            wrongSentences: ["I playing soccer.", "I am play soccer.", "She are studying English."],
            examples: [
                { jp: "私はサッカーをしているところです。", en: "I am playing soccer.", blank: "I am _____ soccer.", answer: "playing", hints: ["playing", "soccer"] },
                { jp: "彼女は英語を勉強しているところです。", en: "She is studying English.", blank: "She is _____ English.", answer: "studying", hints: ["studying", "English"] },
                { jp: "彼らは走っているところです。", en: "They are running.", blank: "They are _____.", answer: "running" },
                { jp: "ケンは本を読んでいるところです。", en: "Ken is reading a book.", blank: "Ken is _____ a book.", answer: "reading" },
                { jp: "私たちは昼食を食べているところです。", en: "We are eating lunch.", blank: "We are _____ lunch.", answer: "eating" }
            ]
        },
        {
            id: "g1-ing-form-rules",
            title: "動詞のing形の作り方",
            rule: "ing 形は基本は ing をつけ、語尾の e を取る、最後を重ねるなどの変化があります。",
            distractors: ["makeing", "runing", "studys"],
            wrongSentences: ["I am makeing dinner.", "He is runing.", "We are studys English."],
            examples: [
                { jp: "私は夕食を作っているところです。", en: "I am making dinner.", blank: "I am _____ dinner.", answer: "making", hints: ["making", "dinner"] },
                { jp: "彼は走っているところです。", en: "He is running.", blank: "He is _____.", answer: "running", hints: ["He", "running"] },
                { jp: "私たちは英語を勉強しているところです。", en: "We are studying English.", blank: "We are _____ English.", answer: "studying" },
                { jp: "彼女は泳いでいるところです。", en: "She is swimming.", blank: "She is _____.", answer: "swimming" },
                { jp: "私は手紙を書いているところです。", en: "I am writing a letter.", blank: "I am _____ a letter.", answer: "writing" }
            ]
        },
        {
            id: "g1-auxiliary-can",
            title: "助動詞 can (肯定文)",
            rule: "can は「〜できる」を表す助動詞です。can の後ろは必ず動詞の原形です。",
            distractors: ["plays", "playing", "played"],
            wrongSentences: ["I can plays soccer.", "She cans swim.", "They can to speak English."],
            examples: [
                { jp: "私はサッカーができます。", en: "I can play soccer.", blank: "I can _____ soccer.", answer: "play", hints: ["can", "play"] },
                { jp: "彼女は泳ぐことができます。", en: "She can swim.", blank: "She can _____.", answer: "swim", hints: ["can", "swim"] },
                { jp: "彼らは英語を話せます。", en: "They can speak English.", blank: "They can _____ English.", answer: "speak" },
                { jp: "ケンは速く走れます。", en: "Ken can run fast.", blank: "Ken can _____ fast.", answer: "run" },
                { jp: "私たちはピアノを弾けます。", en: "We can play the piano.", blank: "We can _____ the piano.", answer: "play" }
            ]
        },
        {
            id: "g1-auxiliary-can-neg-q",
            title: "can の否定文・疑問文",
            rule: "can の否定文は can't + 動詞の原形、疑問文は Can を文の先頭に置きます。",
            distractors: ["don't", "isn't", "doesn't"],
            wrongSentences: ["I don't can swim.", "Can you plays tennis?", "You can swim?"],
            examples: [
                { jp: "私は泳げません。", en: "I can't swim.", blank: "I _____ swim.", answer: "can't", hints: ["can't", "swim"] },
                { jp: "あなたはテニスができますか。", en: "Can you play tennis?", blank: "_____ you play tennis?", answer: "Can", hints: ["Can", "play"] },
                { jp: "彼女は英語を話せません。", en: "She can't speak English.", blank: "She _____ speak English.", answer: "can't" },
                { jp: "彼らは速く走れますか。", en: "Can they run fast?", blank: "_____ they run fast?", answer: "Can" },
                { jp: "ケンはピアノを弾けません。", en: "Ken can't play the piano.", blank: "Ken _____ play the piano.", answer: "can't" }
            ]
        },
        {
            id: "g1-past-tense-sentence",
            title: "一般動詞の過去形 (文の作り方)",
            rule: "過去のことは動詞を過去形にします。主語が何でも過去形の形は同じです。",
            distractors: ["play", "plays", "playing"],
            wrongSentences: ["I play soccer yesterday.", "He plays tennis yesterday.", "They go to school yesterday."],
            examples: [
                { jp: "私は昨日サッカーをしました。", en: "I played soccer yesterday.", blank: "I _____ soccer yesterday.", answer: "played", hints: ["played", "yesterday"] },
                { jp: "彼は昨日テニスをしました。", en: "He played tennis yesterday.", blank: "He _____ tennis yesterday.", answer: "played", hints: ["played", "tennis"] },
                { jp: "彼らは昨日学校へ行きました。", en: "They went to school yesterday.", blank: "They _____ to school yesterday.", answer: "went" },
                { jp: "私は昨夜テレビを見ました。", en: "I watched TV last night.", blank: "I _____ TV last night.", answer: "watched" },
                { jp: "私たちは昨日英語を勉強しました。", en: "We studied English yesterday.", blank: "We _____ English yesterday.", answer: "studied" }
            ]
        },
        {
            id: "g1-past-tense-verb-forms",
            title: "過去形の動詞 (edの付け方・不規則)",
            rule: "規則動詞は ed, d, ied などをつけます。不規則動詞は go-went のように形を覚えます。",
            distractors: ["play", "studyed", "goed"],
            wrongSentences: ["I play soccer yesterday.", "We studyed English.", "They goed to school."],
            examples: [
                { jp: "私は昨日サッカーをしました。", en: "I played soccer yesterday.", blank: "I _____ soccer yesterday.", answer: "played", hints: ["played", "soccer"] },
                { jp: "私たちは昨日英語を勉強しました。", en: "We studied English yesterday.", blank: "We _____ English yesterday.", answer: "studied", hints: ["studied", "English"] },
                { jp: "彼らは昨日学校へ行きました。", en: "They went to school yesterday.", blank: "They _____ to school yesterday.", answer: "went" },
                { jp: "彼女は昨夜夕食を作りました。", en: "She made dinner last night.", blank: "She _____ dinner last night.", answer: "made" },
                { jp: "ケンは昨日音楽を聞きました。", en: "Ken listened to music yesterday.", blank: "Ken _____ to music yesterday.", answer: "listened" }
            ]
        },
        {
            id: "g1-third-person-singular-affirmative",
            title: "三単現のS (肯定文)",
            rule: "主語が三人称単数で現在の文では、一般動詞に s や es をつけます。",
            distractors: ["play", "playing", "played"],
            wrongSentences: ["He play soccer.", "She study English.", "Ken have a dog."],
            examples: [
                { jp: "彼はサッカーをします。", en: "He plays soccer.", blank: "He _____ soccer.", answer: "plays", hints: ["He", "plays"] },
                { jp: "彼女は英語を勉強します。", en: "She studies English.", blank: "She _____ English.", answer: "studies", hints: ["She", "studies"] },
                { jp: "ケンは犬を飼っています。", en: "Ken has a dog.", blank: "Ken _____ a dog.", answer: "has" },
                { jp: "私の母は朝食を作ります。", en: "My mother makes breakfast.", blank: "My mother _____ breakfast.", answer: "makes" },
                { jp: "その犬は速く走ります。", en: "The dog runs fast.", blank: "The dog _____ fast.", answer: "runs" }
            ]
        },
        {
            id: "g1-third-person-singular-neg-q",
            title: "三単現の否定文・疑問文",
            rule: "三人称単数の否定文は doesn't、疑問文は Does を使い、動詞は原形に戻します。",
            distractors: ["don't", "isn't", "aren't"],
            wrongSentences: ["He doesn't plays soccer.", "Does she studies English?", "He don't play soccer."],
            examples: [
                { jp: "彼はサッカーをしません。", en: "He doesn't play soccer.", blank: "He _____ play soccer.", answer: "doesn't", hints: ["doesn't", "play"] },
                { jp: "彼女は英語を勉強しますか。", en: "Does she study English?", blank: "_____ she study English?", answer: "Does", hints: ["Does", "study"] },
                { jp: "ケンは犬を飼っていません。", en: "Ken doesn't have a dog.", blank: "Ken _____ have a dog.", answer: "doesn't" },
                { jp: "あなたのお母さんは朝食を作りますか。", en: "Does your mother make breakfast?", blank: "_____ your mother make breakfast?", answer: "Does" },
                { jp: "その犬は速く走りません。", en: "The dog doesn't run fast.", blank: "The dog _____ run fast.", answer: "doesn't" }
            ]
        },
        {
            id: "g1-identifying-third-person",
            title: "三人称単数の見分け方",
            rule: "I と you 以外で、1人・1つの主語は三人称単数です。現在の一般動詞には s が必要です。",
            distractors: ["play", "like", "run"],
            wrongSentences: ["My brother play soccer.", "Yumi like music.", "The cat run fast."],
            examples: [
                { jp: "私の兄はサッカーをします。", en: "My brother plays soccer.", blank: "My brother _____ soccer.", answer: "plays", hints: ["brother", "plays"] },
                { jp: "ユミは音楽が好きです。", en: "Yumi likes music.", blank: "Yumi _____ music.", answer: "likes", hints: ["Yumi", "likes"] },
                { jp: "その猫は速く走ります。", en: "The cat runs fast.", blank: "The cat _____ fast.", answer: "runs" },
                { jp: "私の父は車を持っています。", en: "My father has a car.", blank: "My father _____ a car.", answer: "has" },
                { jp: "この本はおもしろそうに見えます。", en: "This book looks interesting.", blank: "This book _____ interesting.", answer: "looks" }
            ]
        }
    ];

    grade1Specs.forEach(spec => {
        if (!window.GRAMMAR_CHECK_TESTS[spec.id]) {
            window.GRAMMAR_CHECK_TESTS[spec.id] = makeGeneratedTest(spec);
        }
    });
})();

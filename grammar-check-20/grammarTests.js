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
    },
    "g3-present-perfect-progressive": {
        id: "g3-present-perfect-progressive",
        grade: "中3",
        title: "現在完了進行形",
        passScore: 16,
        perfectScore: 20,
        sections: [
            {
                id: "choice",
                title: "大問1　選択問題",
                type: "choice",
                questions: [
                    { id: "c1", question: "I _____ been studying English for two hours.", translation: "私は2時間ずっと英語を勉強しています。", choices: ["have", "has", "am", "was"], answer: "have", explanation: "主語が I なので have been ～ing を使います。" },
                    { id: "c2", question: "She has been _____ tennis since this morning.", translation: "彼女は今朝からずっとテニスをしています。", choices: ["playing", "play", "played", "plays"], answer: "playing", explanation: "been の後ろは動詞ing にします。" },
                    { id: "c3", question: "It has been raining _____ yesterday.", translation: "昨日からずっと雨が降っています。", choices: ["since", "for", "from", "in"], answer: "since", explanation: "yesterday は始まりの時点なので since を使います。" },
                    { id: "c4", question: "We have been cleaning the room _____ three days.", translation: "私たちは3日間ずっとその部屋を掃除しています。", choices: ["for", "since", "from", "at"], answer: "for", explanation: "three days は期間なので for を使います。" },
                    { id: "c5", question: "He _____ been reading a book since last night.", translation: "彼は昨夜からずっと本を読んでいます。", choices: ["has", "have", "is", "was"], answer: "has", explanation: "He は三人称単数なので has been ～ing です。" },
                    { id: "c6", question: "They have been _____ soccer since noon.", translation: "彼らは正午からずっとサッカーをしています。", choices: ["playing", "play", "played", "plays"], answer: "playing", explanation: "現在完了進行形は have been + 動詞ing です。" },
                    { id: "c7", question: "My mother has been cooking dinner _____ an hour.", translation: "母は1時間ずっと夕食を作っています。", choices: ["for", "since", "from", "during"], answer: "for", explanation: "an hour は期間なので for を使います。" },
                    { id: "c8", question: "Which sentence means 「彼女は朝からずっとピアノを練習しています。」?", translation: "意味が合う英文を選びなさい。", choices: ["She has been practicing the piano since this morning.", "She is practiced the piano since this morning.", "She has practiced the piano at this morning.", "She has been practiced the piano for this morning."], answer: "She has been practicing the piano since this morning.", explanation: "動作の継続は has been + 動詞ing、起点には since を使います。" }
                ]
            },
            {
                id: "fill",
                title: "大問2　穴埋め問題",
                type: "fill",
                questions: [
                    { id: "f1", question: "I have been _____ English for two hours.", translation: "私は2時間ずっと英語を勉強しています。", answer: "studying", explanation: "study は現在分詞にして studying です。" },
                    { id: "f2", question: "She has _____ playing tennis since this morning.", translation: "彼女は今朝からずっとテニスをしています。", answer: "been", explanation: "現在完了進行形は has been + 動詞ing です。" },
                    { id: "f3", question: "It has been raining _____ yesterday.", translation: "昨日からずっと雨が降っています。", answer: "since", explanation: "yesterday は起点なので since です。" },
                    { id: "f4", question: "We have been cleaning the room _____ three days.", translation: "私たちは3日間ずっとその部屋を掃除しています。", answer: "for", explanation: "three days は期間なので for を使います。" },
                    { id: "f5", question: "He _____ been reading a book since last night.", translation: "彼は昨夜からずっと本を読んでいます。", answer: "has", explanation: "He は三人称単数なので has を使います。" }
                ]
            },
            {
                id: "reorder",
                title: "大問3　並び替え問題",
                type: "reorder",
                questions: [
                    { id: "r1", question: "私は2時間ずっと英語を勉強しています。", words: ["I", "have", "been", "studying", "English", "for", "two", "hours"], answer: "I have been studying English for two hours.", explanation: "have been studying + for two hours の語順です。" },
                    { id: "r2", question: "彼女は今朝からずっとテニスをしています。", words: ["She", "has", "been", "playing", "tennis", "since", "this", "morning"], answer: "She has been playing tennis since this morning.", explanation: "has been playing + since this morning の語順です。" },
                    { id: "r3", question: "昨日からずっと雨が降っています。", words: ["It", "has", "been", "raining", "since", "yesterday"], answer: "It has been raining since yesterday.", explanation: "It has been raining で「ずっと雨が降っている」です。" },
                    { id: "r4", question: "私たちは3日間ずっとその部屋を掃除しています。", words: ["We", "have", "been", "cleaning", "the", "room", "for", "three", "days"], answer: "We have been cleaning the room for three days.", explanation: "期間は for three days と置きます。" },
                    { id: "r5", question: "彼は昨夜からずっと本を読んでいます。", words: ["He", "has", "been", "reading", "a", "book", "since", "last", "night"], answer: "He has been reading a book since last night.", explanation: "He なので has been reading を使います。" }
                ]
            },
            {
                id: "translation",
                title: "大問4　和文英訳",
                type: "translation",
                questions: [
                    { id: "t1", question: "彼は昨日からずっと本を読んでいます。", hints: ["has been", "reading"], answers: ["He has been reading a book since yesterday.", "He's been reading a book since yesterday."], explanation: "動作が続いているので has been reading を使い、起点には since yesterday を置きます。" },
                    { id: "t2", question: "私たちは3日間ずっとその部屋を掃除しています。", hints: ["have been", "for three days"], answers: ["We have been cleaning the room for three days.", "We've been cleaning the room for three days."], explanation: "We なので have been。期間は for three days です。" }
                ]
            }
        ]
    }
};

(function addGeneratedGrade1Tests() {
    function getVerbFamily(answer) {
        const families = [
            ["be", "be", "am", "are", "is", "was", "were", "being", "been"],
            ["do", "do", "does", "did", "doing", "done"],
            ["have", "have", "has", "had", "having"],
            ["go", "go", "goes", "went", "going", "gone"],
            ["come", "come", "comes", "came", "coming"],
            ["make", "make", "makes", "made", "making"],
            ["run", "run", "runs", "ran", "running"],
            ["study", "study", "studies", "studied", "studying", "studys"],
            ["play", "play", "plays", "played", "playing"],
            ["like", "like", "likes", "liked", "liking"],
            ["eat", "eat", "eats", "ate", "eating", "eaten"],
            ["read", "read", "reads", "readed", "reading"],
            ["write", "write", "writes", "wrote", "writing", "written"],
            ["swim", "swim", "swims", "swam", "swimming"],
            ["speak", "speak", "speaks", "spoke", "speaking", "spoken"],
            ["listen", "listen", "listens", "listened", "listening"],
            ["watch", "watch", "watches", "watched", "watching"],
            ["visit", "visit", "visits", "visited", "visiting"],
            ["open", "open", "opens", "opened", "opening"],
            ["close", "close", "closes", "closed", "closing"],
            ["cook", "cook", "cooks", "cooked", "cooking"],
            ["clean", "clean", "cleans", "cleaned", "cleaning"],
            ["live", "live", "lives", "lived", "living"],
            ["know", "know", "knows", "knew", "knowing", "known"],
            ["see", "see", "sees", "saw", "seeing", "seen"],
            ["take", "take", "takes", "took", "taking", "taken"],
            ["call", "call", "calls", "called", "calling"],
            ["name", "name", "names", "named", "naming"],
            ["keep", "keep", "keeps", "kept", "keeping"],
            ["help", "help", "helps", "helped", "helping"],
            ["let", "let", "lets", "letting"],
            ["ask", "ask", "asks", "asked", "asking"],
            ["tell", "tell", "tells", "told", "telling"],
            ["want", "want", "wants", "wanted", "wanting"]
        ];
        const normalized = String(answer).toLowerCase();
        return families.find(family => family.slice(1).includes(normalized));
    }

    function makeRegularVerbDistractors(answer) {
        const word = String(answer);
        if (!/^[A-Za-z']+$/.test(word)) return [];
        const lower = word.toLowerCase();
        const matchCase = value => /^[A-Z]/.test(word) ? value.charAt(0).toUpperCase() + value.slice(1) : value;
        const family = getVerbFamily(lower);
        if (family) return family.slice(1).map(matchCase);

        if (lower.endsWith("ies") && lower.length > 3) {
            const base = `${lower.slice(0, -3)}y`;
            return [base, `${base}ing`, `${base}ed`, `${base}s`].map(matchCase);
        }
        if (lower.endsWith("es") && lower.length > 2) {
            const base = lower.replace(/es$/, "");
            return [base, `${base}ing`, `${base}ed`].map(matchCase);
        }
        if (lower.endsWith("s") && lower.length > 1) {
            const base = lower.slice(0, -1);
            return [base, `${base}ing`, `${base}ed`].map(matchCase);
        }
        if (lower.endsWith("ing") && lower.length > 4) {
            const base = lower.replace(/ing$/, "");
            return [base, `${base}s`, `${base}ed`].map(matchCase);
        }
        if (lower.endsWith("ed") && lower.length > 3) {
            const base = lower.replace(/ed$/, "");
            return [base, `${base}s`, `${base}ing`].map(matchCase);
        }
        const thirdPerson = /(?:s|x|z|ch|sh|o)$/.test(lower) ? `${lower}es` : lower.endsWith("y") ? `${lower.slice(0, -1)}ies` : `${lower}s`;
        const ing = lower.endsWith("e") && !lower.endsWith("ee") ? `${lower.slice(0, -1)}ing` : `${lower}ing`;
        const past = lower.endsWith("e") ? `${lower}d` : lower.endsWith("y") ? `${lower.slice(0, -1)}ied` : `${lower}ed`;
        return [thirdPerson, ing, past, `to ${lower}`].map(matchCase);
    }

    function makeAdjectiveDistractors(answer) {
        const families = {
            older: ["old", "oldest", "more old"],
            oldest: ["older", "old", "most old"],
            newer: ["new", "newest", "more new"],
            newest: ["newer", "new", "most new"],
            bigger: ["big", "biggest", "more big"],
            biggest: ["bigger", "big", "most big"],
            larger: ["large", "largest", "more large"],
            largest: ["larger", "large", "most large"],
            happier: ["happy", "happiest", "more happy"],
            happiest: ["happier", "happy", "most happy"],
            easier: ["easy", "easiest", "more easy"],
            easiest: ["easier", "easy", "most easy"],
            taller: ["tall", "tallest", "more tall"],
            tallest: ["taller", "tall", "most tall"],
            higher: ["high", "highest", "more high"],
            highest: ["higher", "high", "most high"],
            better: ["good", "best", "more good"],
            best: ["better", "good", "most good"],
            worse: ["bad", "worst", "more bad"],
            worst: ["worse", "bad", "most bad"],
            more: ["most", "very", "many"],
            most: ["more", "very", "many"]
        };
        return families[String(answer).toLowerCase()] || [];
    }

    function makeContextualDistractors(answer, example) {
        const answerText = String(answer);
        if (answerText.includes(" ") || /[。！？?.,]/.test(answerText)) return [];

        const candidates = [];
        const add = (...items) => candidates.push(...items);
        const lowerAnswer = answerText.toLowerCase();
        const blank = example?.blank || "";

        const adjectiveDistractors = makeAdjectiveDistractors(answerText);
        const grammarWordDistractors = {
            from: ["in", "at", "to", "of"],
            a: ["an", "the", "some", "no"],
            an: ["a", "the", "some", "no"],
            no: ["a", "some", "any", "not"]
        }[lowerAnswer] || [];
        const needsVerbDistractors = getVerbFamily(lowerAnswer)
            || /(?:ing|ed|ies|es|s)$/.test(lowerAnswer)
            || /\b(can|to|will|must|should|may)\s+_____/i.test(blank)
            || /\b_____\s+(soccer|English|fast|music|breakfast|dinner|lunch|tennis|water|the rule|the piano|this pen|the desk|a book|the magazine)/i.test(blank);

        add(...grammarWordDistractors);
        add(...adjectiveDistractors);
        if (!grammarWordDistractors.length && !adjectiveDistractors.length && needsVerbDistractors) {
            add(...makeRegularVerbDistractors(answerText));
        }

        if (/\b(can|to|will|must|should|may)\s+_____/i.test(blank) || /\b_____\s+(soccer|English|fast|music|breakfast|dinner|lunch|tennis)/i.test(blank)) {
            const family = getVerbFamily(lowerAnswer);
            if (family) add(family[1], ...family.slice(2));
        }

        if (/^Do$|^Does$|^Did$|^Can$|^Is$|^Are$|^Was$|^Were$/.test(answerText)) {
            add("Do", "Does", "Did", "Can", "Is", "Are", "Was", "Were");
        }

        if (/n't$/.test(answerText) || ["not", "don't", "doesn't", "didn't", "can't", "won't"].includes(lowerAnswer)) {
            add("not", "don't", "doesn't", "didn't", "can't", "isn't", "aren't");
        }

        const seen = new Set([answerText.toLowerCase()]);
        return candidates.filter(item => {
            if (!item) return false;
            const key = String(item).toLowerCase();
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }

    function makeChoices(answer, distractors, example = null) {
        const fallbackDistractors = ["am", "are", "is", "be", "do", "does", "don't", "not", "play", "plays", "playing", "played"];
        const contextualDistractors = makeContextualDistractors(answer, example);
        const choices = [answer, ...contextualDistractors, ...distractors, ...fallbackDistractors].filter((value, index, array) => array.indexOf(value) === index);
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
            { from: "kind", jp: "親切", fill: ["nice", "すてき"], reorder: ["friendly", "友好的"], translation: ["popular", "人気"], meaning: ["careful", "注意深い"] },
            { from: "happy", jp: "幸せ", fill: ["fine", "元気"], reorder: ["ready", "準備ができて"], translation: ["well", "元気"], meaning: ["sleepy", "眠い"] },
            { from: "tired", jp: "疲れて", fill: ["hungry", "お腹がすいて"], reorder: ["sleepy", "眠く"], translation: ["happy", "幸せでは"], meaning: ["sad", "悲しく"] },
            { from: "busy", jp: "忙しく", fill: ["ready", "準備ができて"], reorder: ["kind", "親切では"], translation: ["free", "ひまでは"], meaning: ["quiet", "静かでは"] },
            { from: "Tokyo", jp: "東京", fill: ["Sapporo", "札幌"], reorder: ["Yokohama", "横浜"], translation: ["Nara", "奈良"], meaning: ["Nagoya", "名古屋"] },
            { from: "soccer", jp: "サッカー", fill: ["basketball", "バスケットボール"], reorder: ["tennis", "テニス"], translation: ["volleyball", "バレーボール"], meaning: ["baseball", "野球"] },
            { from: "basketball", jp: "バスケットボール", fill: ["badminton", "バドミントン"], reorder: ["baseball", "野球"], translation: ["table tennis", "卓球"], meaning: ["soccer", "サッカー"] },
            { from: "tennis", jp: "テニス", fill: ["badminton", "バドミントン"], reorder: ["baseball", "野球"], translation: ["table tennis", "卓球"], meaning: ["basketball", "バスケットボール"] },
            { from: "music", jp: "音楽", fill: ["movies", "映画"], reorder: ["English songs", "英語の歌"], translation: ["books", "本"], meaning: ["art", "美術"] },
            { from: "English", jp: "英語", fill: ["math", "数学"], reorder: ["science", "理科"], translation: ["Japanese", "国語"], meaning: ["history", "歴史"] },
            { from: "school", jp: "学校", fill: ["the library", "図書館"], reorder: ["the park", "公園"], translation: ["the station", "駅"], meaning: ["the classroom", "教室"] },
            { from: "the museum", jp: "その博物館", fill: ["the zoo", "その動物園"], reorder: ["the aquarium", "その水族館"], translation: ["the art museum", "その美術館"], meaning: ["the old temple", "その古い寺"] },
            { from: "the window", jp: "その窓", fill: ["the door", "そのドア"], reorder: ["the box", "その箱"], translation: ["the notebook", "そのノート"], meaning: ["the gate", "その門"] },
            { from: "the library", jp: "図書館", fill: ["the classroom", "教室"], reorder: ["the station", "駅"], translation: ["the park", "公園"], meaning: ["the museum", "博物館"] },
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
            ["kind", "nice", "親切", "すてき"],
            ["happy", "fine", "幸せ", "元気"],
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
        next = cleanupGeneratedExample(addSectionContext(next, sectionType));
        next.hints = getHints(next.en);
        next.answers = [next.en];
        return next;
    }

    function cleanupGeneratedExample(example) {
        const next = { ...example };
        const originalAnswers = next.answers ? [...next.answers] : null;
        const replacements = [
            {
                en: /\bthe the (classroom|library|park|station) festival\b/g,
                enTo: "the school festival",
                jp: /(教室|図書館|公園|駅)祭/g,
                jpTo: "学校祭"
            },
            {
                en: /\byour the (classroom|library|park|station)\b/g,
                enTo: "your school",
                jp: /あなたの(教室|図書館|公園|駅)/g,
                jpTo: "あなたの学校"
            },
            {
                en: /\bour the (classroom|library|park|station)\b/g,
                enTo: "our class",
                jp: /私たちの(教室|図書館|公園|駅)/g,
                jpTo: "私たちのクラス"
            },
            {
                en: /\b(her|my|your) the (report|poster|worksheet|project)\b/g,
                enTo: "$1 $2"
            }
        ];

        replacements.forEach(item => {
            next.en = next.en.replace(item.en, item.enTo);
            next.blank = next.blank.replace(item.en, item.enTo);
            if (item.jp) next.jp = next.jp.replace(item.jp, item.jpTo);
        });

        if (/^math is easier than math/i.test(next.en)) {
            next.en = next.en.replace(/^math is/i, "Science is");
            next.blank = next.blank.replace(/^math is/i, "Science is");
            next.jp = next.jp.replace(/^数学は数学/, "理科は数学");
        }

        if (/^math is as important as math/i.test(next.en)) {
            next.en = next.en.replace(/^math is/i, "Science is");
            next.blank = next.blank.replace(/^math is/i, "Science is");
            next.jp = next.jp.replace(/^数学は数学/, "理科は数学");
        }

        if (/^(math|science|history) is spoken around the world/i.test(next.en)) {
            next.en = next.en.replace(/^(math|science|history) is/i, "English is");
            next.blank = next.blank.replace(/^(math|science|history) is/i, "English is");
            next.jp = next.jp.replace(/^(数学|理科|歴史)は世界中で話されています/, "英語は世界中で話されています");
        }

        if (/(The news|The song) (made|makes) me ready/i.test(next.en)) {
            next.en = next.en.replace(/ready/g, "happy");
            next.blank = next.blank.replace(/ready/g, "happy");
            next.jp = next.jp.replace(/準備ができて/g, "幸せ");
        }

        if (/Mt\. Fuji is the highest mountain in Canada/i.test(next.en)) {
            next.en = next.en.replace("Canada", "Japan");
            next.blank = next.blank.replace("Canada", "Japan");
            next.jp = next.jp.replace("カナダ", "日本");
        }

        if (/^Japanese is spoken around the world/i.test(next.en)) {
            next.en = next.en.replace(/^Japanese is/i, "English is");
            next.blank = next.blank.replace(/^Japanese is/i, "English is");
            next.jp = next.jp.replace(/^国語は世界中で話されています/, "英語は世界中で話されています");
        }

        if (/^Japanese is spoken in Canada/i.test(next.en)) {
            next.en = next.en.replace(/^Japanese is/i, "French is");
            next.blank = next.blank.replace(/^Japanese is/i, "French is");
            next.jp = next.jp.replace(/^国語はカナダで話されています/, "フランス語はカナダで話されています");
        }

        if (/^(math|science|history|Japanese) is spoken in Canada/i.test(next.en)) {
            next.en = next.en.replace(/^(math|science|history|Japanese) is/i, "French is");
            next.blank = next.blank.replace(/^(math|science|history|Japanese) is/i, "French is");
            next.jp = next.jp.replace(/^(数学|理科|歴史|国語)はカナダで話されています/, "フランス語はカナダで話されています");
        }

        if (/^Is (math|science|history|Japanese) spoken in Canada\?/i.test(next.en)) {
            next.en = next.en.replace(/^Is (math|science|history|Japanese) spoken/i, "Is French spoken");
            next.blank = next.blank.replace(/^_____ (math|science|history|Japanese) spoken/i, "_____ French spoken");
            next.jp = next.jp.replace(/^(数学|理科|歴史|国語)はカナダで話されていますか/, "フランス語はカナダで話されていますか");
        }

        if (/^The letter was written in (math|science|history)\./i.test(next.en)) {
            next.en = next.en.replace(/in (math|science|history)\./i, "in English.");
            next.blank = next.blank.replace(/in (math|science|history)\./i, "in English.");
            next.jp = next.jp.replace(/(数学|理科|歴史)で書かれました/, "英語で書かれました");
        }

        if (/\benter the desk\b/i.test(next.en)) {
            next.en = next.en.replace(/\benter the desk\b/gi, "enter the classroom");
            next.blank = next.blank.replace(/\benter the desk\b/gi, "enter the classroom");
            next.blank = next.blank.replace(/\b_____\s+the desk\b/gi, "_____ the classroom");
            next.jp = next.jp.replace(/机に入ってもよい/, "教室に入ってもよい");
        }

        next.jp = next.jp.replace(/準備ができてありません/g, "準備ができていません");
        next.jp = next.jp.replace(/準備ができてです/g, "準備ができています");
        next.jp = next.jp.replace(/わくわくしてです/g, "わくわくしています");
        next.jp = next.jp.replace(/手助けしてくれる人です/g, "親切です");
        next.jp = next.jp.replace(/2本のバス/g, "2台のバス");

        if (originalAnswers && originalAnswers.length === 1 && originalAnswers[0] === example.en) {
            next.answers = [next.en];
        }

        return next;
    }

    function addSectionContext(example, sectionType) {
        return example;
    }

    function nextIncludes(example, enPart, jpPart) {
        return example.en.includes(enPart) && example.jp.includes(jpPart);
    }

    function getSectionExamples(spec, sectionType, count) {
        if (spec[`${sectionType}Examples`]) return spec[`${sectionType}Examples`].slice(0, count).map(cleanupGeneratedExample);
        const offset = sectionType === "fill" ? 1 : sectionType === "reorder" ? 2 : 3;
        return Array.from({ length: count }, (_, index) => {
            const base = spec.examples[(index + offset) % spec.examples.length];
            return applyVariant(base, sectionType, index);
        }).map(cleanupGeneratedExample);
    }

    function makeGeneratedTest(spec) {
        const choiceExamples = getSectionExamples(spec, "choice", 5);
        const fillExamples = getSectionExamples(spec, "fill", 5);
        const reorderExamples = getSectionExamples(spec, "reorder", 5);
        const translationExamples = getSectionExamples(spec, "translation", 2);
        const hasWrongSentenceChoices = (spec.wrongSentences || []).length >= 3;
        const sentenceChoiceExamples = hasWrongSentenceChoices
            ? spec.examples.slice(0, 3).map(cleanupGeneratedExample)
            : getSectionExamples(spec, "meaning", 3);

        const choiceQuestions = choiceExamples.map((example, index) => ({
            id: `c${index + 1}`,
            question: example.blank,
            translation: example.jp,
            choices: makeChoices(example.answer, example.distractors || spec.distractors, example),
            answer: example.answer,
            explanation: example.explanation || spec.rule
        }));

        sentenceChoiceExamples.forEach((example, index) => {
            if (hasWrongSentenceChoices) {
                const wrongChoices = spec.wrongSentences
                    .filter(sentence => sentence !== example.en)
                    .slice(0, 3);
                choiceQuestions.push({
                    id: `c${index + 6}`,
                    question: "Which sentence is correct?",
                    translation: "正しい英文を選びなさい。",
                    choices: makeChoices(example.en, wrongChoices, example),
                    answer: example.en,
                    explanation: spec.rule
                });
                return;
            }

            choiceQuestions.push({
                id: `c${index + 6}`,
                question: example.blank,
                translation: example.jp,
                choices: makeChoices(example.answer, example.distractors || spec.distractors, example),
                answer: example.answer,
                explanation: example.explanation || spec.rule
            });
        });

        return {
            id: spec.id,
            grade: spec.grade || (spec.id.startsWith("g3-") ? "中3" : spec.id.startsWith("g2-") ? "中2" : "中1"),
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
            ],
            reorderExamples: [
                { jp: "あなたはいつテニスをしますか。", en: "When do you play tennis?", blank: "_____ do you play tennis?", answer: "When" },
                { jp: "公園祭はいつですか。", en: "When is the park festival?", blank: "_____ is the park festival?", answer: "When" },
                { jp: "あなたはいつ昼食を食べますか。", en: "When do you eat lunch?", blank: "_____ do you eat lunch?", answer: "When" },
                { jp: "あなたの誕生日はいつですか。", en: "When is your birthday?", blank: "_____ is your birthday?", answer: "When", hints: ["When", "birthday"] },
                { jp: "あなたはいつ英語を勉強しますか。", en: "When do you study English?", blank: "_____ do you study English?", answer: "When", hints: ["When", "study"] }
            ],
            translationExamples: [
                { jp: "学校祭はいつですか。", en: "When is the school festival?", blank: "_____ is the school festival?", answer: "When", hints: ["When", "is"], answers: ["When is the school festival?"] },
                { jp: "あなたはいつ昼食を食べますか。", en: "When do you eat lunch?", blank: "_____ do you eat lunch?", answer: "When", hints: ["When", "eat"], answers: ["When do you eat lunch?"] }
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
            ],
            reorderExamples: [
                { jp: "あなたはどこでサッカーをしますか。", en: "Where do you play soccer?", blank: "_____ do you play soccer?", answer: "Where" },
                { jp: "彼はどこにいますか。", en: "Where is he?", blank: "_____ is he?", answer: "Where" },
                { jp: "公園はどこですか。", en: "Where is the park?", blank: "_____ is the park?", answer: "Where" },
                { jp: "私のかばんはどこですか。", en: "Where is my bag?", blank: "_____ is my bag?", answer: "Where", hints: ["Where", "bag"] },
                { jp: "あなたはどこに住んでいますか。", en: "Where do you live?", blank: "_____ do you live?", answer: "Where", hints: ["Where", "live"] }
            ],
            translationExamples: [
                { jp: "私のかばんはどこですか。", en: "Where is my bag?", blank: "_____ is my bag?", answer: "Where", hints: ["Where", "bag"], answers: ["Where is my bag?"] },
                { jp: "駅はどこですか。", en: "Where is the station?", blank: "_____ is the station?", answer: "Where", hints: ["Where", "is"], answers: ["Where is the station?"] }
            ]
        },
        {
            id: "g1-plural-nouns",
            title: "名詞の複数形 (s/es)",
            rule: "2つ以上の名詞はふつう s をつけます。語尾によって es や ies になるものもあります。",
            distractors: ["cat", "box", "city"],
            wrongSentences: ["I have two cat.", "I have three box.", "I like many city."],
            examples: [
                { jp: "私は2匹の猫を飼っています。", en: "I have two cats.", blank: "I have two _____.", answer: "cats", hints: ["two", "cats"] },
                { jp: "私は3つの箱を持っています。", en: "I have three boxes.", blank: "I have three _____.", answer: "boxes", hints: ["three", "boxes"] },
                { jp: "私はたくさんの町が好きです。", en: "I like many cities.", blank: "I like many _____.", answer: "cities" },
                { jp: "彼らは5冊の本を持っています。", en: "They have five books.", blank: "They have five _____.", answer: "books" },
                { jp: "私は2台のバスを見ます。", en: "I see two buses.", blank: "I see two _____.", answer: "buses" }
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
                { jp: "私の妹は英語を勉強します。", en: "My sister studies English.", blank: "My sister _____ English.", answer: "studies" }
            ]
        }
    ];

    const grade2Specs = [
        {
            id: "g2-past-tense-regular",
            title: "一般動詞の過去形 (ed形)",
            rule: "規則動詞の過去形は、多くの場合 ed や d をつけます。過去を表す語句と一緒に使います。",
            distractors: ["play", "plays", "playing"],
            examples: [
                { jp: "私は昨日バスケットボールをしました。", en: "I played basketball yesterday.", blank: "I _____ basketball yesterday.", answer: "played" },
                { jp: "彼女は昨夜夕食を作りました。", en: "She cooked dinner last night.", blank: "She _____ dinner last night.", answer: "cooked" },
                { jp: "私たちは先週その博物館を訪れました。", en: "We visited the museum last week.", blank: "We _____ the museum last week.", answer: "visited" },
                { jp: "ケンは昨日英語を勉強しました。", en: "Ken studied English yesterday.", blank: "Ken _____ English yesterday.", answer: "studied" },
                { jp: "彼らは2日前にその窓を開けました。", en: "They opened the window two days ago.", blank: "They _____ the window two days ago.", answer: "opened" }
            ]
        },
        {
            id: "g2-past-continuous",
            title: "過去進行形",
            rule: "過去進行形は was / were + 動詞のing形で「〜しているところでした」を表します。",
            distractors: ["am", "is", "are"],
            examples: [
                { jp: "私はその時本を読んでいました。", en: "I was reading a book then.", blank: "I _____ reading a book then.", answer: "was" },
                { jp: "彼女は午後7時に夕食を作っていました。", en: "She was cooking dinner at seven.", blank: "She was _____ dinner at seven.", answer: "cooking" },
                { jp: "彼らは公園で走っていました。", en: "They were running in the park.", blank: "They _____ running in the park.", answer: "were" },
                { jp: "ケンはその時テレビを見ていました。", en: "Ken was watching TV then.", blank: "Ken was _____ TV then.", answer: "watching" },
                { jp: "私たちは英語を勉強していました。", en: "We were studying English.", blank: "We were _____ English.", answer: "studying" }
            ]
        },
        {
            id: "g2-sensory-verbs",
            title: "感覚を表す動詞 (SVC)",
            rule: "look, sound, smell, taste, feel の後ろには形容詞を置き、「〜に見える・聞こえる」などを表します。",
            distractors: ["looks", "looking", "looked"],
            examples: [
                { jp: "その花は美しく見えます。", en: "The flower looks beautiful.", blank: "The flower _____ beautiful.", answer: "looks" },
                { jp: "その考えはよさそうに聞こえます。", en: "The idea sounds good.", blank: "The idea _____ good.", answer: "sounds" },
                { jp: "このスープはおいしい味がします。", en: "This soup tastes delicious.", blank: "This soup _____ delicious.", answer: "tastes" },
                { jp: "そのタオルは柔らかい感じがします。", en: "The towel feels soft.", blank: "The towel _____ soft.", answer: "feels" },
                { jp: "そのケーキは甘いにおいがします。", en: "The cake smells sweet.", blank: "The cake _____ sweet.", answer: "smells" }
            ]
        },
        {
            id: "g2-be-going-to",
            title: "be going to (未来の文)",
            rule: "be going to + 動詞の原形で「〜するつもりです」「〜しそうです」を表します。",
            distractors: ["go", "goes", "went"],
            examples: [
                { jp: "私は明日京都を訪れるつもりです。", en: "I am going to visit Kyoto tomorrow.", blank: "I am going to _____ Kyoto tomorrow.", answer: "visit" },
                { jp: "彼女は今夜英語を勉強するつもりです。", en: "She is going to study English tonight.", blank: "She _____ going to study English tonight.", answer: "is" },
                { jp: "私たちは日曜日にサッカーをするつもりです。", en: "We are going to play soccer on Sunday.", blank: "We are going to _____ soccer on Sunday.", answer: "play" },
                { jp: "ケンは新しい自転車を買うつもりです。", en: "Ken is going to buy a new bike.", blank: "Ken is going to _____ a new bike.", answer: "buy" },
                { jp: "彼らは昼食を作るつもりです。", en: "They are going to make lunch.", blank: "They _____ going to make lunch.", answer: "are" }
            ]
        },
        {
            id: "g2-svoo-sentence",
            title: "give / show など (SVOO)",
            rule: "give / show / teach などは「人 + 物」の語順で、〜に…を与える・見せる・教えるを表せます。",
            distractors: ["to me", "for me", "me"],
            examples: [
                { jp: "彼女は私に写真を見せました。", en: "She showed me a picture.", blank: "She showed _____ a picture.", answer: "me" },
                { jp: "ケンはユキに本をあげました。", en: "Ken gave Yuki a book.", blank: "Ken gave _____ a book.", answer: "Yuki" },
                { jp: "私たちの先生は私たちに英語を教えます。", en: "Our teacher teaches us English.", blank: "Our teacher teaches _____ English.", answer: "us" },
                { jp: "私は彼にメールを送りました。", en: "I sent him an email.", blank: "I sent _____ an email.", answer: "him" },
                { jp: "母は私に昼食を作ってくれました。", en: "My mother made me lunch.", blank: "My mother made _____ lunch.", answer: "me" }
            ]
        },
        {
            id: "g2-svoo-rewrite-to",
            title: "SVOO書き換え (to)",
            rule: "give / show / send / teach などは「物 + to + 人」に書き換えられます。",
            distractors: ["for", "with", "by"],
            examples: [
                { jp: "私はその本をケンにあげました。", en: "I gave the book to Ken.", blank: "I gave the book _____ Ken.", answer: "to" },
                { jp: "彼女は写真を私たちに見せました。", en: "She showed the picture to us.", blank: "She showed the picture _____ us.", answer: "to" },
                { jp: "父は手紙を私に送りました。", en: "My father sent a letter to me.", blank: "My father sent a letter _____ me.", answer: "to" },
                { jp: "先生は英語を生徒たちに教えました。", en: "The teacher taught English to the students.", blank: "The teacher taught English _____ the students.", answer: "to" },
                { jp: "ユキはそのニュースを友達に話しました。", en: "Yuki told the news to her friends.", blank: "Yuki told the news _____ her friends.", answer: "to" }
            ]
        },
        {
            id: "g2-svoo-rewrite-for",
            title: "SVOO書き換え (for)",
            rule: "make / buy / cook などは「物 + for + 人」に書き換えられます。",
            distractors: ["to", "with", "by"],
            examples: [
                { jp: "母は私にケーキを作りました。", en: "My mother made a cake for me.", blank: "My mother made a cake _____ me.", answer: "for" },
                { jp: "私は妹にバッグを買いました。", en: "I bought a bag for my sister.", blank: "I bought a bag _____ my sister.", answer: "for" },
                { jp: "彼は友達に昼食を作りました。", en: "He cooked lunch for his friends.", blank: "He cooked lunch _____ his friends.", answer: "for" },
                { jp: "ユキは私たちにカードを作りました。", en: "Yuki made a card for us.", blank: "Yuki made a card _____ us.", answer: "for" },
                { jp: "父は私に新しい机を買いました。", en: "My father bought a new desk for me.", blank: "My father bought a new desk _____ me.", answer: "for" }
            ]
        },
        {
            id: "g2-infinitive-noun",
            title: "不定詞(1) 名詞的用法",
            rule: "to + 動詞の原形は「〜すること」という名詞の働きをします。",
            distractors: ["playing", "played", "plays"],
            examples: [
                { jp: "私は本を読むことが好きです。", en: "I like to read books.", blank: "I like _____ read books.", answer: "to" },
                { jp: "彼女は英語を勉強することを望んでいます。", en: "She wants to study English.", blank: "She wants _____ study English.", answer: "to" },
                { jp: "私の夢は医者になることです。", en: "My dream is to be a doctor.", blank: "My dream is _____ be a doctor.", answer: "to" },
                { jp: "ケンはサッカーをすることが好きです。", en: "Ken likes to play soccer.", blank: "Ken likes to _____ soccer.", answer: "play" },
                { jp: "私たちは公園へ行くことを計画しました。", en: "We planned to go to the park.", blank: "We planned _____ go to the park.", answer: "to" }
            ],
            choiceExamples: [
                { jp: "to read は「読むこと」を表します。", en: "I like to read books.", blank: "I like to read books. の to read は _____.", answer: "読むこと", distractors: ["読むために", "読むための", "読んでいる"] },
                { jp: "want の後ろは to + 動詞の原形です。", en: "She wants to study English.", blank: "She wants _____ study English.", answer: "to", distractors: ["for", "studying", "studies"] },
                { jp: "to be a doctor は「医者になること」です。", en: "My dream is to be a doctor.", blank: "My dream is to _____.", answer: "be a doctor", distractors: ["a doctor", "being a doctor", "was a doctor"] },
                { jp: "to の後ろは動詞の原形です。", en: "Ken likes to play soccer.", blank: "Ken likes to _____ soccer.", answer: "play", distractors: ["plays", "playing", "played"] },
                { jp: "plan の後ろは to + 動詞の原形です。", en: "We planned to go to the park.", blank: "We planned _____ go to the park.", answer: "to", distractors: ["for", "going", "went"] }
            ],
            meaningExamples: [
                { jp: "名詞的用法は「〜すること」を表します。", en: "I like to read books.", blank: "to read books の意味は _____.", answer: "本を読むこと", distractors: ["本を読むために", "読むための本", "本を読んでいる"] },
                { jp: "to + 動詞の原形が目的語になります。", en: "She wants to study English.", blank: "wants の目的語は _____.", answer: "to study English", distractors: ["She", "wants", "English"] },
                { jp: "to の後ろは動詞の原形です。", en: "Ken likes to play soccer.", blank: "to の後ろに置く形は _____.", answer: "動詞の原形", distractors: ["過去形", "ing形", "三単現の形"] }
            ]
        },
        {
            id: "g2-gerund-basic",
            title: "動名詞 (〜すること)",
            rule: "動詞のing形は「〜すること」という名詞の働きをします。",
            distractors: ["to play", "played", "plays"],
            examples: [
                { jp: "私はテニスをすることが好きです。", en: "I like playing tennis.", blank: "I like _____ tennis.", answer: "playing" },
                { jp: "彼女は本を読むことを楽しみます。", en: "She enjoys reading books.", blank: "She enjoys _____ books.", answer: "reading" },
                { jp: "泳ぐことは楽しいです。", en: "Swimming is fun.", blank: "_____ is fun.", answer: "Swimming" },
                { jp: "ケンは夕食を作ることが得意です。", en: "Ken is good at cooking dinner.", blank: "Ken is good at _____ dinner.", answer: "cooking" },
                { jp: "私たちは英語を話すことを練習します。", en: "We practice speaking English.", blank: "We practice _____ English.", answer: "speaking" }
            ]
        },
        {
            id: "g2-gerund-megafeps",
            title: "動名詞しか使えない動詞 (MEGAFEPS)",
            rule: "enjoy / finish / practice / stop などの後ろは動名詞を使います。",
            distractors: ["to read", "read", "reads"],
            examples: [
                { jp: "私は本を読むことを楽しみます。", en: "I enjoy reading books.", blank: "I enjoy _____ books.", answer: "reading" },
                { jp: "彼女は宿題を終えました。", en: "She finished doing her homework.", blank: "She finished _____ her homework.", answer: "doing" },
                { jp: "私たちは英語を話すことを練習しました。", en: "We practiced speaking English.", blank: "We practiced _____ English.", answer: "speaking" },
                { jp: "ケンはテレビを見るのをやめました。", en: "Ken stopped watching TV.", blank: "Ken stopped _____ TV.", answer: "watching" },
                { jp: "彼らは音楽を聞くことを楽しみました。", en: "They enjoyed listening to music.", blank: "They enjoyed _____ to music.", answer: "listening" }
            ],
            reorderExamples: [
                { jp: "私たちは英語を話すことを練習しました。", en: "We practiced speaking English.", blank: "We practiced _____ English.", answer: "speaking" },
                { jp: "ケンはテレビを見るのをやめました。", en: "Ken stopped watching TV.", blank: "Ken stopped _____ TV.", answer: "watching" },
                { jp: "彼らは音楽を聞くことを楽しみました。", en: "They enjoyed listening to music.", blank: "They enjoyed _____ to music.", answer: "listening" },
                { jp: "私は本を読むことを楽しみます。", en: "I enjoy reading books.", blank: "I enjoy _____ books.", answer: "reading" },
                { jp: "彼女はワークシートを書くことを終えました。", en: "She finished writing her worksheet.", blank: "She finished _____ her worksheet.", answer: "writing" }
            ]
        },
        {
            id: "g2-infinitive-only-verbs",
            title: "to不定詞しか使えない動詞",
            rule: "want / hope / plan / decide などの後ろは to + 動詞の原形を使います。",
            distractors: ["going", "went", "goes"],
            examples: [
                { jp: "私は京都へ行きたいです。", en: "I want to go to Kyoto.", blank: "I want _____ go to Kyoto.", answer: "to" },
                { jp: "彼女は医者になることを望んでいます。", en: "She hopes to be a doctor.", blank: "She hopes _____ be a doctor.", answer: "to" },
                { jp: "私たちは明日出発することを計画しています。", en: "We plan to leave tomorrow.", blank: "We plan _____ leave tomorrow.", answer: "to" },
                { jp: "ケンは新しい本を買うことに決めました。", en: "Ken decided to buy a new book.", blank: "Ken decided _____ buy a new book.", answer: "to" },
                { jp: "彼らは英語を学ぶ必要があります。", en: "They need to learn English.", blank: "They need _____ learn English.", answer: "to" }
            ]
        },
        {
            id: "g2-infinitive-adjective",
            title: "不定詞(2) 形容詞的用法",
            rule: "to + 動詞の原形は、前の名詞を説明して「〜するための」「〜すべき」と表せます。",
            distractors: ["for", "of", "with"],
            examples: [
                { jp: "私は読む本がほしいです。", en: "I want a book to read.", blank: "I want a book _____ read.", answer: "to" },
                { jp: "彼女は飲む水を必要としています。", en: "She needs water to drink.", blank: "She needs water _____ drink.", answer: "to" },
                { jp: "私たちは遊ぶ場所を探しています。", en: "We are looking for a place to play.", blank: "We are looking for a place _____ play.", answer: "to" },
                { jp: "ケンにはするべき宿題があります。", en: "Ken has homework to do.", blank: "Ken has homework _____ do.", answer: "to" },
                { jp: "私は手紙を書くためのペンを持っています。", en: "I have a pen to write with.", blank: "I have a pen _____ write with.", answer: "to" }
            ],
            choiceExamples: [
                { jp: "to read は前の名詞 book を説明します。", en: "I want a book to read.", blank: "a book to read の意味は _____.", answer: "読む本", distractors: ["本を読むこと", "読むために", "本を読んでいる"] },
                { jp: "to の後ろは動詞の原形です。", en: "She needs water to drink.", blank: "She needs water to _____.", answer: "drink", distractors: ["drinks", "drinking", "drank"] },
                { jp: "to play は前の名詞 place を説明します。", en: "We are looking for a place to play.", blank: "to play が説明している名詞は _____.", answer: "place", distractors: ["We", "looking", "play"] },
                { jp: "homework to do は「するべき宿題」です。", en: "Ken has homework to do.", blank: "homework to do の意味は _____.", answer: "するべき宿題", distractors: ["宿題をすること", "宿題をするために", "宿題をしている"] },
                { jp: "write with は「それを使って書く」という形です。", en: "I have a pen to write with.", blank: "I have a pen to write _____.", answer: "with", distractors: ["to", "for", "at"] }
            ],
            meaningExamples: [
                { jp: "形容詞的用法は前の名詞を後ろから説明します。", en: "I want a book to read.", blank: "to read が説明している語は _____.", answer: "book", distractors: ["I", "want", "read"] },
                { jp: "a place to play は「遊ぶ場所」です。", en: "We are looking for a place to play.", blank: "a place to play の意味は _____.", answer: "遊ぶ場所", distractors: ["遊ぶこと", "遊ぶために", "遊んでいる場所"] },
                { jp: "to の後ろは動詞の原形です。", en: "Ken has homework to do.", blank: "homework to do の do は _____.", answer: "動詞の原形", distractors: ["過去形", "ing形", "三単現"] }
            ]
        },
        {
            id: "g2-infinitive-adverb-purpose",
            title: "不定詞(3) 副詞的用法（目的）",
            rule: "to + 動詞の原形は「〜するために」という目的を表せます。",
            distractors: ["for", "because", "with"],
            examples: [
                { jp: "私は英語を勉強するために図書館へ行きました。", en: "I went to the library to study English.", blank: "I went to the library _____ study English.", answer: "to" },
                { jp: "彼女は昼食を買うために店へ行きました。", en: "She went to the store to buy lunch.", blank: "She went to the store _____ buy lunch.", answer: "to" },
                { jp: "私たちはサッカーをするために公園へ行きました。", en: "We went to the park to play soccer.", blank: "We went to the park _____ play soccer.", answer: "to" },
                { jp: "ケンは友達に会うために駅へ行きました。", en: "Ken went to the station to meet his friend.", blank: "Ken went to the station _____ meet his friend.", answer: "to" },
                { jp: "私は写真を撮るためにカメラを使いました。", en: "I used a camera to take pictures.", blank: "I used a camera _____ take pictures.", answer: "to" }
            ],
            choiceExamples: [
                { jp: "目的を表す to は「〜するために」です。", en: "I went to the library to study English.", blank: "to study English の意味は _____.", answer: "英語を勉強するために", distractors: ["英語を勉強すること", "英語を勉強するための", "英語を勉強している"] },
                { jp: "to の後ろは動詞の原形です。", en: "She went to the store to buy lunch.", blank: "She went to the store to _____ lunch.", answer: "buy", distractors: ["buys", "buying", "bought"] },
                { jp: "to play soccer は公園へ行った目的です。", en: "We went to the park to play soccer.", blank: "この文で目的を表す部分は _____.", answer: "to play soccer", distractors: ["We went", "the park", "soccer"] },
                { jp: "友達に会う目的を表します。", en: "Ken went to the station to meet his friend.", blank: "Ken went to the station _____ meet his friend.", answer: "to", distractors: ["for", "because", "with"] },
                { jp: "カメラを使った目的を表します。", en: "I used a camera to take pictures.", blank: "to take pictures の意味は _____.", answer: "写真を撮るために", distractors: ["写真を撮ること", "写真を撮るための", "写真を撮っている"] }
            ],
            meaningExamples: [
                { jp: "副詞的用法（目的）は「〜するために」です。", en: "I went to the library to study English.", blank: "この to の用法は _____.", answer: "目的", distractors: ["名詞的用法", "形容詞的用法", "比較"] },
                { jp: "to buy lunch は店へ行った目的です。", en: "She went to the store to buy lunch.", blank: "to buy lunch が表すものは _____.", answer: "目的", distractors: ["主語", "場所", "時"] },
                { jp: "to の後ろは動詞の原形です。", en: "I used a camera to take pictures.", blank: "to の後ろに置く形は _____.", answer: "動詞の原形", distractors: ["過去形", "ing形", "三単現"] }
            ]
        },
        {
            id: "g2-infinitive-adverb-emotion",
            title: "不定詞(4) 副詞的用法（感情の原因）",
            rule: "感情を表す形容詞の後ろの to + 動詞の原形は、感情の原因を表します。",
            distractors: ["for", "because", "at"],
            examples: [
                { jp: "私はその知らせを聞いてうれしかったです。", en: "I was happy to hear the news.", blank: "I was happy _____ hear the news.", answer: "to" },
                { jp: "彼女はその試合に勝って驚きました。", en: "She was surprised to win the game.", blank: "She was surprised _____ win the game.", answer: "to" },
                { jp: "私たちはあなたに会えてうれしいです。", en: "We are glad to see you.", blank: "We are glad _____ see you.", answer: "to" },
                { jp: "ケンはその話を聞いて悲しかったです。", en: "Ken was sad to hear the story.", blank: "Ken was sad _____ hear the story.", answer: "to" },
                { jp: "私はその写真を見てわくわくしました。", en: "I was excited to see the picture.", blank: "I was excited _____ see the picture.", answer: "to" }
            ],
            choiceExamples: [
                { jp: "感情の原因を表す to は「〜して」です。", en: "I was happy to hear the news.", blank: "to hear the news の意味は _____.", answer: "その知らせを聞いて", distractors: ["その知らせを聞くこと", "その知らせを聞くために", "その知らせを聞くための"] },
                { jp: "to の後ろは動詞の原形です。", en: "She was surprised to win the game.", blank: "She was surprised to _____ the game.", answer: "win", distractors: ["wins", "winning", "won"] },
                { jp: "glad の原因を表します。", en: "We are glad to see you.", blank: "We are glad _____ see you.", answer: "to", distractors: ["for", "because", "with"] },
                { jp: "sad の原因を表します。", en: "Ken was sad to hear the story.", blank: "to hear the story が表すものは _____.", answer: "悲しかった理由", distractors: ["目的", "場所", "比較"] },
                { jp: "excited の原因を表します。", en: "I was excited to see the picture.", blank: "I was excited to _____ the picture.", answer: "see", distractors: ["saw", "seeing", "sees"] }
            ],
            meaningExamples: [
                { jp: "感情の原因を表す用法です。", en: "I was happy to hear the news.", blank: "この to の用法は _____.", answer: "感情の原因", distractors: ["目的", "名詞的用法", "形容詞的用法"] },
                { jp: "surprised の理由を表します。", en: "She was surprised to win the game.", blank: "to win the game は何を表しますか。", answer: "驚いた理由", distractors: ["勝つ目的", "勝つための試合", "勝っている人"] },
                { jp: "to の後ろは動詞の原形です。", en: "We are glad to see you.", blank: "to の後ろに置く形は _____.", answer: "動詞の原形", distractors: ["過去形", "ing形", "三単現"] }
            ]
        },
        {
            id: "g2-future-will",
            title: "未来形 will",
            rule: "will + 動詞の原形で、未来の予定やその場での意思を表します。",
            distractors: ["went", "goes", "going"],
            examples: [
                { jp: "私は明日京都を訪れるでしょう。", en: "I will visit Kyoto tomorrow.", blank: "I will _____ Kyoto tomorrow.", answer: "visit" },
                { jp: "彼女は今夜英語を勉強するでしょう。", en: "She will study English tonight.", blank: "She will _____ English tonight.", answer: "study" },
                { jp: "私たちは日曜日にサッカーをするでしょう。", en: "We will play soccer on Sunday.", blank: "We will _____ soccer on Sunday.", answer: "play" },
                { jp: "ケンはあなたを手伝うでしょう。", en: "Ken will help you.", blank: "Ken will _____ you.", answer: "help" },
                { jp: "彼らはすぐに帰ってくるでしょう。", en: "They will come back soon.", blank: "They will _____ back soon.", answer: "come" }
            ]
        },
        {
            id: "g2-will-negative-and-question",
            title: "willの否定文・疑問文",
            rule: "will の否定文は will not / won't、疑問文は Will を文頭に置きます。",
            distractors: ["don't", "didn't", "aren't"],
            examples: [
                { jp: "私は明日出かけないでしょう。", en: "I won't go out tomorrow.", blank: "I _____ go out tomorrow.", answer: "won't" },
                { jp: "あなたは私を手伝ってくれますか。", en: "Will you help me?", blank: "_____ you help me?", answer: "Will" },
                { jp: "彼女は今夜テレビを見ないでしょう。", en: "She won't watch TV tonight.", blank: "She _____ watch TV tonight.", answer: "won't" },
                { jp: "彼らは試合に勝つでしょうか。", en: "Will they win the game?", blank: "_____ they win the game?", answer: "Will" },
                { jp: "ケンは明日ここに来ないでしょう。", en: "Ken won't come here tomorrow.", blank: "Ken _____ come here tomorrow.", answer: "won't" }
            ]
        },
        {
            id: "g2-have-to",
            title: "have to (義務)",
            rule: "have to + 動詞の原形で「〜しなければならない」を表します。三人称単数では has to です。",
            distractors: ["must to", "having to", "has"],
            examples: [
                { jp: "私は宿題をしなければなりません。", en: "I have to do my homework.", blank: "I _____ to do my homework.", answer: "have" },
                { jp: "彼女は早く起きなければなりません。", en: "She has to get up early.", blank: "She _____ to get up early.", answer: "has" },
                { jp: "私たちは英語を勉強しなければなりません。", en: "We have to study English.", blank: "We have to _____ English.", answer: "study" },
                { jp: "ケンは部屋を掃除しなければなりません。", en: "Ken has to clean his room.", blank: "Ken has to _____ his room.", answer: "clean" },
                { jp: "彼らは昼食を作らなければなりません。", en: "They have to make lunch.", blank: "They _____ to make lunch.", answer: "have" }
            ],
            reorderExamples: [
                { jp: "私たちは英語を勉強しなければなりません。", en: "We have to study English.", blank: "We have to _____ English.", answer: "study" },
                { jp: "ケンは部屋を掃除しなければなりません。", en: "Ken has to clean his room.", blank: "Ken has to _____ his room.", answer: "clean" },
                { jp: "彼らは昼食を作らなければなりません。", en: "They have to make lunch.", blank: "They _____ to make lunch.", answer: "have" },
                { jp: "私は宿題をしなければなりません。", en: "I have to do my homework.", blank: "I _____ to do my homework.", answer: "have" },
                { jp: "彼女は早く起きなければなりません。", en: "She has to get up early.", blank: "She _____ to get up early.", answer: "has" }
            ]
        },
        {
            id: "g2-have-to-negative-and-question",
            title: "have to の否定文・疑問文",
            rule: "have to の否定文・疑問文は don't / doesn't / Do / Does を使います。",
            distractors: ["mustn't", "isn't", "aren't"],
            examples: [
                { jp: "私は今日は早く起きる必要はありません。", en: "I don't have to get up early today.", blank: "I _____ have to get up early today.", answer: "don't" },
                { jp: "彼女は昼食を作る必要はありません。", en: "She doesn't have to make lunch.", blank: "She _____ have to make lunch.", answer: "doesn't" },
                { jp: "あなたは今宿題をしなければなりませんか。", en: "Do you have to do your homework now?", blank: "_____ you have to do your homework now?", answer: "Do" },
                { jp: "ケンは部屋を掃除しなければなりませんか。", en: "Does Ken have to clean his room?", blank: "_____ Ken have to clean his room?", answer: "Does" },
                { jp: "私たちはここで待つ必要はありません。", en: "We don't have to wait here.", blank: "We _____ have to wait here.", answer: "don't" }
            ],
            reorderExamples: [
                { jp: "あなたは今宿題をしなければなりませんか。", en: "Do you have to do your homework now?", blank: "_____ you have to do your homework now?", answer: "Do" },
                { jp: "ケンは部屋を掃除しなければなりませんか。", en: "Does Ken have to clean his room?", blank: "_____ Ken have to clean his room?", answer: "Does" },
                { jp: "私たちはここで待つ必要はありません。", en: "We don't have to wait here.", blank: "We _____ have to wait here.", answer: "don't" },
                { jp: "私は今日は早く起きる必要はありません。", en: "I don't have to get up early today.", blank: "I _____ have to get up early today.", answer: "don't" },
                { jp: "彼女は昼食を作る必要はありません。", en: "She doesn't have to make lunch.", blank: "She _____ have to make lunch.", answer: "doesn't" }
            ]
        },
        {
            id: "g2-auxiliary-must",
            title: "助動詞 must (義務)",
            rule: "must + 動詞の原形で「〜しなければならない」を表します。must の後ろは必ず原形です。",
            distractors: ["to study", "studies", "studying"],
            examples: [
                { jp: "私は英語を勉強しなければなりません。", en: "I must study English.", blank: "I must _____ English.", answer: "study" },
                { jp: "あなたは早く寝なければなりません。", en: "You must go to bed early.", blank: "You must _____ to bed early.", answer: "go" },
                { jp: "彼女は部屋を掃除しなければなりません。", en: "She must clean her room.", blank: "She must _____ her room.", answer: "clean" },
                { jp: "私たちはその規則を守らなければなりません。", en: "We must follow the rule.", blank: "We must _____ the rule.", answer: "follow" },
                { jp: "ケンはその本を読まなければなりません。", en: "Ken must read the book.", blank: "Ken must _____ the book.", answer: "read" }
            ]
        },
        {
            id: "g2-must-negative-and-question",
            title: "must の否定文・疑問文",
            rule: "must not は「〜してはいけない」、疑問文は Must を文頭に置きます。",
            distractors: ["don't", "doesn't", "can't"],
            examples: [
                { jp: "あなたはここで走ってはいけません。", en: "You must not run here.", blank: "You must _____ run here.", answer: "not" },
                { jp: "私は今行かなければなりませんか。", en: "Must I go now?", blank: "_____ I go now?", answer: "Must" },
                { jp: "彼らはそのドアを開けてはいけません。", en: "They must not open the door.", blank: "They must _____ open the door.", answer: "not" },
                { jp: "私たちはこの本を読まなければなりませんか。", en: "Must we read this book?", blank: "_____ we read this book?", answer: "Must" },
                { jp: "ケンはここで食べてはいけません。", en: "Ken must not eat here.", blank: "Ken must _____ eat here.", answer: "not" }
            ]
        },
        {
            id: "g2-auxiliary-may",
            title: "助動詞 may",
            rule: "may + 動詞の原形で「〜してもよい」「〜かもしれない」を表します。",
            distractors: ["to use", "uses", "using"],
            examples: [
                { jp: "あなたはこのペンを使ってもよいです。", en: "You may use this pen.", blank: "You may _____ this pen.", answer: "use" },
                { jp: "彼は遅れるかもしれません。", en: "He may be late.", blank: "He may _____ late.", answer: "be" },
                { jp: "私たちはここで昼食を食べてもよいです。", en: "We may eat lunch here.", blank: "We may _____ lunch here.", answer: "eat" },
                { jp: "彼女は今日来るかもしれません。", en: "She may come today.", blank: "She may _____ today.", answer: "come" },
                { jp: "彼らはその部屋に入ってもよいです。", en: "They may enter the room.", blank: "They may _____ the room.", answer: "enter" }
            ]
        },
        {
            id: "g2-auxiliary-should",
            title: "助動詞 should",
            rule: "should + 動詞の原形で「〜すべきだ」「〜したほうがよい」を表します。",
            distractors: ["to study", "studies", "studying"],
            examples: [
                { jp: "あなたは英語を勉強すべきです。", en: "You should study English.", blank: "You should _____ English.", answer: "study" },
                { jp: "彼女は早く寝たほうがよいです。", en: "She should go to bed early.", blank: "She should _____ to bed early.", answer: "go" },
                { jp: "私たちはその規則を守るべきです。", en: "We should follow the rule.", blank: "We should _____ the rule.", answer: "follow" },
                { jp: "ケンはもっと水を飲むべきです。", en: "Ken should drink more water.", blank: "Ken should _____ more water.", answer: "drink" },
                { jp: "彼らは部屋を掃除すべきです。", en: "They should clean the room.", blank: "They should _____ the room.", answer: "clean" }
            ]
        },
        {
            id: "g2-conjunction-when",
            title: "接続詞 when",
            rule: "when は「〜するとき」という意味で、2つの文をつなぎます。",
            distractors: ["because", "if", "that"],
            examples: [
                { jp: "私は暇なとき本を読みます。", en: "I read books when I am free.", blank: "I read books _____ I am free.", answer: "when" },
                { jp: "彼女は家に帰るとき音楽を聞きます。", en: "She listens to music when she goes home.", blank: "She listens to music _____ she goes home.", answer: "when" },
                { jp: "私たちは雨が降るとき家にいます。", en: "We stay home when it rains.", blank: "We stay home _____ it rains.", answer: "when" },
                { jp: "ケンは勉強するとき辞書を使います。", en: "Ken uses a dictionary when he studies.", blank: "Ken uses a dictionary _____ he studies.", answer: "when" },
                { jp: "私は母が忙しいとき手伝います。", en: "I help my mother when she is busy.", blank: "I help my mother _____ she is busy.", answer: "when" }
            ]
        },
        {
            id: "g2-there-is-are",
            title: "There is / are (存在)",
            rule: "There is / are は「〜がある・いる」を表します。単数は is、複数は are です。",
            distractors: ["is", "are", "am"],
            examples: [
                { jp: "机の上に本があります。", en: "There is a book on the desk.", blank: "There _____ a book on the desk.", answer: "is" },
                { jp: "公園にたくさんの子どもたちがいます。", en: "There are many children in the park.", blank: "There _____ many children in the park.", answer: "are" },
                { jp: "私の町には図書館があります。", en: "There is a library in my town.", blank: "There is _____ library in my town.", answer: "a" },
                { jp: "箱の中に3つのりんごがあります。", en: "There are three apples in the box.", blank: "There are three _____ in the box.", answer: "apples" },
                { jp: "教室には生徒がいません。", en: "There are no students in the classroom.", blank: "There are _____ students in the classroom.", answer: "no" }
            ]
        },
        {
            id: "g2-conjunction-because",
            title: "接続詞 because",
            rule: "because は「なぜなら〜だから」という理由を表し、2つの文をつなぎます。",
            distractors: ["when", "if", "that"],
            examples: [
                { jp: "私は忙しいのでテレビを見ません。", en: "I don't watch TV because I am busy.", blank: "I don't watch TV _____ I am busy.", answer: "because" },
                { jp: "彼女は病気なので学校を休みました。", en: "She was absent because she was sick.", blank: "She was absent _____ she was sick.", answer: "because" },
                { jp: "私たちは雨だったので家にいました。", en: "We stayed home because it was rainy.", blank: "We stayed home _____ it was rainy.", answer: "because" },
                { jp: "ケンは英語が好きなので毎日勉強します。", en: "Ken studies every day because he likes English.", blank: "Ken studies every day _____ he likes English.", answer: "because" },
                { jp: "私は寒かったので窓を閉めました。", en: "I closed the window because it was cold.", blank: "I closed the window _____ it was cold.", answer: "because" }
            ]
        },
        {
            id: "g2-conjunction-if",
            title: "接続詞 if",
            rule: "if は「もし〜ならば」を表します。条件を表す文と結果を表す文をつなぎます。",
            distractors: ["because", "when", "that"],
            examples: [
                { jp: "もし明日晴れなら、私たちは公園へ行きます。", en: "If it is sunny tomorrow, we will go to the park.", blank: "_____ it is sunny tomorrow, we will go to the park.", answer: "If" },
                { jp: "もし時間があれば、私はあなたを手伝います。", en: "If I have time, I will help you.", blank: "_____ I have time, I will help you.", answer: "If" },
                { jp: "もし雨が降れば、私たちは家にいます。", en: "If it rains, we will stay home.", blank: "_____ it rains, we will stay home.", answer: "If" },
                { jp: "もし彼女が来たら、私はうれしいです。", en: "If she comes, I will be happy.", blank: "_____ she comes, I will be happy.", answer: "If" },
                { jp: "もしケンが忙しければ、私は待ちます。", en: "If Ken is busy, I will wait.", blank: "_____ Ken is busy, I will wait.", answer: "If" }
            ]
        },
        {
            id: "g2-that-clause-i-think",
            title: "I think (that) の文",
            rule: "I think (that) + 主語 + 動詞で「〜だと思います」を表します。that は省略できます。",
            distractors: ["what", "when", "because"],
            examples: [
                { jp: "私は彼が親切だと思います。", en: "I think that he is kind.", blank: "I think _____ he is kind.", answer: "that" },
                { jp: "彼女はケンが正しいと思っています。", en: "She thinks that Ken is right.", blank: "She thinks _____ Ken is right.", answer: "that" },
                { jp: "私たちは英語は大切だと思います。", en: "We think that English is important.", blank: "We think _____ English is important.", answer: "that" },
                { jp: "私はその映画はおもしろいと思います。", en: "I think that the movie is interesting.", blank: "I think _____ the movie is interesting.", answer: "that" },
                { jp: "彼らはユキが忙しいと思っています。", en: "They think that Yuki is busy.", blank: "They think _____ Yuki is busy.", answer: "that" }
            ]
        },
        {
            id: "g2-comparative",
            title: "比較級 (Comparative)",
            rule: "比較級 + than で「AはBより〜だ」を表します。",
            distractors: ["as", "of", "in"],
            examples: [
                { jp: "ケンはユキより背が高いです。", en: "Ken is taller than Yuki.", blank: "Ken is taller _____ Yuki.", answer: "than" },
                { jp: "この本はあの本より新しいです。", en: "This book is newer than that one.", blank: "This book is _____ than that one.", answer: "newer" },
                { jp: "私の犬はあなたの犬より大きいです。", en: "My dog is bigger than your dog.", blank: "My dog is _____ than your dog.", answer: "bigger" },
                { jp: "英語は数学より簡単です。", en: "English is easier than math.", blank: "English is _____ than math.", answer: "easier" },
                { jp: "この映画はあの映画より人気があります。", en: "This movie is more popular than that one.", blank: "This movie is _____ popular than that one.", answer: "more" }
            ],
            choiceExamples: [
                { jp: "比較級では than を使います。", en: "Ken is taller than Yuki.", blank: "Ken is taller _____ Yuki.", answer: "than", distractors: ["as", "of", "in"] },
                { jp: "new の比較級は newer です。", en: "This book is newer than that one.", blank: "This book is _____ than that one.", answer: "newer", distractors: ["newest", "more new", "new"] },
                { jp: "big の比較級は bigger です。", en: "My dog is bigger than your dog.", blank: "My dog is _____ than your dog.", answer: "bigger", distractors: ["biggest", "more big", "big"] },
                { jp: "比較する相手は than の後ろに置きます。", en: "English is easier than math.", blank: "English is easier than _____.", answer: "math", distractors: ["easy", "more", "in"] },
                { jp: "長い形容詞の比較級は more を使います。", en: "This movie is more popular than that one.", blank: "This movie is _____ popular than that one.", answer: "more", distractors: ["most", "as", "the"] }
            ],
            reorderExamples: [
                { jp: "私の犬はあなたの犬より大きいです。", en: "My dog is bigger than your dog.", blank: "My dog is _____ than your dog.", answer: "bigger" },
                { jp: "理科は数学より簡単です。", en: "Science is easier than math.", blank: "Science is _____ than math.", answer: "easier" },
                { jp: "この映画はあの映画より人気があります。", en: "This movie is more popular than that one.", blank: "This movie is _____ popular than that one.", answer: "more" },
                { jp: "ケンはユキより背が高いです。", en: "Ken is taller than Yuki.", blank: "Ken is taller _____ Yuki.", answer: "than" },
                { jp: "この本はあの本より新しいです。", en: "This book is newer than that one.", blank: "This book is _____ than that one.", answer: "newer" }
            ]
        },
        {
            id: "g2-comparative-rules",
            title: "比較級の変化ルール",
            rule: "比較級は er / r / ier / more / 不規則変化など、語によって作り方が変わります。",
            distractors: ["old", "oldest", "more old"],
            examples: [
                { jp: "この町はあの町より古いです。", en: "This town is older than that town.", blank: "This town is _____ than that town.", answer: "older" },
                { jp: "この箱はあの箱より大きいです。", en: "This box is bigger than that box.", blank: "This box is _____ than that box.", answer: "bigger" },
                { jp: "ユキはケンより幸せそうです。", en: "Yuki is happier than Ken.", blank: "Yuki is _____ than Ken.", answer: "happier" },
                { jp: "この問題はあの問題より難しいです。", en: "This question is more difficult than that one.", blank: "This question is _____ difficult than that one.", answer: "more" },
                { jp: "この歌はあの歌よりよいです。", en: "This song is better than that one.", blank: "This song is _____ than that one.", answer: "better" }
            ]
        },
        {
            id: "g2-superlative",
            title: "最上級 (Superlative)",
            rule: "the + 最上級で「一番〜だ」を表します。範囲には in や of を使います。",
            distractors: ["than", "as", "more"],
            examples: [
                { jp: "ケンはクラスで一番背が高いです。", en: "Ken is the tallest in his class.", blank: "Ken is the _____ in his class.", answer: "tallest" },
                { jp: "この本は3冊の中で一番新しいです。", en: "This book is the newest of the three.", blank: "This book is the newest _____ the three.", answer: "of" },
                { jp: "富士山は日本で一番高い山です。", en: "Mt. Fuji is the highest mountain in Japan.", blank: "Mt. Fuji is the _____ mountain in Japan.", answer: "highest" },
                { jp: "彼女は私たちの学校で一番人気があります。", en: "She is the most popular in our school.", blank: "She is the _____ popular in our school.", answer: "most" },
                { jp: "これはすべての中で一番よい考えです。", en: "This is the best idea of all.", blank: "This is the _____ idea of all.", answer: "best" }
            ],
            choiceExamples: [
                { jp: "最上級には the をつけます。", en: "Ken is the tallest in his class.", blank: "Ken is _____ tallest in his class.", answer: "the", distractors: ["than", "as", "more"] },
                { jp: "3つの中では of the three を使えます。", en: "This book is the newest of the three.", blank: "This book is the newest _____ the three.", answer: "of", distractors: ["in", "than", "as"] },
                { jp: "高い山は highest mountain と表します。", en: "Mt. Fuji is the highest mountain in Japan.", blank: "Mt. Fuji is the _____ mountain in Japan.", answer: "highest", distractors: ["higher", "high", "more high"] },
                { jp: "popular の最上級は most popular です。", en: "She is the most popular in our school.", blank: "She is the _____ popular in our school.", answer: "most", distractors: ["more", "as", "than"] },
                { jp: "good の最上級は best です。", en: "This is the best idea of all.", blank: "This is the _____ idea of all.", answer: "best", distractors: ["better", "good", "more good"] }
            ],
            reorderExamples: [
                { jp: "富士山は日本で一番高い山です。", en: "Mt. Fuji is the highest mountain in Japan.", blank: "Mt. Fuji is the _____ mountain in Japan.", answer: "highest" },
                { jp: "彼女は私たちのクラスで一番人気があります。", en: "She is the most popular in our class.", blank: "She is the _____ popular in our class.", answer: "most" },
                { jp: "これはすべての中で一番よい考えです。", en: "This is the best idea of all.", blank: "This is the _____ idea of all.", answer: "best" },
                { jp: "ケンはクラスで一番背が高いです。", en: "Ken is the tallest in his class.", blank: "Ken is the _____ in his class.", answer: "tallest" },
                { jp: "この本は3冊の中で一番新しいです。", en: "This book is the newest of the three.", blank: "This book is the newest _____ the three.", answer: "of" }
            ],
            translationExamples: [
                { jp: "彼女は私たちのクラスで一番人気があります。", en: "She is the most popular in our class.", blank: "She is the _____ popular in our class.", answer: "most", hints: ["is", "most"], answers: ["She is the most popular in our class."] },
                { jp: "これはすべての中で一番よい考えです。", en: "This is the best idea of all.", blank: "This is the _____ idea of all.", answer: "best", hints: ["best", "idea"], answers: ["This is the best idea of all."] }
            ]
        },
        {
            id: "g2-superlative-rules",
            title: "最上級の変化ルール",
            rule: "最上級は est / st / iest / most / 不規則変化など、語によって作り方が変わります。",
            distractors: ["older", "old", "more old"],
            examples: [
                { jp: "この建物は町で一番古いです。", en: "This building is the oldest in the town.", blank: "This building is the _____ in the town.", answer: "oldest" },
                { jp: "この湖は日本で一番大きいです。", en: "This lake is the largest in Japan.", blank: "This lake is the _____ in Japan.", answer: "largest" },
                { jp: "ユキは3人の中で一番幸せそうです。", en: "Yuki is the happiest of the three.", blank: "Yuki is the _____ of the three.", answer: "happiest" },
                { jp: "この花は庭で一番美しいです。", en: "This flower is the most beautiful in the garden.", blank: "This flower is the _____ beautiful in the garden.", answer: "most" },
                { jp: "これはすべての中で一番悪い結果です。", en: "This is the worst result of all.", blank: "This is the _____ result of all.", answer: "worst" }
            ]
        },
        {
            id: "g2-as-as-comparison",
            title: "as 〜 as (同等比較)",
            rule: "as + 原級 + as で「同じくらい〜だ」を表します。否定形は not as ... as です。",
            distractors: ["than", "more", "the"],
            examples: [
                { jp: "ケンはユキと同じくらい背が高いです。", en: "Ken is as tall as Yuki.", blank: "Ken is as tall _____ Yuki.", answer: "as" },
                { jp: "この本はあの本と同じくらいおもしろいです。", en: "This book is as interesting as that one.", blank: "This book is as _____ as that one.", answer: "interesting" },
                { jp: "私は兄ほど速く走れません。", en: "I can't run as fast as my brother.", blank: "I can't run as _____ as my brother.", answer: "fast" },
                { jp: "この犬はあの犬ほど大きくありません。", en: "This dog is not as big as that dog.", blank: "This dog is not as _____ as that dog.", answer: "big" },
                { jp: "英語は数学と同じくらい大切です。", en: "English is as important as math.", blank: "English is as _____ as math.", answer: "important" }
            ],
            choiceExamples: [
                { jp: "as ... as で「同じくらい〜」を表します。", en: "Ken is as tall as Yuki.", blank: "Ken is as tall _____ Yuki.", answer: "as", distractors: ["than", "of", "the"] },
                { jp: "as と as の間は原級です。", en: "This book is as interesting as that one.", blank: "This book is as _____ as that one.", answer: "interesting", distractors: ["more interesting", "most interesting", "interest"] },
                { jp: "not as ... as は「ほど〜ではない」です。", en: "I can't run as fast as my brother.", blank: "I can't run as _____ as my brother.", answer: "fast", distractors: ["faster", "fastest", "more fast"] },
                { jp: "否定形でも as と as の間は原級です。", en: "This dog is not as big as that dog.", blank: "This dog is not as _____ as that dog.", answer: "big", distractors: ["bigger", "biggest", "more big"] },
                { jp: "important は原級のまま使います。", en: "English is as important as math.", blank: "English is as _____ as math.", answer: "important", distractors: ["more important", "most important", "importance"] }
            ],
            reorderExamples: [
                { jp: "私は兄ほど速く走れません。", en: "I can't run as fast as my brother.", blank: "I can't run as _____ as my brother.", answer: "fast" },
                { jp: "この犬はあの犬ほど大きくありません。", en: "This dog is not as big as that dog.", blank: "This dog is not as _____ as that dog.", answer: "big" },
                { jp: "理科は数学と同じくらい大切です。", en: "Science is as important as math.", blank: "Science is as _____ as math.", answer: "important" },
                { jp: "ケンはユキと同じくらい背が高いです。", en: "Ken is as tall as Yuki.", blank: "Ken is as tall _____ Yuki.", answer: "as" },
                { jp: "この本はあの本と同じくらいおもしろいです。", en: "This book is as interesting as that one.", blank: "This book is as _____ as that one.", answer: "interesting" }
            ]
        },
        {
            id: "g2-want-ask-tell",
            title: "want / ask / tell 人 to do",
            rule: "want / ask / tell + 人 + to + 動詞の原形で「人に〜してほしい・頼む・言う」を表します。",
            distractors: ["do", "doing", "does"],
            examples: [
                { jp: "私はケンに私を手伝ってほしいです。", en: "I want Ken to help me.", blank: "I want Ken _____ help me.", answer: "to" },
                { jp: "彼女は私にドアを開けるよう頼みました。", en: "She asked me to open the door.", blank: "She asked me _____ open the door.", answer: "to" },
                { jp: "先生は私たちに静かにするよう言いました。", en: "The teacher told us to be quiet.", blank: "The teacher told us _____ be quiet.", answer: "to" },
                { jp: "母は私に部屋を掃除してほしいです。", en: "My mother wants me to clean my room.", blank: "My mother wants me _____ clean my room.", answer: "to" },
                { jp: "私は友達に待つよう頼みました。", en: "I asked my friend to wait.", blank: "I asked my friend _____ wait.", answer: "to" }
            ],
            choiceExamples: [
                { jp: "私はケンに私を手伝ってほしいです。", en: "I want Ken to help me.", blank: "I _____ Ken to help me.", answer: "want", distractors: ["ask", "tell", "make"] },
                { jp: "先生は私たちに名前を書くよう頼みました。", en: "The teacher asked us to write our names.", blank: "The teacher asked us _____ write our names.", answer: "to", distractors: ["for", "that", "with"] },
                { jp: "彼女は私に座るよう言いました。", en: "She told me to sit down.", blank: "She told _____ to sit down.", answer: "me", distractors: ["I", "my", "mine"] },
                { jp: "母は私に部屋を掃除してほしいです。", en: "My mother wants me to clean my room.", blank: "My mother _____ me to clean my room.", answer: "wants", distractors: ["want", "asking", "tell"] },
                { jp: "私は友達に待つよう頼みました。", en: "I asked my friend to wait.", blank: "I asked my friend to _____.", answer: "wait", distractors: ["waits", "waiting", "waited"] }
            ],
            fillExamples: [
                { jp: "私はケンに私を手伝ってほしいです。", en: "I want Ken to help me.", blank: "I _____ Ken to help me.", answer: "want" },
                { jp: "先生は私たちに名前を書くよう頼みました。", en: "The teacher asked us to write our names.", blank: "The teacher asked us to _____ our names.", answer: "write" },
                { jp: "彼女は私に座るよう言いました。", en: "She told me to sit down.", blank: "She told _____ to sit down.", answer: "me" },
                { jp: "母は私に部屋を掃除してほしいです。", en: "My mother wants me to clean my room.", blank: "My mother wants me _____ clean my room.", answer: "to" },
                { jp: "私は友達にいっしょに来てほしいです。", en: "I want my friend to come with me.", blank: "I want my friend to _____ with me.", answer: "come" }
            ],
            meaningExamples: [
                { jp: "「人に〜するよう頼む」は ask 人 to do です。", en: "She asked me to open the door.", blank: "「人に〜するよう頼む」を表す動詞は _____.", answer: "ask", distractors: ["want", "tell", "let"] },
                { jp: "「人に〜するよう言う」は tell 人 to do です。", en: "The teacher told us to be quiet.", blank: "「人に〜するよう言う」を表す動詞は _____.", answer: "tell", distractors: ["want", "ask", "make"] },
                { jp: "want / ask / tell の後ろは 人 + to + 動詞の原形 です。", en: "I want Ken to help me.", blank: "want Ken の後ろに続く形は _____.", answer: "to help", distractors: ["help", "helps", "helping"] }
            ]
        },
        {
            id: "g2-help-let-make",
            title: "help / let / make + 人 + 動詞の原形",
            rule: "help / let / make の後ろでは、人の後に動詞の原形を置きます。to を入れない形に注意します。",
            distractors: ["to use", "uses", "using"],
            examples: [
                { jp: "私は妹が英語を勉強するのを手伝いました。", en: "I helped my sister study English.", blank: "I helped my sister _____ English.", answer: "study" },
                { jp: "父は私に車を使わせてくれました。", en: "My father let me use his car.", blank: "My father let me _____ his car.", answer: "use" },
                { jp: "その知らせは私を幸せにしました。", en: "The news made me happy.", blank: "The news made me _____.", answer: "happy" },
                { jp: "母は私に夕食を作らせました。", en: "My mother made me cook dinner.", blank: "My mother made me _____ dinner.", answer: "cook" },
                { jp: "ケンは私がその箱を運ぶのを手伝いました。", en: "Ken helped me carry the box.", blank: "Ken helped me _____ the box.", answer: "carry" }
            ],
            choiceExamples: [
                { jp: "私は妹が英語を勉強するのを手伝いました。", en: "I helped my sister study English.", blank: "I _____ my sister study English.", answer: "helped", distractors: ["let", "made", "wanted"] },
                { jp: "父は私に車を使わせてくれました。", en: "My father let me use his car.", blank: "My father let _____ use his car.", answer: "me", distractors: ["I", "my", "mine"] },
                { jp: "その知らせは私を幸せにしました。", en: "The news made me happy.", blank: "The news _____ me happy.", answer: "made", distractors: ["helped", "let", "asked"] },
                { jp: "母は私に夕食を作らせました。", en: "My mother made me cook dinner.", blank: "My mother made me _____ dinner.", answer: "cook", distractors: ["to cook", "cooks", "cooking"] },
                { jp: "ケンは私がその箱を運ぶのを手伝いました。", en: "Ken helped me carry the box.", blank: "Ken helped _____ carry the box.", answer: "me", distractors: ["I", "my", "mine"] }
            ],
            fillExamples: [
                { jp: "私は妹が英語を勉強するのを手伝いました。", en: "I helped my sister study English.", blank: "I helped my sister _____ English.", answer: "study" },
                { jp: "父は私に車を使わせてくれました。", en: "My father let me use his car.", blank: "My father let _____ use his car.", answer: "me" },
                { jp: "その知らせは私を幸せにしました。", en: "The news made me happy.", blank: "The news made me _____.", answer: "happy" },
                { jp: "母は私に夕食を作らせました。", en: "My mother made me cook dinner.", blank: "My mother _____ me cook dinner.", answer: "made" },
                { jp: "ケンは私がその箱を運ぶのを手伝いました。", en: "Ken helped me carry the box.", blank: "Ken helped me _____ the box.", answer: "carry" }
            ],
            meaningExamples: [
                { jp: "help / let / make の後ろでは to を入れません。", en: "My father let me use his car.", blank: "正しい形は _____.", answer: "let me use", distractors: ["let me to use", "let I use", "let me using"] },
                { jp: "make + 人 + 形容詞で「人を〜にする」を表します。", en: "The news made me happy.", blank: "「私を幸せにした」は _____.", answer: "made me happy", distractors: ["made I happy", "made me happily", "made me to happy"] },
                { jp: "help + 人 + 動詞の原形で「人が〜するのを手伝う」を表します。", en: "Ken helped me carry the box.", blank: "正しい形は _____.", answer: "helped me carry", distractors: ["helped me to carrying", "helped I carry", "helped me carried"] }
            ]
        },
        {
            id: "g2-svoc-make-call",
            title: "SVOC (make / call / name / keep)",
            rule: "SVOCでは、目的語と補語が「O = C」の関係になります。",
            distractors: ["to happy", "happily", "happiness"],
            examples: [
                { jp: "その歌は私を幸せにします。", en: "The song makes me happy.", blank: "The song makes me _____.", answer: "happy" },
                { jp: "私たちはその犬をポチと呼びます。", en: "We call the dog Pochi.", blank: "We call the dog _____.", answer: "Pochi" },
                { jp: "彼らはその赤ちゃんをハナと名づけました。", en: "They named the baby Hana.", blank: "They named the baby _____.", answer: "Hana" },
                { jp: "窓を開けたままにしてください。", en: "Please keep the window open.", blank: "Please keep the window _____.", answer: "open" },
                { jp: "そのニュースは彼を有名にしました。", en: "The news made him famous.", blank: "The news made him _____.", answer: "famous" }
            ],
            choiceExamples: [
                { jp: "その歌は私を幸せにします。", en: "The song makes me happy.", blank: "The song _____ me happy.", answer: "makes", distractors: ["make", "making", "to make"] },
                { jp: "私たちは彼をケンと呼びます。", en: "We call him Ken.", blank: "We call _____ Ken.", answer: "him", distractors: ["happy", "open", "famous"] },
                { jp: "彼らはその赤ちゃんをハナと名づけました。", en: "They named the baby Hana.", blank: "They _____ the baby Hana.", answer: "named", distractors: ["name", "names", "naming"] },
                { jp: "窓を開けたままにしてください。", en: "Please keep the window open.", blank: "Please keep the window _____.", answer: "open", distractors: ["opens", "opened", "to open"] },
                { jp: "そのニュースは彼を有名にしました。", en: "The news made him famous.", blank: "The news made _____ famous.", answer: "him", distractors: ["he", "his", "himself"] }
            ],
            fillExamples: [
                { jp: "その歌は私を幸せにします。", en: "The song makes me happy.", blank: "The song makes me _____.", answer: "happy" },
                { jp: "私たちは彼をケンと呼びます。", en: "We call him Ken.", blank: "We call him _____.", answer: "Ken" },
                { jp: "彼らはその赤ちゃんをハナと名づけました。", en: "They named the baby Hana.", blank: "They named the baby _____.", answer: "Hana" },
                { jp: "窓を開けたままにしてください。", en: "Please keep the window open.", blank: "Please keep the window _____.", answer: "open" },
                { jp: "そのニュースは彼を有名にしました。", en: "The news made him famous.", blank: "The news _____ him famous.", answer: "made" }
            ],
            meaningExamples: [
                { jp: "SVOCでは O と C が「O = C」の関係です。", en: "The song makes me happy.", blank: "The song makes me happy. の O は _____.", answer: "me", distractors: ["The song", "makes", "happy"] },
                { jp: "SVOCでは O と C が「O = C」の関係です。", en: "The news made him famous.", blank: "The news made him famous. の C は _____.", answer: "famous", distractors: ["The news", "made", "him"] },
                { jp: "call + O + C で「OをCと呼ぶ」を表します。", en: "We call the dog Pochi.", blank: "We call the dog Pochi. の意味は _____.", answer: "その犬をポチと呼ぶ", distractors: ["その犬がポチを呼ぶ", "ポチが犬を呼ぶ", "犬を幸せにする"] }
            ]
        },
        {
            id: "g2-passive-voice",
            title: "受動態 (Passive Voice)",
            rule: "受動態は be 動詞 + 過去分詞で「〜される」を表します。",
            distractors: ["is", "are", "was"],
            examples: [
                { jp: "この本は多くの生徒に読まれています。", en: "This book is read by many students.", blank: "This book _____ read by many students.", answer: "is" },
                { jp: "その窓はケンによって開けられました。", en: "The window was opened by Ken.", blank: "The window was _____ by Ken.", answer: "opened" },
                { jp: "これらの写真はユキによって撮られました。", en: "These pictures were taken by Yuki.", blank: "These pictures _____ taken by Yuki.", answer: "were" },
                { jp: "英語は世界中で話されています。", en: "English is spoken around the world.", blank: "English is _____ around the world.", answer: "spoken" },
                { jp: "その部屋は毎日掃除されています。", en: "The room is cleaned every day.", blank: "The room is _____ every day.", answer: "cleaned" }
            ],
            choiceExamples: [
                { jp: "受動態は be動詞 + 過去分詞です。", en: "This book is read by many students.", blank: "This book _____ read by many students.", answer: "is", distractors: ["are", "am", "do"] },
                { jp: "過去の受動態では was / were を使います。", en: "The window was opened by Ken.", blank: "The window was _____ by Ken.", answer: "opened", distractors: ["open", "opens", "opening"] },
                { jp: "主語が複数なので were を使います。", en: "These pictures were taken by Yuki.", blank: "These pictures _____ taken by Yuki.", answer: "were", distractors: ["was", "is", "are"] },
                { jp: "speak の過去分詞は spoken です。", en: "English is spoken around the world.", blank: "English is _____ around the world.", answer: "spoken", distractors: ["speak", "spoke", "speaking"] },
                { jp: "受動態の形を選びます。", en: "The room is cleaned every day.", blank: "The room is _____.", answer: "cleaned", distractors: ["cleans", "cleaning", "clean"] }
            ],
            meaningExamples: [
                { jp: "受動態は「〜される」を表します。", en: "This book is read by many students.", blank: "This book is read の意味は _____.", answer: "読まれる", distractors: ["読む", "読んでいる", "読むつもり"] },
                { jp: "by Ken は動作をした人を表します。", en: "The window was opened by Ken.", blank: "by Ken が表すのは _____.", answer: "開けた人", distractors: ["開けられた物", "開けた場所", "開けた時間"] },
                { jp: "受動態は be動詞 + 過去分詞です。", en: "These pictures were taken by Yuki.", blank: "受動態の中心の形は _____.", answer: "be動詞 + 過去分詞", distractors: ["do + 原形", "have + 原形", "will + ing"] }
            ],
            reorderExamples: [
                { jp: "これらの写真はユキによって撮られました。", en: "These pictures were taken by Yuki.", blank: "These pictures _____ taken by Yuki.", answer: "were" },
                { jp: "英語は世界中で話されています。", en: "English is spoken around the world.", blank: "English is _____ around the world.", answer: "spoken" },
                { jp: "その部屋は毎日掃除されています。", en: "The room is cleaned every day.", blank: "The room is _____ every day.", answer: "cleaned" },
                { jp: "この本は多くの生徒に読まれています。", en: "This book is read by many students.", blank: "This book _____ read by many students.", answer: "is" },
                { jp: "その窓はケンによって開けられました。", en: "The window was opened by Ken.", blank: "The window was _____ by Ken.", answer: "opened" }
            ]
        },
        {
            id: "g2-passive-verb-rules",
            title: "受動態の動詞変化",
            rule: "受動態では過去分詞を使います。規則動詞は ed、不規則動詞は固有の形を覚えます。",
            distractors: ["write", "wrote", "writing"],
            examples: [
                { jp: "その手紙は英語で書かれました。", en: "The letter was written in English.", blank: "The letter was _____ in English.", answer: "written" },
                { jp: "この歌は多くの人に歌われています。", en: "This song is sung by many people.", blank: "This song is _____ by many people.", answer: "sung" },
                { jp: "そのかばんは私の父によって作られました。", en: "The bag was made by my father.", blank: "The bag was _____ by my father.", answer: "made" },
                { jp: "この町ではサッカーがよく行われます。", en: "Soccer is played in this town.", blank: "Soccer is _____ in this town.", answer: "played" },
                { jp: "その本は昨日図書館に持ってこられました。", en: "The book was brought to the library yesterday.", blank: "The book was _____ to the library yesterday.", answer: "brought" }
            ]
        }
    ];

    const grade3Specs = [
        {
            id: "g3-passive-voice-basic",
            title: "受け身 (受動態) の文",
            rule: "受動態は be動詞 + 過去分詞で「〜される」を表します。主語の単数・複数や時制に合わせて be動詞を選びます。",
            distractors: ["reads", "reading", "readed"],
            examples: [
                { jp: "この物語は多くの生徒に読まれています。", en: "This story is read by many students.", blank: "This story _____ read by many students.", answer: "is" },
                { jp: "そのドアはケンによって閉められました。", en: "The door was closed by Ken.", blank: "The door was _____ by Ken.", answer: "closed" },
                { jp: "そのクッキーはユキによって作られました。", en: "The cookies were made by Yuki.", blank: "The cookies _____ made by Yuki.", answer: "were" },
                { jp: "フランス語はカナダで話されています。", en: "French is spoken in Canada.", blank: "French is _____ in Canada.", answer: "spoken" },
                { jp: "その教室は毎日掃除されています。", en: "The classroom is cleaned every day.", blank: "The classroom is _____ every day.", answer: "cleaned" }
            ],
            choiceExamples: [
                { jp: "主語が単数なので is を使います。", en: "This story is read by many students.", blank: "This story _____ read by many students.", answer: "is", distractors: ["are", "were", "do"] },
                { jp: "過去の受動態では was + 過去分詞です。", en: "The door was closed by Ken.", blank: "The door was _____ by Ken.", answer: "closed", distractors: ["close", "closes", "closing"] },
                { jp: "主語が複数なので were を使います。", en: "The cookies were made by Yuki.", blank: "The cookies _____ made by Yuki.", answer: "were", distractors: ["was", "is", "are"] },
                { jp: "speak の過去分詞は spoken です。", en: "French is spoken in Canada.", blank: "French is _____ in Canada.", answer: "spoken", distractors: ["speak", "spoke", "speaking"] },
                { jp: "受動態の意味を確認します。", en: "The classroom is cleaned every day.", blank: "is cleaned の意味は _____.", answer: "掃除される", distractors: ["掃除する", "掃除している", "掃除したい"] }
            ],
            meaningExamples: [
                { jp: "受動態は「〜される」を表します。", en: "This story is read by many students.", blank: "This story is read の意味は _____.", answer: "読まれる", distractors: ["読む", "読んでいる", "読ませる"] },
                { jp: "過去の受動態は was / were + 過去分詞です。", en: "The door was closed by Ken.", blank: "was closed の形は _____.", answer: "was + 過去分詞", distractors: ["do + 原形", "have + 原形", "will + 原形"] },
                { jp: "主語に合わせて be動詞を選びます。", en: "The cookies were made by Yuki.", blank: "The cookies に合う be動詞は _____.", answer: "were", distractors: ["was", "is", "am"] }
            ],
            reorderExamples: [
                { jp: "そのクッキーはユキによって作られました。", en: "The cookies were made by Yuki.", blank: "The cookies _____ made by Yuki.", answer: "were" },
                { jp: "フランス語はカナダで話されています。", en: "French is spoken in Canada.", blank: "French is _____ in Canada.", answer: "spoken" },
                { jp: "その教室は毎日掃除されています。", en: "The classroom is cleaned every day.", blank: "The classroom is _____ every day.", answer: "cleaned" },
                { jp: "この物語は多くの生徒に読まれています。", en: "This story is read by many students.", blank: "This story _____ read by many students.", answer: "is" },
                { jp: "そのドアはケンによって閉められました。", en: "The door was closed by Ken.", blank: "The door was _____ by Ken.", answer: "closed" }
            ],
            translationExamples: [
                { jp: "フランス語はカナダで話されています。", en: "French is spoken in Canada.", blank: "French is _____ in Canada.", answer: "spoken", hints: ["French", "spoken"], answers: ["French is spoken in Canada."] },
                { jp: "その教室は毎日掃除されています。", en: "The classroom is cleaned every day.", blank: "The classroom is _____ every day.", answer: "cleaned", hints: ["classroom", "cleaned"], answers: ["The classroom is cleaned every day."] }
            ]
        },
        {
            id: "g3-passive-voice-neg-q",
            title: "受け身の否定文・疑問文",
            rule: "受動態の否定文は be動詞の後ろに not、疑問文は be動詞を主語の前に出します。",
            distractors: ["do not", "did", "does"],
            examples: [
                { jp: "この本は多くの生徒に読まれていません。", en: "This book is not read by many students.", blank: "This book is _____ read by many students.", answer: "not" },
                { jp: "その窓はケンによって開けられましたか。", en: "Was the window opened by Ken?", blank: "_____ the window opened by Ken?", answer: "Was" },
                { jp: "これらの写真はユキによって撮られていません。", en: "These pictures were not taken by Yuki.", blank: "These pictures were _____ taken by Yuki.", answer: "not" },
                { jp: "英語はカナダで話されていますか。", en: "Is English spoken in Canada?", blank: "_____ English spoken in Canada?", answer: "Is" },
                { jp: "その部屋は毎日掃除されていません。", en: "The room is not cleaned every day.", blank: "The room is not _____ every day.", answer: "cleaned" }
            ]
        },
        {
            id: "g3-passive-voice-idioms",
            title: "受動態で by を使わないパターン",
            rule: "受動態でも、interested in、covered with、known to など by 以外の前置詞を使う形があります。",
            distractors: ["interesting", "cover", "know"],
            examples: [
                { jp: "私は音楽に興味があります。", en: "I am interested in music.", blank: "I am _____ in music.", answer: "interested" },
                { jp: "その机は本で覆われています。", en: "The desk is covered with books.", blank: "The desk is _____ with books.", answer: "covered" },
                { jp: "この寺は多くの人に知られています。", en: "This temple is known to many people.", blank: "This temple is _____ to many people.", answer: "known" },
                { jp: "彼女はその結果に満足しています。", en: "She is pleased with the result.", blank: "She is _____ with the result.", answer: "pleased" },
                { jp: "彼はその知らせに驚きました。", en: "He was surprised at the news.", blank: "He was _____ at the news.", answer: "surprised" }
            ]
        },
        {
            id: "g3-svoc-sentences",
            title: "call / make / keep (SVOCの文)",
            rule: "SVOCの文では、目的語の後ろに補語を置き、「OをCと呼ぶ」「OをCにする」「OをCのままにする」を表します。",
            distractors: ["to happy", "happily", "happiness"],
            examples: [
                { jp: "私たちは先生をブラウン先生と呼びます。", en: "We call our teacher Mr. Brown.", blank: "We call our teacher _____.", answer: "Mr. Brown" },
                { jp: "その知らせは私たちをわくわくさせました。", en: "The news made us excited.", blank: "The news made us _____.", answer: "excited" },
                { jp: "教室をきれいに保ってください。", en: "Please keep the classroom clean.", blank: "Please keep the classroom _____.", answer: "clean" },
                { jp: "彼らは自分たちのチームをスターズと名づけました。", en: "They named their team Stars.", blank: "They named their team _____.", answer: "Stars" },
                { jp: "その映画は彼女を有名にしました。", en: "The movie made her famous.", blank: "The movie made her _____.", answer: "famous" }
            ],
            choiceExamples: [
                { jp: "call + O + C で「OをCと呼ぶ」です。", en: "We call our teacher Mr. Brown.", blank: "We _____ our teacher Mr. Brown.", answer: "call", distractors: ["make", "keep", "help"] },
                { jp: "過去形では made を使います。", en: "The news made us excited.", blank: "The news _____ us excited.", answer: "made", distractors: ["makes", "make", "making"] },
                { jp: "Oは目的格 us です。", en: "The news made us excited.", blank: "The news made _____ excited.", answer: "us", distractors: ["we", "our", "ours"] },
                { jp: "keep + O + C で「OをCのままにする」です。", en: "Please keep the classroom clean.", blank: "Please keep the classroom _____.", answer: "clean", distractors: ["cleans", "cleaning", "to clean"] },
                { jp: "make + O + C の C を確認します。", en: "The movie made her famous.", blank: "The movie made her _____.", answer: "famous", distractors: ["fame", "famously", "to famous"] }
            ],
            fillExamples: [
                { jp: "私たちは先生をブラウン先生と呼びます。", en: "We call our teacher Mr. Brown.", blank: "We _____ our teacher Mr. Brown.", answer: "call" },
                { jp: "その知らせは私たちをわくわくさせました。", en: "The news made us excited.", blank: "The news _____ us excited.", answer: "made" },
                { jp: "その知らせは私たちをわくわくさせました。", en: "The news made us excited.", blank: "The news made _____ excited.", answer: "us" },
                { jp: "教室をきれいに保ってください。", en: "Please keep the classroom clean.", blank: "Please keep the classroom _____.", answer: "clean" },
                { jp: "その映画は彼女を有名にしました。", en: "The movie made her famous.", blank: "The movie made _____ famous.", answer: "her" }
            ],
            meaningExamples: [
                { jp: "SVOCでは O と C が「O = C」の関係です。", en: "The news made us excited.", blank: "The news made us excited. の O は _____.", answer: "us", distractors: ["The news", "made", "excited"] },
                { jp: "SVOCでは O と C が「O = C」の関係です。", en: "The movie made her famous.", blank: "The movie made her famous. の C は _____.", answer: "famous", distractors: ["The movie", "made", "her"] },
                { jp: "keep + O + C で「OをCのままにする」です。", en: "Please keep the classroom clean.", blank: "Please keep the classroom clean. の意味は _____.", answer: "教室をきれいに保つ", distractors: ["教室が掃除する", "教室を呼ぶ", "教室を有名にする"] }
            ],
            reorderExamples: [
                { jp: "教室をきれいに保ってください。", en: "Please keep the classroom clean.", blank: "Please keep the classroom _____.", answer: "clean" },
                { jp: "彼らは自分たちのチームをスターズと名づけました。", en: "They named their team Stars.", blank: "They named their team _____.", answer: "Stars" },
                { jp: "その映画は彼女を有名にしました。", en: "The movie made her famous.", blank: "The movie made her _____.", answer: "famous" },
                { jp: "私たちは先生をブラウン先生と呼びます。", en: "We call our teacher Mr. Brown.", blank: "We call our teacher _____.", answer: "Mr. Brown" },
                { jp: "その知らせは私たちをわくわくさせました。", en: "The news made us excited.", blank: "The news made us _____.", answer: "excited" }
            ]
        },
        {
            id: "g3-interrogative-infinitive",
            title: "疑問詞 ＋ to ＋ 動詞の原形",
            rule: "疑問詞 + to + 動詞の原形で「何を〜すべきか」「どのように〜するか」などを表します。",
            distractors: ["how I", "how can", "how do"],
            examples: [
                { jp: "私はこのコンピューターの使い方を知っています。", en: "I know how to use this computer.", blank: "I know _____ to use this computer.", answer: "how" },
                { jp: "彼女は何を言えばよいかわかりません。", en: "She doesn't know what to say.", blank: "She doesn't know _____ to say.", answer: "what" },
                { jp: "どこで会えばよいか教えてください。", en: "Tell me where to meet.", blank: "Tell me _____ to meet.", answer: "where" },
                { jp: "ケンはいつ始めればよいかを学びました。", en: "Ken learned when to start.", blank: "Ken learned _____ to start.", answer: "when" },
                { jp: "私たちはどのバスに乗るべきか決めました。", en: "We decided which bus to take.", blank: "We decided _____ bus to take.", answer: "which" }
            ]
        },
        {
            id: "g3-it-is-for-to",
            title: "It is ... for ... to ... 構文",
            rule: "It is ... for 人 to 動詞の原形で「人にとって〜することは...だ」を表します。",
            distractors: ["of", "that", "doing"],
            examples: [
                { jp: "私たちにとって英語を勉強することは大切です。", en: "It is important for us to study English.", blank: "It is important _____ us to study English.", answer: "for" },
                { jp: "ケンにとってこの本を読むことは簡単です。", en: "It is easy for Ken to read this book.", blank: "It is easy for Ken _____ read this book.", answer: "to" },
                { jp: "私にとってこの問題を解くことは難しいです。", en: "It is difficult for me to solve this problem.", blank: "It is difficult _____ me to solve this problem.", answer: "for" },
                { jp: "子どもたちにとって外で遊ぶことは楽しいです。", en: "It is fun for children to play outside.", blank: "It is fun for children _____ play outside.", answer: "to" },
                { jp: "生徒にとって規則に従うことは必要です。", en: "It is necessary for students to follow the rules.", blank: "It is _____ for students to follow the rules.", answer: "necessary" }
            ]
        },
        {
            id: "g3-indirect-question",
            title: "間接疑問文",
            rule: "間接疑問文では、疑問詞の後ろを主語 + 動詞の語順にします。疑問文の語順にしない点に注意します。",
            distractors: ["does he live", "where does", "where is"],
            examples: [
                { jp: "私は彼がどこに住んでいるか知っています。", en: "I know where he lives.", blank: "I know _____ he lives.", answer: "where" },
                { jp: "彼女が何を欲しがっているか知っていますか。", en: "Do you know what she wants?", blank: "Do you know _____ she wants?", answer: "what" },
                { jp: "私はケンがいつ来るかわかりません。", en: "I don't know when Ken will come.", blank: "I don't know _____ Ken will come.", answer: "when" },
                { jp: "あなたがなぜ忙しいのか教えてください。", en: "Please tell me why you are busy.", blank: "Please tell me _____ you are busy.", answer: "why" },
                { jp: "彼女は彼がどのように英語を勉強しているか知っています。", en: "She knows how he studies English.", blank: "She knows _____ he studies English.", answer: "how" }
            ]
        },
        {
            id: "g3-participle-modifier",
            title: "後置修飾 (現在分詞・過去分詞)",
            rule: "現在分詞は「〜している」、過去分詞は「〜された」の意味で、名詞の後ろから説明します。",
            distractors: ["runs", "ran", "to run"],
            examples: [
                { jp: "公園で走っている少年はケンです。", en: "The boy running in the park is Ken.", blank: "The boy _____ in the park is Ken.", answer: "running" },
                { jp: "本を読んでいる少女はユキです。", en: "The girl reading a book is Yuki.", blank: "The girl _____ a book is Yuki.", answer: "reading" },
                { jp: "ケンによって壊された窓は修理されました。", en: "The window broken by Ken was fixed.", blank: "The window _____ by Ken was fixed.", answer: "broken" },
                { jp: "私の父によって撮られた写真は美しいです。", en: "The pictures taken by my father are beautiful.", blank: "The pictures _____ by my father are beautiful.", answer: "taken" },
                { jp: "テーブルの下で寝ている犬は私のものです。", en: "The dog sleeping under the table is mine.", blank: "The dog _____ under the table is mine.", answer: "sleeping" }
            ]
        },
        {
            id: "g3-contact-clause",
            title: "後置修飾 (名詞＋主語＋動詞)",
            rule: "名詞の後ろに主語 + 動詞を置くと、その名詞を後ろから詳しく説明できます。",
            distractors: ["which", "who", "that is"],
            examples: [
                { jp: "私が昨日買った本はおもしろいです。", en: "The book I bought yesterday is interesting.", blank: "The book _____ bought yesterday is interesting.", answer: "I" },
                { jp: "私たちが昨夜見た映画はわくわくしました。", en: "The movie we watched last night was exciting.", blank: "The movie _____ watched last night was exciting.", answer: "we" },
                { jp: "彼女が駅で会った男性は私のおじです。", en: "The man she met at the station is my uncle.", blank: "The man _____ met at the station is my uncle.", answer: "she" },
                { jp: "ケンが毎日使うかばんは青いです。", en: "The bag Ken uses every day is blue.", blank: "The bag _____ uses every day is blue.", answer: "Ken" },
                { jp: "彼らが授業で歌った歌は美しかったです。", en: "The song they sang in class was beautiful.", blank: "The song _____ sang in class was beautiful.", answer: "they" }
            ]
        },
        {
            id: "g3-relative-pronoun-who",
            title: "関係代名詞 who (人)",
            rule: "who は人を説明する関係代名詞です。先行詞が人で、後ろの文の主語になるときに使います。",
            distractors: ["which", "where", "what"],
            examples: [
                { jp: "私にはカナダに住んでいる友達がいます。", en: "I have a friend who lives in Canada.", blank: "I have a friend _____ lives in Canada.", answer: "who" },
                { jp: "サッカーをする少年はケンです。", en: "The boy who plays soccer is Ken.", blank: "The boy _____ plays soccer is Ken.", answer: "who" },
                { jp: "英語を教えている先生は親切です。", en: "The teacher who teaches English is kind.", blank: "The teacher _____ teaches English is kind.", answer: "who" },
                { jp: "本を読んでいる少女はユキです。", en: "The girl who is reading a book is Yuki.", blank: "The girl _____ is reading a book is Yuki.", answer: "who" },
                { jp: "私を助けてくれた男性は私のおじでした。", en: "The man who helped me was my uncle.", blank: "The man _____ helped me was my uncle.", answer: "who" }
            ],
            choiceExamples: [
                { jp: "人を説明する関係代名詞は who です。", en: "I have a friend who lives in Canada.", blank: "I have a friend _____ lives in Canada.", answer: "who", distractors: ["which", "where", "what"] },
                { jp: "先行詞は説明される名詞です。", en: "The boy who plays soccer is Ken.", blank: "この文の先行詞は _____.", answer: "The boy", distractors: ["soccer", "Ken", "plays"] },
                { jp: "who の後ろには動詞が続きます。", en: "The teacher who teaches English is kind.", blank: "who の後ろに続く語は _____.", answer: "teaches", distractors: ["teacher", "English", "kind"] },
                { jp: "who is reading a book が girl を説明しています。", en: "The girl who is reading a book is Yuki.", blank: "who is reading a book が説明する語は _____.", answer: "The girl", distractors: ["a book", "Yuki", "reading"] },
                { jp: "人を説明するので who を使います。", en: "The man who helped me was my uncle.", blank: "The man _____ helped me was my uncle.", answer: "who", distractors: ["which", "where", "when"] }
            ],
            meaningExamples: [
                { jp: "関係代名詞 who は人を説明します。", en: "I have a friend who lives in Canada.", blank: "who lives in Canada が説明する語は _____.", answer: "a friend", distractors: ["I", "Canada", "lives"] },
                { jp: "who は後ろの文の主語の働きをします。", en: "The boy who plays soccer is Ken.", blank: "who が表す人は _____.", answer: "The boy", distractors: ["Ken", "soccer", "plays"] },
                { jp: "人を説明する関係代名詞を選びます。", en: "The teacher who teaches English is kind.", blank: "人を説明するときに使う語は _____.", answer: "who", distractors: ["which", "where", "what"] }
            ]
        },
        {
            id: "g3-relative-pronoun-which",
            title: "関係代名詞 which (物・動物)",
            rule: "which は物や動物を説明する関係代名詞です。先行詞が人以外のときに使います。",
            distractors: ["who", "where", "what"],
            examples: [
                { jp: "これはたくさんの写真がある本です。", en: "This is a book which has many pictures.", blank: "This is a book _____ has many pictures.", answer: "which" },
                { jp: "私はユキが歌った歌が好きです。", en: "I like the song which Yuki sang.", blank: "I like the song _____ Yuki sang.", answer: "which" },
                { jp: "京都へ行くバスは遅れています。", en: "The bus which goes to Kyoto is late.", blank: "The bus _____ goes to Kyoto is late.", answer: "which" },
                { jp: "寝ている犬は私のものです。", en: "The dog which is sleeping is mine.", blank: "The dog _____ is sleeping is mine.", answer: "which" },
                { jp: "ケンが使っているカメラは新しいです。", en: "The camera which Ken uses is new.", blank: "The camera _____ Ken uses is new.", answer: "which" }
            ],
            choiceExamples: [
                { jp: "物を説明する関係代名詞は which です。", en: "This is a book which has many pictures.", blank: "This is a book _____ has many pictures.", answer: "which", distractors: ["who", "where", "what"] },
                { jp: "which Yuki sang が song を説明しています。", en: "I like the song which Yuki sang.", blank: "which Yuki sang が説明する語は _____.", answer: "the song", distractors: ["Yuki", "I", "sang"] },
                { jp: "先行詞は The bus です。", en: "The bus which goes to Kyoto is late.", blank: "この文の先行詞は _____.", answer: "The bus", distractors: ["Kyoto", "late", "goes"] },
                { jp: "動物を説明するときも which を使えます。", en: "The dog which is sleeping is mine.", blank: "The dog _____ is sleeping is mine.", answer: "which", distractors: ["who", "where", "when"] },
                { jp: "which Ken uses が camera を説明しています。", en: "The camera which Ken uses is new.", blank: "which Ken uses が説明する語は _____.", answer: "The camera", distractors: ["Ken", "uses", "new"] }
            ],
            meaningExamples: [
                { jp: "関係代名詞 which は物や動物を説明します。", en: "This is a book which has many pictures.", blank: "which has many pictures が説明する語は _____.", answer: "a book", distractors: ["This", "pictures", "has"] },
                { jp: "which は先行詞を後ろから説明します。", en: "I like the song which Yuki sang.", blank: "この文で説明されている名詞は _____.", answer: "the song", distractors: ["Yuki", "I", "sang"] },
                { jp: "物を説明する関係代名詞を選びます。", en: "The camera which Ken uses is new.", blank: "物を説明するときに使う語は _____.", answer: "which", distractors: ["who", "where", "what"] }
            ]
        },
        {
            id: "g3-relative-pronouns-summary",
            title: "関係代名詞まとめ (who / which)",
            rule: "人を説明するときは who、物や動物を説明するときは which を使います。先行詞に注目して選びます。",
            distractors: ["where", "when", "what"],
            examples: [
                { jp: "テニスをする少年は私の兄です。", en: "The boy who plays tennis is my brother.", blank: "The boy _____ plays tennis is my brother.", answer: "who" },
                { jp: "これは父が私にくれたペンです。", en: "This is a pen which my father gave me.", blank: "This is a pen _____ my father gave me.", answer: "which" },
                { jp: "私はフランス語を話す少女を知っています。", en: "I know a girl who speaks French.", blank: "I know a girl _____ speaks French.", answer: "who" },
                { jp: "私たちが見た映画はわくわくしました。", en: "The movie which we watched was exciting.", blank: "The movie _____ we watched was exciting.", answer: "which" },
                { jp: "私たちを助けてくれた先生は親切です。", en: "The teacher who helped us is kind.", blank: "The teacher _____ helped us is kind.", answer: "who" }
            ]
        },
        {
            id: "g3-prepositions-master",
            title: "前置詞の使い方 (まとめ)",
            rule: "前置詞は時・場所・手段・方向などの関係を表します。at、on、in、for、by などを意味に合わせて使います。",
            distractors: ["to", "of", "with"],
            examples: [
                { jp: "私は7時に起きます。", en: "I get up at seven.", blank: "I get up _____ seven.", answer: "at" },
                { jp: "私たちは日曜日にサッカーをします。", en: "We play soccer on Sunday.", blank: "We play soccer _____ Sunday.", answer: "on" },
                { jp: "彼女は大阪に住んでいます。", en: "She lives in Osaka.", blank: "She lives _____ Osaka.", answer: "in" },
                { jp: "このプレゼントはあなたへのものです。", en: "This present is for you.", blank: "This present is _____ you.", answer: "for" },
                { jp: "私はバスで学校へ行きます。", en: "I go to school by bus.", blank: "I go to school _____ bus.", answer: "by" }
            ]
        }
    ];

    [...grade1Specs, ...grade2Specs, ...grade3Specs].forEach(spec => {
        if (!window.GRAMMAR_CHECK_TESTS[spec.id]) {
            window.GRAMMAR_CHECK_TESTS[spec.id] = makeGeneratedTest(spec);
        }
    });
})();

/*
 * 文法チェック20 問題作成ルール
 * - 20問全体を1つのテストとして見て、同じ英文・同じ日本語文の使い回しを避ける。
 * - 大問1は文法理解、大問2は正確な語句、大問3は語順、大問4は英文作成を確認する。
 * - 主語・動詞・場面が1つに偏りすぎないように分散させる。
 * - 穴埋め・並び替え・和文英訳は完全一致採点に向く、答えが決まりやすい文にする。
 * - 先に確認20で使う英文20本を設計し、英文の重複がない状態で各大問に割り当てる。
 * - 文法項目名そのものだけを答えにせず、その文法を成立させる周辺要素も問う。
 *   例: 疑問詞なら疑問詞だけでなく、be動詞・do/does・一般動詞の形も確認する。
 *   例: 助動詞なら助動詞だけでなく、後ろの動詞の原形・否定形・疑問文の語順も確認する。
 *   例: 比較表現なら er/more だけでなく、than/as/of/in など文型に必要な語も確認する。
 * - 選択問題と穴埋め問題では、正答が同じ語に偏らないように分散させる。
 * - ダミー選択肢は正答と同じ文法観点で迷えるものにし、無関係な単語だけで埋めない。
 * - 使用語彙は該当学年までの範囲を基本にし、難しい語や不自然な日本語訳を避ける。
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
                    { id: "r1", question: "私はタクです。", words: ["I", "am", "Taku"], answer: "I am Taku.", explanation: "主語 I の後ろに am を置きます。" },
                    { id: "r2", question: "私は歌手です。", words: ["I", "am", "a", "singer"], answer: "I am a singer.", explanation: "「私は〜です」は I am ... で始めます。" },
                    { id: "r3", question: "私はわくわくしています。", words: ["I", "am", "excited"], answer: "I am excited.", explanation: "気持ちや状態は I am + 形容詞で表します。" },
                    { id: "r4", question: "私は日本出身です。", words: ["I", "am", "from", "Japan"], answer: "I am from Japan.", explanation: "出身地は from Japan のように表します。" },
                    { id: "r5", question: "私は忙しくありません。", words: ["I", "am", "not", "busy"], answer: "I am not busy.", explanation: "否定文は I am not + 形容詞の形です。" }
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
                    { id: "r1", question: "ケンはちょうど朝食を終えたところです。", words: ["Ken", "has", "just", "finished", "breakfast"], answer: "Ken has just finished breakfast.", explanation: "Ken は三人称単数なので has just finished にします。" },
                    { id: "r2", question: "私たちはすでにその部屋を掃除しました。", words: ["We", "have", "already", "cleaned", "the", "room"], answer: "We have already cleaned the room.", explanation: "already は have の後ろ、過去分詞の前に置きます。" },
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
                    { id: "f1", question: "They have been _____ soccer for an hour.", translation: "彼らは1時間ずっとサッカーをしています。", answer: "playing", explanation: "play は現在分詞にして playing です。" },
                    { id: "f2", question: "My brother has _____ washing the car since noon.", translation: "私の兄は正午からずっと車を洗っています。", answer: "been", explanation: "現在完了進行形は has been + 動詞ing です。" },
                    { id: "f3", question: "It has been snowing _____ this morning.", translation: "今朝からずっと雪が降っています。", answer: "since", explanation: "this morning は起点なので since です。" },
                    { id: "f4", question: "Ken has been practicing the piano _____ two hours.", translation: "ケンは2時間ずっとピアノを練習しています。", answer: "for", explanation: "two hours は期間なので for を使います。" },
                    { id: "f5", question: "My sister _____ been cooking lunch since ten.", translation: "私の妹は10時からずっと昼食を作っています。", answer: "has", explanation: "My sister は三人称単数なので has を使います。" }
                ]
            },
            {
                id: "reorder",
                title: "大問3　並び替え問題",
                type: "reorder",
                questions: [
                    { id: "r1", question: "ユキは30分ずっと英語を読んでいます。", words: ["Yuki", "has", "been", "reading", "English", "for", "thirty", "minutes"], answer: "Yuki has been reading English for thirty minutes.", explanation: "Yuki は三人称単数なので has been reading にします。" },
                    { id: "r2", question: "私たちは朝からずっとバスを待っています。", words: ["We", "have", "been", "waiting", "for", "the", "bus", "since", "this", "morning"], answer: "We have been waiting for the bus since this morning.", explanation: "起点は since this morning と置きます。" },
                    { id: "r3", question: "彼らは昼からずっと公園で走っています。", words: ["They", "have", "been", "running", "in", "the", "park", "since", "noon"], answer: "They have been running in the park since noon.", explanation: "They なので have been running を使います。" },
                    { id: "r4", question: "アオイは1時間ずっと絵を描いています。", words: ["Aoi", "has", "been", "drawing", "a", "picture", "for", "an", "hour"], answer: "Aoi has been drawing a picture for an hour.", explanation: "期間は for an hour と置きます。" },
                    { id: "r5", question: "タクは昨日からずっと部屋を掃除しています。", words: ["Taku", "has", "been", "cleaning", "his", "room", "since", "yesterday"], answer: "Taku has been cleaning his room since yesterday.", explanation: "Taku は三人称単数なので has been cleaning を使います。" }
                ]
            },
            {
                id: "translation",
                title: "大問4　和文英訳",
                type: "translation",
                questions: [
                    { id: "t1", question: "私の妹は朝からずっとピアノを練習しています。", hints: ["has been", "practicing"], answers: ["My sister has been practicing the piano since this morning.", "My sister's been practicing the piano since this morning."], explanation: "動作が続いているので has been practicing を使い、起点には since this morning を置きます。" },
                    { id: "t2", question: "私は3時間ずっと数学を勉強しています。", hints: ["have been", "for three hours"], answers: ["I have been studying math for three hours.", "I've been studying math for three hours."], explanation: "I なので have been。期間は for three hours です。" }
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
            ["your teacher", "your coach", "あなたの先生", "あなたのコーチ"],
            ["your school", "your house", "あなたの学校", "あなたの家"],
            ["your favorite sport", "your favorite food", "あなたの好きなスポーツ", "あなたの好きな食べ物"],
            ["that boy", "that girl", "あの少年", "あの少女"],
            ["that girl", "that boy", "あの少女", "あの少年"],
            ["this bag", "that bag", "このかばん", "あのかばん"],
            ["this town", "that city", "この町", "あの市"],
            ["this question", "that question", "この問題", "あの問題"],
            ["this computer", "that tablet", "このコンピュータ", "あのタブレット"],
            ["The towel", "The blanket", "そのタオル", "その毛布"],
            ["The cake", "The coffee", "そのケーキ", "そのコーヒー"],
            ["The flower", "The garden", "その花", "その庭"],
            ["three apples", "two oranges", "3個のりんご", "2個のオレンジ"],
            ["two buses", "three trains", "2台のバス", "3台の電車"],
            ["Kyoto", "Nara", "京都", "奈良"],
            ["Hokkaido", "Okinawa", "北海道", "沖縄"],
            ["Yokohama", "Kobe", "横浜", "神戸"],
            ["five years", "four years", "5年間", "4年間"],
            ["three years", "two years", "3年間", "2年間"],
            ["two hours", "thirty minutes", "2時間", "30分"],
            ["last year", "last spring", "去年", "この前の春"],
            ["since Monday", "since Tuesday", "月曜日から", "火曜日から"],
            ["eat", "drink", "食べ", "飲み"],
            ["like", "need", "好き", "必要"],
            ["live", "stay", "住んで", "滞在して"],
            ["soft", "warm", "やわらかい", "暖かい"],
            ["sweet", "good", "甘い", "よい"],
            ["beautiful", "nice", "美しい", "すてきな"],
            ["difficult", "important", "難しい", "大切な"]
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

        if (/\bmost nice\b/i.test(next.en)) {
            next.en = next.en.replace(/\bmost nice\b/gi, "most beautiful");
            next.blank = next.blank.replace(/\bmost nice\b/gi, "most beautiful");
            next.blank = next.blank.replace(/_____\s+nice\b/gi, "_____ beautiful");
            next.jp = next.jp.replace(/すてきな/g, "美しい");
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
        next.jp = next.jp.replace(/大切なです/g, "大切です");
        next.jp = next.jp.replace(/タブレットー/g, "タブレット");
        next.jp = next.jp.replace(/疲れているです/g, "疲れています");
        next.jp = next.jp.replace(/疲れているですか/g, "疲れていますか");

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

    function normalizeEnglish(sentence) {
        return String(sentence).toLowerCase().replace(/[?.!]/g, "").replace(/\s+/g, " ").trim();
    }

    function getExampleEnglish(example) {
        return example.en || (example.answers || []).join(" / ");
    }

    function escapeRegExp(text) {
        return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function replaceExamplePart(example, from, to, jpFrom, jpTo) {
        const next = { ...example };
        const boundaryPattern = new RegExp(`\\b${escapeRegExp(from)}\\b`);
        const replacePattern = new RegExp(`\\b${escapeRegExp(from)}\\b`, "g");
        const replaceText = value => String(value).replace(replacePattern, to);
        const replaceJp = value => String(value).split(jpFrom).join(jpTo);
        next.en = replaceText(next.en);
        next.blank = replaceText(next.blank);
        next.jp = replaceJp(next.jp);
        if (next.answer && boundaryPattern.test(String(next.answer))) next.answer = replaceText(next.answer);
        if (next.hints) next.hints = next.hints.map(hint => boundaryPattern.test(String(hint)) ? replaceText(hint) : hint);
        if (next.answers) next.answers = next.answers.map(answer => replaceText(answer));
        return cleanupGeneratedExample(next);
    }

    function addUniqueContext(example, usedEnglish, salt) {
        const alreadyHasTime = /\b(today|now|tomorrow|yesterday|last|next|every day|this morning|after school|since|for \w+)/i.test(example.en);
        const isPast = /\b(was|were|didn't|went|made|saw|read|bought|watched|sang|met|opened|closed|helped|played|studied|cleaned|visited|arrived|left|looked|sounded|felt|tasted)\b/i.test(example.en);
        const isFuture = /\b(will|going to|must|should|have to|has to)\b/i.test(example.en);
        const contexts = isPast
            ? [[" yesterday", "昨日"], [" last week", "先週"], [" this morning", "今朝"]]
            : isFuture
                ? [[" tomorrow", "明日"], [" today", "今日"], [" next Sunday", "次の日曜日"]]
                : [[" today", "今日"], [" now", "今"], [" every day", "毎日"], [" this morning", "今朝"]];
        const blocked = /\b(than|as .* as|the most|the best|the worst|the tallest|the highest|the oldest|the .*est|which|who)\b/i;
        if (blocked.test(example.en)) return cleanupGeneratedExample(example);

        if (alreadyHasTime) {
            const timeReplacements = [
                ["tomorrow", "next Sunday", "明日", "次の日曜日"],
                ["today", "this morning", "今日", "今朝"],
                ["now", "today", "今", "今日"],
                ["every day", "on Sundays", "毎日", "日曜日に"],
                ["after school", "this evening", "放課後", "今晩"],
                ["this morning", "today", "今朝", "今日"],
                ["yesterday morning", "last week", "昨日の朝", "先週"],
                ["yesterday", "last week", "昨日", "先週"],
                ["last night", "yesterday", "昨夜", "昨日"],
                ["last week", "yesterday", "先週", "昨日"]
            ];
            const orderedTimeReplacements = timeReplacements.map((_, index) => timeReplacements[(index + salt) % timeReplacements.length]);
            for (const [from, to, jpFrom, jpTo] of orderedTimeReplacements) {
                if (!example.en.includes(from) || !example.jp.includes(jpFrom)) continue;
                const candidate = replaceExamplePart(example, from, to, jpFrom, jpTo);
                if (!usedEnglish.has(normalizeEnglish(getExampleEnglish(candidate)))) return candidate;
            }
            return cleanupGeneratedExample(example);
        }

        for (let attempt = 0; attempt < contexts.length; attempt += 1) {
            const [enContext, jpContext] = contexts[(salt + attempt) % contexts.length];
            if (example.en.includes(enContext.trim())) continue;
            const next = { ...example };
            const punctuation = next.en.endsWith("?") ? "?" : ".";
            const baseEn = next.en.replace(/[?.!]$/, "");
            next.en = `${baseEn}${enContext}${punctuation}`;
            next.blank = next.blank.replace(/[?.!]$/, `${enContext}${punctuation}`);
            next.jp = `${jpContext}、${next.jp}`;
            next.hints = getHints(next.en);
            if (next.answers) next.answers = [next.en];
            if (!usedEnglish.has(normalizeEnglish(getExampleEnglish(next)))) return cleanupGeneratedExample(next);
        }
        return cleanupGeneratedExample(example);
    }

    function makeMoreVariedExample(example, usedEnglish, salt) {
        const replacements = [
            ["Ken", "Taku", "ケン", "タク"],
            ["Ken", "Yuta", "ケン", "ユウタ"],
            ["Yuki", "Miki", "ユキ", "ミキ"],
            ["Yuki", "Aoi", "ユキ", "アオイ"],
            ["Taku", "Yuta", "タク", "ユウタ"],
            ["Yuta", "Ken", "ユウタ", "ケン"],
            ["my mother", "my sister", "私の母", "私の姉"],
            ["my father", "my uncle", "私の父", "私のおじ"],
            ["my brother", "my sister", "私の兄", "私の妹"],
            ["my sister", "my brother", "私の妹", "私の兄"],
            ["your teacher", "your coach", "あなたの先生", "あなたのコーチ"],
            ["your teacher", "your friend", "あなたの先生", "あなたの友達"],
            ["your coach", "your teacher", "あなたのコーチ", "あなたの先生"],
            ["your school", "your house", "あなたの学校", "あなたの家"],
            ["your favorite sport", "your favorite food", "あなたの好きなスポーツ", "あなたの好きな食べ物"],
            ["your favorite sport", "your favorite color", "あなたの好きなスポーツ", "あなたの好きな色"],
            ["your favorite food", "your favorite subject", "あなたの好きな食べ物", "あなたの好きな教科"],
            ["your favorite food", "your favorite animal", "あなたの好きな食べ物", "あなたの好きな動物"],
            ["your favorite food", "your favorite song", "あなたの好きな食べ物", "あなたの好きな歌"],
            ["your favorite color", "your favorite season", "あなたの好きな色", "あなたの好きな季節"],
            ["this", "that", "これ", "あれ"],
            ["They are", "We are", "彼らは", "私たちは"],
            ["students", "classmates", "学生", "クラスメート"],
            ["my pen", "my notebook", "私のペン", "私のノート"],
            ["This is my pen", "This is my notebook", "これは私のペンです", "これは私のノートです"],
            ["I am fine", "I am happy", "私は元気です", "私は幸せです"],
            ["You are nice", "You are kind", "あなたはすてきです", "あなたは親切です"],
            ["He is busy", "He is tired", "彼は忙しいです", "彼は疲れています"],
            ["your book", "your notebook", "あなたの本", "あなたのノート"],
            ["my classmate", "my friend", "私のクラスメート", "私の友達"],
            ["your classmate", "your friend", "あなたのクラスメート", "あなたの友達"],
            ["my uncle", "my brother", "私のおじ", "私の兄"],
            ["my club", "my school", "私のクラブ", "私の学校"],
            ["your pencil", "your pen", "あなたの鉛筆", "あなたのペン"],
            ["Sapporo", "Osaka", "札幌", "大阪"],
            ["ready", "busy", "準備ができている", "忙しい"],
            ["Are they", "Are we", "彼らは", "私たちは"],
            ["Are you", "Are they", "あなたは", "彼らは"],
            ["Is she", "Is Miki", "彼女は", "ミキは"],
            ["Is this your book", "Is this your notebook", "これはあなたの本ですか", "これはあなたのノートですか"],
            ["Are they friends", "Are they classmates", "彼らは友達ですか", "彼らはクラスメートですか"],
            ["Are you busy", "Are you tired", "あなたは忙しいですか", "あなたは疲れていますか"],
            ["Is she nice", "Is she kind", "彼女はすてきですか", "彼女は親切ですか"],
            ["Who do you need", "Who do you like", "あなたはだれが必要ですか", "あなたはだれが好きですか"],
            ["Who is he", "Who is that boy", "彼はだれですか", "あの少年はだれですか"],
            ["Who is she", "Who is that girl", "彼女はだれですか", "あの少女はだれですか"],
            ["What do you drink", "What do you eat", "あなたは何を飲みますか", "あなたは何を食べますか"],
            ["What is this", "What is that", "これは何ですか", "あれは何ですか"],
            ["What do you study", "What do you want", "あなたは何を勉強しますか", "あなたは何が欲しいですか"],
            ["that boy", "that girl", "あの少年", "あの少女"],
            ["that girl", "that boy", "あの少女", "あの少年"],
            ["his friends", "his classmates", "彼の友達", "彼のクラスメート"],
            ["her friends", "her classmates", "彼女の友達", "彼女のクラスメート"],
            ["students", "teachers", "生徒", "先生"],
            ["teachers", "students", "先生", "生徒"],
            ["a student", "a teacher", "学生", "先生"],
            ["a teacher", "a doctor", "先生", "医者"],
            ["a doctor", "a singer", "医者", "歌手"],
            ["soccer", "baseball", "サッカー", "野球"],
            ["soccer", "tennis", "サッカー", "テニス"],
            ["tennis", "basketball", "テニス", "バスケットボール"],
            ["basketball", "volleyball", "バスケットボール", "バレーボール"],
            ["English", "math", "英語", "数学"],
            ["English", "science", "英語", "理科"],
            ["math", "English", "数学", "英語"],
            ["science", "English", "理科", "英語"],
            ["music", "art", "音楽", "美術"],
            ["books", "comics", "本", "漫画"],
            ["a book", "a notebook", "本", "ノート"],
            ["the book", "the notebook", "その本", "そのノート"],
            ["this book", "this notebook", "この本", "このノート"],
            ["a dog", "a cat", "犬", "猫"],
            ["the dog", "the cat", "その犬", "その猫"],
            ["My dog", "My cat", "私の犬", "私の猫"],
            ["breakfast", "lunch", "朝食", "昼食"],
            ["lunch", "dinner", "昼食", "夕食"],
            ["dinner", "breakfast", "夕食", "朝食"],
            ["homework", "the report", "宿題", "レポート"],
            ["the report", "homework", "レポート", "宿題"],
            ["the room", "the classroom", "その部屋", "その教室"],
            ["the classroom", "the room", "その教室", "その部屋"],
            ["the desk", "the window", "その机", "その窓"],
            ["the window", "the door", "その窓", "そのドア"],
            ["the door", "the window", "そのドア", "その窓"],
            ["the park", "the library", "公園", "図書館"],
            ["the library", "the station", "図書館", "駅"],
            ["the station", "the park", "駅", "公園"],
            ["Tokyo", "Sapporo", "東京", "札幌"],
            ["Osaka", "Kyoto", "大阪", "京都"],
            ["Kyoto", "Nara", "京都", "奈良"],
            ["Nara", "Kobe", "奈良", "神戸"],
            ["Canada", "Australia", "カナダ", "オーストラリア"],
            ["Japan", "Canada", "日本", "カナダ"],
            ["today", "tomorrow", "今日", "明日"],
            ["tomorrow", "next Sunday", "明日", "次の日曜日"],
            ["yesterday", "last week", "昨日", "先週"],
            ["last night", "yesterday morning", "昨夜", "昨日の朝"],
            ["every day", "after school", "毎日", "放課後"],
            ["in the morning", "after dinner", "朝に", "夕食後に"],
            ["birthday", "club activity", "誕生日", "部活動"],
            ["for two hours", "for three hours", "2時間", "3時間"],
            ["for three days", "for five days", "3日間", "5日間"],
            ["for five years", "for three years", "5年間", "3年間"],
            ["since this morning", "since last night", "今朝から", "昨夜から"],
            ["since last night", "since yesterday", "昨夜から", "昨日から"],
            ["a new bike", "a new bag", "新しい自転車", "新しいかばん"],
            ["a card", "a cake", "カード", "ケーキ"],
            ["a picture", "a photo", "絵", "写真"],
            ["a letter", "an email", "手紙", "メール"],
            ["an email", "a letter", "メール", "手紙"],
            ["the song", "the story", "その歌", "その物語"],
            ["the movie", "the video", "その映画", "その動画"],
            ["the news", "the story", "その知らせ", "その話"],
            ["This book", "This notebook", "この本", "このノート"],
            ["of the three", "of the five", "3冊の中で", "5冊の中で"],
            ["idea", "plan", "考え", "計画"],
            ["our class", "our school", "私たちのクラス", "私たちの学校"],
            ["his class", "his team", "彼のクラス", "彼のチーム"],
            ["This question", "That question", "この問題", "あの問題"],
            ["That question", "This question", "あの問題", "この問題"],
            ["This song", "That song", "この歌", "あの歌"],
            ["This town", "That city", "この町", "あの市"],
            ["This box", "That box", "この箱", "あの箱"],
            ["We decided", "They decided", "私たちは", "彼らは"],
            ["I know", "My brother knows", "私は", "私の兄は"],
            ["She doesn't know", "Yuki doesn't know", "彼女は", "ユキは"],
            ["Tell me", "Please tell me", "教えてください", "私に教えてください"],
            ["learned when to start", "learned where to go", "いつ始めればよいか", "どこへ行けばよいか"],
            ["which bus to take", "which book to read", "どのバスに乗るべきか", "どの本を読むべきか"],
            ["a new desk", "a new chair", "新しい机", "新しいいす"],
            ["a bag", "a notebook", "バッグ", "ノート"],
            ["a cake", "a card", "ケーキ", "カード"],
            ["his friends", "his classmates", "彼の友達", "彼のクラスメート"],
            ["for my sister", "for my brother", "妹に", "兄に"],
            ["Must we", "Must they", "私たちは", "彼らは"],
            ["Must I", "Must you", "私は", "あなたは"],
            ["must not drink here", "must not eat here", "ここで飲んではいけません", "ここで食べてはいけません"],
            ["must not run here", "must not swim here", "ここで走ってはいけません", "ここで泳いではいけません"],
            ["must not open the door", "must not open the window", "ドアを開けてはいけません", "窓を開けてはいけません"],
            ["If she comes", "If Miki comes", "彼女が来たら", "ミキが来たら"],
            ["If Ken is busy", "If Yuta is busy", "ケンが忙しければ", "ユウタが忙しければ"],
            ["If I have time", "If we have time", "私に時間があれば", "私たちに時間があれば"],
            ["If it rains", "If it snows", "雨が降ったら", "雪が降ったら"],
            ["we will stay home", "we will read books", "私たちは家にいます", "私たちは本を読みます"],
            ["I will be happy", "I will call you", "私は幸せになります", "私はあなたに電話します"],
            ["I will wait", "I will help him", "私は待ちます", "私は彼を手伝います"],
            ["The idea", "The plan", "その考え", "その計画"],
            ["This soup", "This curry", "このスープ", "このカレー"],
            ["follow the rule", "read the rule", "規則に従う", "規則を読む"],
            ["go to bed early", "study English", "早く寝る", "英語を勉強する"],
            ["clean the desk", "clean the room", "机を掃除する", "部屋を掃除する"],
            ["The towel", "The blanket", "そのタオル", "その毛布"],
            ["The towel", "The shirt", "そのタオル", "そのシャツ"],
            ["The blanket", "The towel", "その毛布", "そのタオル"],
            ["The cake", "The coffee", "そのケーキ", "そのコーヒー"],
            ["The cake", "The soup", "そのケーキ", "そのスープ"],
            ["The coffee", "The tea", "そのコーヒー", "そのお茶"],
            ["The flower", "The garden", "その花", "その庭"],
            ["The flower", "The picture", "その花", "その絵"],
            ["The garden", "The park", "その庭", "その公園"],
            ["happy", "excited", "幸せ", "わくわく"],
            ["busy", "tired", "忙しい", "疲れている"],
            ["kind", "friendly", "親切", "友好的"],
            ["big", "small", "大きい", "小さい"],
            ["old", "new", "古い", "新しい"],
            ["like", "need", "好き", "必要"],
            ["like", "want", "好き", "欲しい"],
            ["need", "want", "必要", "欲しい"],
            ["want", "like", "欲しい", "好き"],
            ["soft", "warm", "やわらかい", "暖かい"],
            ["soft", "nice", "やわらかい", "すてきな"],
            ["warm", "soft", "暖かい", "やわらかい"],
            ["sweet", "good", "甘い", "よい"],
            ["sweet", "hot", "甘い", "熱い"],
            ["good", "sweet", "よい", "甘い"],
            ["beautiful", "nice", "美しい", "すてきな"],
            ["beautiful", "old", "美しい", "古い"],
            ["nice", "beautiful", "すてきな", "美しい"],
            ["difficult", "important", "難しい", "大切な"]
        ];

        const ordered = replacements.map((_, index) => replacements[(index + salt) % replacements.length]);
        for (const [from, to, jpFrom, jpTo] of ordered) {
            if (!example.en.includes(from) || !example.jp.includes(jpFrom)) continue;
            const candidate = replaceExamplePart(example, from, to, jpFrom, jpTo);
            if (!usedEnglish.has(normalizeEnglish(getExampleEnglish(candidate)))) return candidate;
        }
        return cleanupGeneratedExample(example);
    }

    function diversifyExamples(examples, usedEnglish, sectionOffset) {
        return examples.map((example, index) => {
            let next = cleanupGeneratedExample(example);
            let normalized = normalizeEnglish(getExampleEnglish(next));
            let attempts = 0;
            while (usedEnglish.has(normalized) && attempts < 80) {
                next = makeMoreVariedExample(next, usedEnglish, sectionOffset + index + attempts);
                normalized = normalizeEnglish(getExampleEnglish(next));
                attempts += 1;
            }
            if (usedEnglish.has(normalized)) {
                next = addUniqueContext(next, usedEnglish, sectionOffset + index);
                normalized = normalizeEnglish(getExampleEnglish(next));
            }
            usedEnglish.add(normalized);
            return next;
        });
    }

    function makeGeneratedTest(spec) {
        const usedEnglish = new Set();
        const choiceExamples = diversifyExamples(getSectionExamples(spec, "choice", 5), usedEnglish, 0);
        const fillExamples = diversifyExamples(getSectionExamples(spec, "fill", 5), usedEnglish, 20);
        const reorderExamples = diversifyExamples(getSectionExamples(spec, "reorder", 5), usedEnglish, 40);
        const translationExamples = diversifyExamples(getSectionExamples(spec, "translation", 2), usedEnglish, 60);
        const hasWrongSentenceChoices = (spec.wrongSentences || []).length >= 3;
        const sentenceChoiceExamples = diversifyExamples(
            hasWrongSentenceChoices
                ? getSectionExamples(spec, "meaning", 3)
                : getSectionExamples(spec, "meaning", 3),
            usedEnglish,
            80
        );

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

        const test = {
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
        return test;
    }

    function getQuestionEnglish(section, question) {
        if (section.type === "reorder") return question.answer;
        if (section.type === "translation") return (question.answers || []).join(" / ");
        if (question.question === "Which sentence is correct?") return question.answer;
        if (question.question && question.question.includes("_____")) return question.question.replace("_____", question.answer);
        return question.question || "";
    }

    function addNaturalTimeContextToText(text, jpText, salt) {
        const timeReplacementGroups = [
            ["tomorrow", "明日", [["next Sunday", "次の日曜日"], ["today", "今日"], ["this evening", "今晩"]]],
            ["today", "今日", [["this morning", "今朝"], ["now", "今"], ["tomorrow", "明日"], ["next Sunday", "次の日曜日"]]],
            ["now", "今", [["today", "今日"], ["this morning", "今朝"], ["tomorrow", "明日"]]],
            ["every day", "毎日", [["on Sundays", "日曜日に"], ["after school", "放課後"], ["today", "今日"]]],
            ["after school", "放課後", [["this evening", "今晩"], ["today", "今日"], ["on Sundays", "日曜日に"]]],
            ["this morning", "今朝", [["today", "今日"], ["now", "今"], ["tomorrow", "明日"]]],
            ["yesterday morning", "昨日の朝", [["last week", "先週"], ["yesterday", "昨日"], ["this morning", "今朝"]]],
            ["yesterday", "昨日", [["last week", "先週"], ["this morning", "今朝"], ["last night", "昨夜"]]],
            ["last night", "昨夜", [["yesterday", "昨日"], ["last week", "先週"], ["this morning", "今朝"]]],
            ["last week", "先週", [["yesterday", "昨日"], ["this morning", "今朝"], ["last night", "昨夜"]]]
        ];
        const ordered = timeReplacementGroups.map((_, index) => timeReplacementGroups[(index + salt) % timeReplacementGroups.length]);
        for (const [from, jpFrom, replacements] of ordered) {
            if (!text.includes(from)) continue;
            const [to, jpTo] = replacements[salt % replacements.length];
            return {
                text: text.replace(new RegExp(`\\b${escapeRegExp(from)}\\b`, "g"), to),
                jpText: jpText ? jpText.split(jpFrom).join(jpTo) : jpText
            };
        }

        const isPast = /\b(was|were|didn't|went|made|saw|bought|watched|sang|met|opened|closed|helped|played|studied|cleaned|visited|arrived|left|looked|sounded|felt|tasted)\b/i.test(text);
        const isFuture = /\b(will|going to|must|should|have to|has to)\b/i.test(text);
        const contexts = isPast
            ? [["yesterday", "昨日"], ["last week", "先週"], ["this morning", "今朝"]]
            : isFuture
                ? [["tomorrow", "明日"], ["today", "今日"], ["next Sunday", "次の日曜日"]]
                : [["today", "今日"], ["now", "今"], ["every day", "毎日"], ["this morning", "今朝"]];
        const [enContext, jpContext] = contexts[salt % contexts.length];
        const punctuation = text.endsWith("?") ? "?" : ".";
        return {
            text: `${text.replace(/[?.!]$/, "")} ${enContext}${punctuation}`,
            jpText: jpText ? `${jpContext}、${jpText}` : jpText
        };
    }

    function replaceChoiceAnswer(question, nextAnswer) {
        if (!question.choices) return;
        const index = question.choices.indexOf(question.answer);
        if (index >= 0) question.choices[index] = nextAnswer;
        question.answer = nextAnswer;
    }

    function splitWordsForReorder(answer) {
        return answer.split(" ");
    }

    function varyDuplicateQuestion(section, question, salt) {
        const jpText = question.translation || question.question || "";
        if (section.type === "choice") {
            if (question.question === "Which sentence is correct?") {
                const varied = addNaturalTimeContextToText(question.answer, question.translation, salt);
                replaceChoiceAnswer(question, varied.text);
                if (varied.jpText) question.translation = varied.jpText;
                return;
            }
            const varied = addNaturalTimeContextToText(question.question, question.translation, salt);
            question.question = varied.text;
            if (varied.jpText) question.translation = varied.jpText;
            return;
        }
        if (section.type === "fill") {
            const varied = addNaturalTimeContextToText(question.question, question.translation, salt);
            question.question = varied.text;
            if (varied.jpText) question.translation = varied.jpText;
            return;
        }
        if (section.type === "reorder") {
            const varied = addNaturalTimeContextToText(question.answer, jpText, salt);
            question.answer = varied.text;
            question.words = splitWordsForReorder(varied.text);
            question.question = varied.jpText || question.question;
            return;
        }
        if (section.type === "translation" && question.answers && question.answers.length) {
            const varied = addNaturalTimeContextToText(question.answers[0], question.question, salt);
            question.answers = [varied.text];
            question.question = varied.jpText || question.question;
        }
    }

    function dedupeTestQuestions(test) {
        const used = new Set();
        let salt = 0;
        for (const section of test.sections) {
            for (const question of section.questions) {
                let normalized = normalizeEnglish(getQuestionEnglish(section, question));
                let attempts = 0;
                while (used.has(normalized) && attempts < 20) {
                    varyDuplicateQuestion(section, question, salt);
                    normalized = normalizeEnglish(getQuestionEnglish(section, question));
                    salt += 1;
                    attempts += 1;
                }
                used.add(normalized);
            }
        }
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
            ],
            fillExamples: [
                { jp: "あなたは注意深いです。", en: "You are careful.", blank: "You _____ careful.", answer: "are", hints: ["You", "careful"] },
                { jp: "あなたは京都出身です。", en: "You are from Kyoto.", blank: "You are _____ Kyoto.", answer: "from", hints: ["You", "from"] },
                { jp: "あなたは生徒ではありません。", en: "You are not a student.", blank: "You are _____ a student.", answer: "not", hints: ["You", "not"] },
                { jp: "あなたは私の先生です。", en: "You are my teacher.", blank: "You are my _____.", answer: "teacher", hints: ["You", "teacher"] },
                { jp: "あなたは疲れています。", en: "You are tired.", blank: "You _____ tired.", answer: "are", hints: ["You", "tired"] }
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
            ],
            fillExamples: [
                { jp: "彼女は幸せです。", en: "She is happy.", blank: "She _____ happy.", answer: "is", hints: ["She", "happy"] },
                { jp: "彼は医者です。", en: "He is a doctor.", blank: "He is _____ doctor.", answer: "a", hints: ["He", "doctor"] },
                { jp: "彼女は疲れていません。", en: "She is not tired.", blank: "She is _____ tired.", answer: "not", hints: ["She", "not"] },
                { jp: "彼は大阪出身です。", en: "He is from Osaka.", blank: "He is _____ Osaka.", answer: "from", hints: ["He", "from"] },
                { jp: "彼は私の父です。", en: "He is my father.", blank: "He is my _____.", answer: "father", hints: ["He", "father"] }
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
            ],
            fillExamples: [
                { jp: "あれは犬です。", en: "That is a dog.", blank: "That is _____ dog.", answer: "a", hints: ["That", "dog"] },
                { jp: "これはあなたの消しゴムです。", en: "This is your eraser.", blank: "This _____ your eraser.", answer: "is", hints: ["This", "eraser"] },
                { jp: "あれは私の自転車です。", en: "That is my bike.", blank: "That _____ my bike.", answer: "is", hints: ["That", "bike"] },
                { jp: "これは赤くありません。", en: "This is not red.", blank: "This is _____ red.", answer: "not", hints: ["This", "not"] },
                { jp: "これは私のかばんです。", en: "This is my bag.", blank: "This is my _____.", answer: "bag", hints: ["This", "bag"] }
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
            ],
            meaningExamples: [
                { jp: "私は元気です。", en: "I am fine.", blank: "I _____ fine.", answer: "am", hints: ["I", "am"] },
                { jp: "あなたたちは生徒です。", en: "You are students.", blank: "You _____ students.", answer: "are", hints: ["You", "are"] },
                { jp: "彼女は私の友達です。", en: "She is my friend.", blank: "She _____ my friend.", answer: "is", hints: ["She", "is"] }
            ],
            fillExamples: [
                { jp: "あなたは疲れています。", en: "You are tired.", blank: "You _____ tired.", answer: "are", hints: ["You", "are"] },
                { jp: "彼は親切です。", en: "He is kind.", blank: "He _____ kind.", answer: "is", hints: ["He", "is"] },
                { jp: "私たちはクラスメートです。", en: "We are classmates.", blank: "We _____ classmates.", answer: "are", hints: ["We", "are"] },
                { jp: "これはあなたの本です。", en: "This is your book.", blank: "This _____ your book.", answer: "is", hints: ["This", "is"] },
                { jp: "私は空腹です。", en: "I am hungry.", blank: "I _____ hungry.", answer: "am", hints: ["I", "am"] }
            ],
            reorderExamples: [
                { jp: "彼女は忙しいです。", en: "She is busy.", blank: "She _____ busy.", answer: "is", hints: ["She", "is"] },
                { jp: "あなたは私の先生です。", en: "You are my teacher.", blank: "You _____ my teacher.", answer: "are", hints: ["You", "are"] },
                { jp: "あれは私のノートです。", en: "That is my notebook.", blank: "That _____ my notebook.", answer: "is", hints: ["That", "is"] },
                { jp: "彼らは友達です。", en: "They are friends.", blank: "They _____ friends.", answer: "are", hints: ["They", "are"] },
                { jp: "私はケンタです。", en: "I am Kenta.", blank: "I _____ Kenta.", answer: "am", hints: ["I", "am"] }
            ],
            translationExamples: [
                { jp: "私たちは生徒です。", en: "We are students.", blank: "We _____ students.", answer: "are", hints: ["We", "are"], answers: ["We are students."] },
                { jp: "これは私のかばんです。", en: "This is my bag.", blank: "This _____ my bag.", answer: "is", hints: ["This", "is"], answers: ["This is my bag."] }
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
            ],
            choiceExamples: [
                { jp: "私は疲れていません。", en: "I am not tired.", blank: "I am _____ tired.", answer: "not", distractors: ["no", "do", "does"], hints: ["am", "not"] },
                { jp: "あなたは忙しくありません。", en: "You are not busy.", blank: "You _____ not busy.", answer: "are", distractors: ["am", "is", "do"], hints: ["are", "not"] },
                { jp: "彼は私の兄ではありません。", en: "He is not my brother.", blank: "He _____ not my brother.", answer: "is", distractors: ["am", "are", "do"], hints: ["is", "not"] },
                { jp: "これは私のペンではありません。", en: "This is not my pen.", blank: "This is not _____ pen.", answer: "my", distractors: ["I", "me", "mine"], hints: ["not", "my"] },
                { jp: "彼らは先生ではありません。", en: "They are not teachers.", blank: "They are not _____.", answer: "teachers", distractors: ["teacher", "a teacher", "teaches"], hints: ["not", "teachers"] }
            ],
            meaningExamples: [
                { jp: "私は学生ではありません。", en: "I am not a student.", blank: "I _____ not a student.", answer: "am", hints: ["am", "not"] },
                { jp: "彼女は親切ではありません。", en: "She is not kind.", blank: "She is _____ kind.", answer: "not", hints: ["is", "not"] },
                { jp: "私たちは友達ではありません。", en: "We are not friends.", blank: "We _____ not friends.", answer: "are", hints: ["are", "not"] }
            ],
            fillExamples: [
                { jp: "私は幸せではありません。", en: "I am not happy.", blank: "I am _____ happy.", answer: "not", hints: ["not", "happy"] },
                { jp: "あなたは先生ではありません。", en: "You are not a teacher.", blank: "You _____ not a teacher.", answer: "are", hints: ["are", "not"] },
                { jp: "彼は家にいません。", en: "He is not at home.", blank: "He _____ not at home.", answer: "is", hints: ["is", "home"] },
                { jp: "これは新しくありません。", en: "This is not new.", blank: "This is not _____.", answer: "new", hints: ["not", "new"] },
                { jp: "彼女たちは生徒ではありません。", en: "They are not students.", blank: "They are not _____.", answer: "students", hints: ["not", "students"] }
            ],
            reorderExamples: [
                { jp: "私は医者ではありません。", en: "I am not a doctor.", blank: "I am _____ a doctor.", answer: "not", hints: ["not", "doctor"] },
                { jp: "あなたは遅れていません。", en: "You are not late.", blank: "You _____ not late.", answer: "are", hints: ["are", "late"] },
                { jp: "そのかばんは古くありません。", en: "The bag is not old.", blank: "The bag _____ not old.", answer: "is", hints: ["is", "old"] },
                { jp: "私たちは忙しくありません。", en: "We are not busy.", blank: "We are not _____.", answer: "busy", hints: ["not", "busy"] },
                { jp: "これは私のノートではありません。", en: "This is not my notebook.", blank: "This is not my _____.", answer: "notebook", hints: ["not", "notebook"] }
            ],
            translationExamples: [
                { jp: "彼女は私の姉ではありません。", en: "She is not my sister.", blank: "She is _____ my sister.", answer: "not", hints: ["not", "sister"], answers: ["She is not my sister."] },
                { jp: "彼らは私のクラスメートではありません。", en: "They are not my classmates.", blank: "They are not my _____.", answer: "classmates", hints: ["not", "classmates"], answers: ["They are not my classmates."] }
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
            ],
            meaningExamples: [
                { jp: "これはあなたのノートですか。", en: "Is this your notebook?", blank: "_____ this your notebook?", answer: "Is", hints: ["Is", "notebook"] },
                { jp: "彼らはクラスメートですか。", en: "Are they classmates?", blank: "_____ they classmates?", answer: "Are", hints: ["Are", "classmates"] },
                { jp: "あなたは疲れていますか。", en: "Are you tired?", blank: "_____ you tired?", answer: "Are", hints: ["Are", "tired"] }
            ],
            fillExamples: [
                { jp: "彼は先生ですか。", en: "Is he a teacher?", blank: "_____ he a teacher?", answer: "Is", hints: ["Is", "teacher"] },
                { jp: "ミキは親切ですか。", en: "Is Miki kind?", blank: "_____ Miki kind?", answer: "Is", hints: ["Is", "Miki"] },
                { jp: "私たちは友達ですか。", en: "Are we friends?", blank: "_____ we friends?", answer: "Are", hints: ["Are", "we"] },
                { jp: "あれはあなたのかばんですか。", en: "Is that your bag?", blank: "_____ that your bag?", answer: "Is", hints: ["Is", "bag"] },
                { jp: "あなたたちは生徒ですか。", en: "Are you students?", blank: "_____ you students?", answer: "Are", hints: ["Are", "students"] }
            ],
            reorderExamples: [
                { jp: "彼女は忙しいですか。", en: "Is she busy?", blank: "_____ she busy?", answer: "Is", hints: ["Is", "busy"] },
                { jp: "あなたは私の先生ですか。", en: "Are you my teacher?", blank: "_____ you my teacher?", answer: "Are", hints: ["Are", "teacher"] },
                { jp: "これは彼の本ですか。", en: "Is this his book?", blank: "_____ this his book?", answer: "Is", hints: ["Is", "book"] },
                { jp: "彼らは先生ですか。", en: "Are they teachers?", blank: "_____ they teachers?", answer: "Are", hints: ["Are", "teachers"] },
                { jp: "ケンは家にいますか。", en: "Is Ken at home?", blank: "_____ Ken at home?", answer: "Is", hints: ["Is", "Ken"] }
            ],
            translationExamples: [
                { jp: "これは私のペンですか。", en: "Is this my pen?", blank: "_____ this my pen?", answer: "Is", hints: ["Is", "pen"], answers: ["Is this my pen?"] },
                { jp: "私たちは生徒ですか。", en: "Are we students?", blank: "_____ we students?", answer: "Are", hints: ["Are", "students"], answers: ["Are we students?"] }
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
            ],
            meaningExamples: [
                { jp: "彼女は私のクラスメートです。", en: "She is my classmate.", blank: "She _____ my classmate.", answer: "is", hints: ["She", "is"] },
                { jp: "彼らは先生ですか。", en: "Are they teachers?", blank: "_____ they teachers?", answer: "Are", hints: ["Are", "teachers"] },
                { jp: "これは私のノートではありません。", en: "This is not my notebook.", blank: "This is _____ my notebook.", answer: "not", hints: ["This", "not"] }
            ],
            fillExamples: [
                { jp: "あなたは忙しくありません。", en: "You are not busy.", blank: "You are _____ busy.", answer: "not", hints: ["You", "not"] },
                { jp: "私は元気です。", en: "I am fine.", blank: "I _____ fine.", answer: "am", hints: ["I", "am"] },
                { jp: "彼は私の兄です。", en: "He is my brother.", blank: "He _____ my brother.", answer: "is", hints: ["He", "is"] },
                { jp: "私たちは友達ですか。", en: "Are we friends?", blank: "_____ we friends?", answer: "Are", hints: ["Are", "we"] },
                { jp: "これはあなたのペンです。", en: "This is your pen.", blank: "This _____ your pen.", answer: "is", hints: ["This", "is"] }
            ],
            reorderExamples: [
                { jp: "私は医者ではありません。", en: "I am not a doctor.", blank: "I am _____ a doctor.", answer: "not", hints: ["I", "not"] },
                { jp: "彼女は親切ですか。", en: "Is she kind?", blank: "_____ she kind?", answer: "Is", hints: ["Is", "kind"] },
                { jp: "彼らはクラスメートです。", en: "They are classmates.", blank: "They _____ classmates.", answer: "are", hints: ["They", "are"] },
                { jp: "あなたは疲れていません。", en: "You are not tired.", blank: "You are _____ tired.", answer: "not", hints: ["You", "not"] },
                { jp: "あれは私の学校ですか。", en: "Is that my school?", blank: "_____ that my school?", answer: "Is", hints: ["Is", "school"] }
            ],
            translationExamples: [
                { jp: "彼は学生ではありません。", en: "He is not a student.", blank: "He is _____ a student.", answer: "not", hints: ["He", "not"], answers: ["He is not a student."] },
                { jp: "あなたたちは友達ですか。", en: "Are you friends?", blank: "_____ you friends?", answer: "Are", hints: ["Are", "friends"], answers: ["Are you friends?"] }
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
            ],
            choiceExamples: [
                { jp: "私はサッカーをしません。", en: "I don't play soccer.", blank: "I _____ play soccer.", answer: "don't", distractors: ["am not", "isn't", "aren't"], hints: ["don't", "play"] },
                { jp: "あなたは音楽が好きではありません。", en: "You don't like music.", blank: "You don't _____ music.", answer: "like", distractors: ["likes", "liking", "liked"], hints: ["don't", "like"] },
                { jp: "私たちは英語を勉強しません。", en: "We don't study English.", blank: "We _____ study English.", answer: "don't", distractors: ["doesn't", "aren't", "isn't"], hints: ["don't", "study"] },
                { jp: "彼らは学校へ行きません。", en: "They don't go to school.", blank: "They don't _____ to school.", answer: "go", distractors: ["goes", "going", "went"], hints: ["don't", "go"] },
                { jp: "私は朝食を食べません。", en: "I don't eat breakfast.", blank: "I don't _____ breakfast.", answer: "eat", distractors: ["eats", "eating", "ate"], hints: ["don't", "eat"] }
            ],
            meaningExamples: [
                { jp: "あなたたちはテレビを見ません。", en: "You don't watch TV.", blank: "You _____ watch TV.", answer: "don't", hints: ["don't", "watch"] },
                { jp: "私たちは水を飲みません。", en: "We don't drink water.", blank: "We don't _____ water.", answer: "drink", hints: ["don't", "drink"] },
                { jp: "彼らはこの本を読みません。", en: "They don't read this book.", blank: "They don't _____ this book.", answer: "read", hints: ["don't", "read"] }
            ],
            fillExamples: [
                { jp: "私はテニスをしません。", en: "I don't play tennis.", blank: "I _____ play tennis.", answer: "don't", hints: ["don't", "tennis"] },
                { jp: "あなたは魚が好きではありません。", en: "You don't like fish.", blank: "You don't _____ fish.", answer: "like", hints: ["don't", "fish"] },
                { jp: "私たちは夕食を作りません。", en: "We don't make dinner.", blank: "We don't _____ dinner.", answer: "make", hints: ["don't", "make"] },
                { jp: "彼らはここに住んでいません。", en: "They don't live here.", blank: "They _____ live here.", answer: "don't", hints: ["don't", "live"] },
                { jp: "私はその歌を歌いません。", en: "I don't sing the song.", blank: "I don't _____ the song.", answer: "sing", hints: ["don't", "sing"] }
            ],
            reorderExamples: [
                { jp: "私はバスケットボールをしません。", en: "I don't play basketball.", blank: "I _____ play basketball.", answer: "don't", hints: ["don't", "basketball"] },
                { jp: "あなたはこのペンを使いません。", en: "You don't use this pen.", blank: "You don't _____ this pen.", answer: "use", hints: ["don't", "use"] },
                { jp: "私たちは早く起きません。", en: "We don't get up early.", blank: "We don't _____ up early.", answer: "get", hints: ["don't", "early"] },
                { jp: "彼らは昼食を食べません。", en: "They don't have lunch.", blank: "They don't _____ lunch.", answer: "have", hints: ["don't", "lunch"] },
                { jp: "私はここで走りません。", en: "I don't run here.", blank: "I don't _____ here.", answer: "run", hints: ["don't", "run"] }
            ],
            translationExamples: [
                { jp: "私は英語を話しません。", en: "I don't speak English.", blank: "I don't _____ English.", answer: "speak", hints: ["don't", "speak"], answers: ["I don't speak English."] },
                { jp: "私たちはこの部屋を掃除しません。", en: "We don't clean this room.", blank: "We don't _____ this room.", answer: "clean", hints: ["don't", "clean"], answers: ["We don't clean this room."] }
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
            ],
            choiceExamples: [
                { jp: "あなたはサッカーをしますか。", en: "Do you play soccer?", blank: "_____ you play soccer?", answer: "Do", distractors: ["Are", "Is", "Does"], hints: ["Do", "play"] },
                { jp: "あなたは音楽が好きですか。", en: "Do you like music?", blank: "Do you _____ music?", answer: "like", distractors: ["likes", "liking", "liked"], hints: ["Do", "like"] },
                { jp: "彼らは英語を勉強しますか。", en: "Do they study English?", blank: "_____ they study English?", answer: "Do", distractors: ["Does", "Are", "Is"], hints: ["Do", "study"] },
                { jp: "あなたたちは学校へ行きますか。", en: "Do you go to school?", blank: "Do you _____ to school?", answer: "go", distractors: ["goes", "going", "went"], hints: ["Do", "go"] },
                { jp: "あなたは朝食を食べますか。", en: "Do you eat breakfast?", blank: "Do you _____ breakfast?", answer: "eat", distractors: ["eats", "eating", "ate"], hints: ["Do", "eat"] }
            ],
            meaningExamples: [
                { jp: "あなたたちはテレビを見ますか。", en: "Do you watch TV?", blank: "_____ you watch TV?", answer: "Do", hints: ["Do", "watch"] },
                { jp: "彼らは水を飲みますか。", en: "Do they drink water?", blank: "Do they _____ water?", answer: "drink", hints: ["Do", "drink"] },
                { jp: "あなたはこの本を読みますか。", en: "Do you read this book?", blank: "Do you _____ this book?", answer: "read", hints: ["Do", "read"] }
            ],
            fillExamples: [
                { jp: "あなたはテニスをしますか。", en: "Do you play tennis?", blank: "_____ you play tennis?", answer: "Do", hints: ["Do", "tennis"] },
                { jp: "あなたは魚が好きですか。", en: "Do you like fish?", blank: "Do you _____ fish?", answer: "like", hints: ["Do", "fish"] },
                { jp: "彼らは夕食を作りますか。", en: "Do they make dinner?", blank: "Do they _____ dinner?", answer: "make", hints: ["Do", "make"] },
                { jp: "あなたたちはここに住んでいますか。", en: "Do you live here?", blank: "_____ you live here?", answer: "Do", hints: ["Do", "live"] },
                { jp: "あなたはその歌を歌いますか。", en: "Do you sing the song?", blank: "Do you _____ the song?", answer: "sing", hints: ["Do", "sing"] }
            ],
            reorderExamples: [
                { jp: "あなたはバスケットボールをしますか。", en: "Do you play basketball?", blank: "_____ you play basketball?", answer: "Do", hints: ["Do", "basketball"] },
                { jp: "あなたはこのペンを使いますか。", en: "Do you use this pen?", blank: "Do you _____ this pen?", answer: "use", hints: ["Do", "use"] },
                { jp: "彼らは早く起きますか。", en: "Do they get up early?", blank: "Do they _____ up early?", answer: "get", hints: ["Do", "early"] },
                { jp: "あなたたちは昼食を食べますか。", en: "Do you have lunch?", blank: "Do you _____ lunch?", answer: "have", hints: ["Do", "lunch"] },
                { jp: "あなたはここで走りますか。", en: "Do you run here?", blank: "Do you _____ here?", answer: "run", hints: ["Do", "run"] }
            ],
            translationExamples: [
                { jp: "あなたは英語を話しますか。", en: "Do you speak English?", blank: "Do you _____ English?", answer: "speak", hints: ["Do", "speak"], answers: ["Do you speak English?"] },
                { jp: "彼らはこの部屋を掃除しますか。", en: "Do they clean this room?", blank: "Do they _____ this room?", answer: "clean", hints: ["Do", "clean"], answers: ["Do they clean this room?"] }
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
            ],
            choiceExamples: [
                { jp: "私はテニスをします。", en: "I play tennis.", blank: "I _____ tennis.", answer: "play", distractors: ["plays", "playing", "am"], hints: ["play", "tennis"] },
                { jp: "私はテニスをしません。", en: "I don't play tennis.", blank: "I _____ play tennis.", answer: "don't", distractors: ["am not", "isn't", "aren't"], hints: ["don't", "play"] },
                { jp: "あなたはテニスをしますか。", en: "Do you play tennis?", blank: "_____ you play tennis?", answer: "Do", distractors: ["Are", "Is", "Does"], hints: ["Do", "play"] },
                { jp: "私たちは犬が好きです。", en: "We like dogs.", blank: "We _____ dogs.", answer: "like", distractors: ["likes", "liking", "are"], hints: ["like", "dogs"] },
                { jp: "彼らは英語を勉強しません。", en: "They don't study English.", blank: "They don't _____ English.", answer: "study", distractors: ["studies", "studying", "studied"], hints: ["don't", "study"] }
            ],
            meaningExamples: [
                { jp: "私は本を読みます。", en: "I read books.", blank: "I _____ books.", answer: "read", hints: ["read", "books"] },
                { jp: "あなたは音楽が好きではありません。", en: "You don't like music.", blank: "You _____ like music.", answer: "don't", hints: ["don't", "like"] },
                { jp: "彼らはサッカーをしますか。", en: "Do they play soccer?", blank: "_____ they play soccer?", answer: "Do", hints: ["Do", "play"] }
            ],
            fillExamples: [
                { jp: "私たちは英語を話します。", en: "We speak English.", blank: "We _____ English.", answer: "speak", hints: ["speak", "English"] },
                { jp: "私は朝食を食べません。", en: "I don't eat breakfast.", blank: "I _____ eat breakfast.", answer: "don't", hints: ["don't", "eat"] },
                { jp: "あなたは水を飲みますか。", en: "Do you drink water?", blank: "_____ you drink water?", answer: "Do", hints: ["Do", "drink"] },
                { jp: "彼らは学校へ行きます。", en: "They go to school.", blank: "They _____ to school.", answer: "go", hints: ["go", "school"] },
                { jp: "私たちはテレビを見ません。", en: "We don't watch TV.", blank: "We don't _____ TV.", answer: "watch", hints: ["don't", "watch"] }
            ],
            reorderExamples: [
                { jp: "私は野球をします。", en: "I play baseball.", blank: "I _____ baseball.", answer: "play", hints: ["play", "baseball"] },
                { jp: "私たちは猫が必要です。", en: "We need cats.", blank: "We _____ cats.", answer: "need", hints: ["need", "cats"] },
                { jp: "あなたは昼食を食べますか。", en: "Do you have lunch?", blank: "_____ you have lunch?", answer: "Do", hints: ["Do", "lunch"] },
                { jp: "彼らはここに住んでいません。", en: "They don't live here.", blank: "They _____ live here.", answer: "don't", hints: ["don't", "live"] },
                { jp: "私たちはこの部屋を掃除します。", en: "We clean this room.", blank: "We _____ this room.", answer: "clean", hints: ["clean", "room"] }
            ],
            translationExamples: [
                { jp: "私たちは漫画が好きです。", en: "We like comics.", blank: "We _____ comics.", answer: "like", hints: ["like", "comics"], answers: ["We like comics."] },
                { jp: "あなたは英語を勉強しますか。", en: "Do you study English?", blank: "_____ you study English?", answer: "Do", hints: ["Do", "study"], answers: ["Do you study English?"] }
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
            ],
            choiceExamples: [
                { jp: "これは何ですか。", en: "What is this?", blank: "What _____ this?", answer: "is", distractors: ["are", "do", "does"], hints: ["What", "this"] },
                { jp: "あなたは何を読みますか。", en: "What do you read?", blank: "_____ do you read?", answer: "What", distractors: ["Who", "When", "Where"], hints: ["What", "read"] },
                { jp: "彼は何が好きですか。", en: "What does he like?", blank: "What _____ he like?", answer: "does", distractors: ["do", "is", "are"], hints: ["What", "like"] },
                { jp: "あなたの好きな教科は何ですか。", en: "What is your favorite subject?", blank: "What is your favorite _____?", answer: "subject", distractors: ["sports", "season", "food"], hints: ["What", "subject"] },
                { jp: "あなたは朝食に何を食べますか。", en: "What do you eat for breakfast?", blank: "What do you _____ for breakfast?", answer: "eat", distractors: ["eats", "eating", "ate"], hints: ["What", "eat"] }
            ],
            meaningExamples: [
                { jp: "彼女は何を持っていますか。", en: "What does she have?", blank: "_____ does she have?", answer: "What", hints: ["What", "have"] },
                { jp: "これは英語で何と言いますか。", en: "What do you call this in English?", blank: "_____ do you call this in English?", answer: "What", hints: ["What", "call"] },
                { jp: "あなたは日曜日に何をしますか。", en: "What do you do on Sunday?", blank: "_____ do you do on Sunday?", answer: "What", hints: ["What", "Sunday"] }
            ],
            fillExamples: [
                { jp: "あなたは何を勉強しますか。", en: "What do you study?", blank: "What _____ you study?", answer: "do", hints: ["What", "study"] },
                { jp: "ケンは何を演奏しますか。", en: "What does Ken play?", blank: "What _____ Ken play?", answer: "does", hints: ["What", "Ken"] },
                { jp: "これは何の本ですか。", en: "What book is this?", blank: "What book _____ this?", answer: "is", hints: ["What", "book"] },
                { jp: "あなたは何色が好きですか。", en: "What color do you like?", blank: "What color do you _____?", answer: "like", hints: ["What", "color"] },
                { jp: "彼らは放課後に何をしますか。", en: "What do they do after school?", blank: "What do they _____ after school?", answer: "do", hints: ["What", "after"] }
            ],
            reorderExamples: [
                { jp: "あなたは何を買いますか。", en: "What do you buy?", blank: "_____ do you buy?", answer: "What", hints: ["What", "buy"] },
                { jp: "彼女は何を作りますか。", en: "What does she make?", blank: "_____ does she make?", answer: "What", hints: ["What", "make"] },
                { jp: "あなたの好きな食べ物は何ですか。", en: "What is your favorite food?", blank: "_____ is your favorite food?", answer: "What", hints: ["What", "food"] },
                { jp: "あなたは昼食に何を飲みますか。", en: "What do you drink for lunch?", blank: "_____ do you drink for lunch?", answer: "What", hints: ["What", "drink"] },
                { jp: "この動物は何ですか。", en: "What is this animal?", blank: "_____ is this animal?", answer: "What", hints: ["What", "animal"] }
            ],
            translationExamples: [
                { jp: "あなたは何を見ますか。", en: "What do you see?", blank: "_____ do you see?", answer: "What", hints: ["What", "see"], answers: ["What do you see?"] },
                { jp: "彼は夕食に何を食べますか。", en: "What does he eat for dinner?", blank: "_____ does he eat for dinner?", answer: "What", hints: ["What", "dinner"], answers: ["What does he eat for dinner?"] }
            ]
        },
        {
            id: "g1-question-who",
            title: "疑問詞 who の文",
            rule: "who は「だれ」をたずねる疑問詞です。人を答えるときに使います。",
            distractors: ["What", "When", "Where"],
            wrongSentences: ["What do you help?", "Who does Ken knows?", "Who has dog?"],
            examples: [
                { jp: "彼はだれですか。", en: "Who is he?", blank: "_____ is he?", answer: "Who", hints: ["Who", "he"] },
                { jp: "彼女はだれですか。", en: "Who is she?", blank: "_____ is she?", answer: "Who", hints: ["Who", "she"] },
                { jp: "あの少年はだれですか。", en: "Who is that boy?", blank: "_____ is that boy?", answer: "Who" },
                { jp: "あなたの先生はだれですか。", en: "Who is your teacher?", blank: "_____ is your teacher?", answer: "Who" },
                { jp: "あなたはだれが好きですか。", en: "Who do you like?", blank: "_____ do you like?", answer: "Who" }
            ],
            choiceExamples: [
                { jp: "あなたの先生はだれですか。", en: "Who is your teacher?", blank: "Who _____ your teacher?", answer: "is", distractors: ["are", "do", "does"], hints: ["Who", "teacher"] },
                { jp: "あの少年はだれですか。", en: "Who is that boy?", blank: "_____ is that boy?", answer: "Who", distractors: ["What", "When", "Where"], hints: ["Who", "boy"] },
                { jp: "彼女はだれですか。", en: "Who is she?", blank: "Who _____ she?", answer: "is", distractors: ["are", "do", "does"], hints: ["Who", "she"] },
                { jp: "あなたはだれが好きですか。", en: "Who do you like?", blank: "Who _____ you like?", answer: "do", distractors: ["does", "is", "are"], hints: ["Who", "like"] },
                { jp: "だれがサッカーをしますか。", en: "Who plays soccer?", blank: "Who _____ soccer?", answer: "plays", distractors: ["play", "do", "is"], hints: ["Who", "soccer"] }
            ],
            meaningExamples: [
                { jp: "あなたはだれを手伝いますか。", en: "Who do you help?", blank: "_____ do you help?", answer: "Who", hints: ["Who", "help"] },
                { jp: "ケンはだれを知っていますか。", en: "Who does Ken know?", blank: "_____ does Ken know?", answer: "Who", hints: ["Who", "Ken"] },
                { jp: "だれが犬を飼っていますか。", en: "Who has a dog?", blank: "_____ has a dog?", answer: "Who", hints: ["Who", "dog"] }
            ],
            fillExamples: [
                { jp: "だれが教室にいますか。", en: "Who is in the classroom?", blank: "_____ is in the classroom?", answer: "Who", hints: ["Who", "classroom"] },
                { jp: "あなたのお兄さんはだれですか。", en: "Who is your brother?", blank: "Who _____ your brother?", answer: "is", hints: ["Who", "brother"] },
                { jp: "だれが英語を勉強しますか。", en: "Who studies English?", blank: "Who _____ English?", answer: "studies", hints: ["Who", "studies"] },
                { jp: "だれが犬を飼っていますか。", en: "Who has a dog?", blank: "Who _____ a dog?", answer: "has", hints: ["Who", "dog"] },
                { jp: "ケンはだれを知っていますか。", en: "Who does Ken know?", blank: "Who _____ Ken know?", answer: "does", hints: ["Who", "Ken"] }
            ],
            reorderExamples: [
                { jp: "この少女はだれですか。", en: "Who is this girl?", blank: "_____ is this girl?", answer: "Who", hints: ["Who", "girl"] },
                { jp: "あなたの音楽の先生はだれですか。", en: "Who is your music teacher?", blank: "_____ is your music teacher?", answer: "Who", hints: ["Who", "music"] },
                { jp: "彼らはだれに会いますか。", en: "Who do they meet?", blank: "_____ do they meet?", answer: "Who", hints: ["Who", "meet"] },
                { jp: "だれが早く学校に来ますか。", en: "Who comes to school early?", blank: "_____ comes to school early?", answer: "Who", hints: ["Who", "early"] },
                { jp: "だれがこの本を読みますか。", en: "Who reads this book?", blank: "_____ reads this book?", answer: "Who", hints: ["Who", "reads"] }
            ],
            translationExamples: [
                { jp: "あなたのクラスメートはだれですか。", en: "Who is your classmate?", blank: "_____ is your classmate?", answer: "Who", hints: ["Who", "classmate"], answers: ["Who is your classmate?"] },
                { jp: "だれが数学を教えますか。", en: "Who teaches math?", blank: "_____ teaches math?", answer: "Who", hints: ["Who", "math"], answers: ["Who teaches math?"] }
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
            choiceExamples: [
                { jp: "あなたの誕生日はいつですか。", en: "When is your birthday?", blank: "When _____ your birthday?", answer: "is", distractors: ["are", "do", "does"], hints: ["When", "birthday"] },
                { jp: "あなたはいつ英語を勉強しますか。", en: "When do you study English?", blank: "_____ do you study English?", answer: "When", distractors: ["What", "Who", "Where"], hints: ["When", "study"] },
                { jp: "彼女はいつピアノを練習しますか。", en: "When does she practice the piano?", blank: "When _____ she practice the piano?", answer: "does", distractors: ["do", "is", "are"], hints: ["When", "practice"] },
                { jp: "学校祭はいつですか。", en: "When is the school festival?", blank: "When is the school _____?", answer: "festival", distractors: ["birthday", "lunch", "home"], hints: ["When", "festival"] },
                { jp: "あなたはいつ昼食を食べますか。", en: "When do you eat lunch?", blank: "When do you _____ lunch?", answer: "eat", distractors: ["eats", "eating", "ate"], hints: ["When", "eat"] }
            ],
            meaningExamples: [
                { jp: "ケンはいつサッカーをしますか。", en: "When does Ken play soccer?", blank: "_____ does Ken play soccer?", answer: "When", hints: ["When", "Ken"] },
                { jp: "あなたはいつ学校へ行きますか。", en: "When do you go to school?", blank: "_____ do you go to school?", answer: "When", hints: ["When", "school"] },
                { jp: "あなたの英語の授業はいつですか。", en: "When is your English class?", blank: "_____ is your English class?", answer: "When", hints: ["When", "class"] }
            ],
            fillExamples: [
                { jp: "彼はいつ宿題をしますか。", en: "When does he do his homework?", blank: "When _____ he do his homework?", answer: "does", hints: ["When", "homework"] },
                { jp: "あなたはいつ起きますか。", en: "When do you get up?", blank: "When _____ you get up?", answer: "do", hints: ["When", "up"] },
                { jp: "あなたのテストはいつですか。", en: "When is your test?", blank: "When _____ your test?", answer: "is", hints: ["When", "test"] },
                { jp: "彼らはいつ夕食を食べますか。", en: "When do they have dinner?", blank: "When do they _____ dinner?", answer: "have", hints: ["When", "dinner"] },
                { jp: "ユキはいつ本を読みますか。", en: "When does Yuki read books?", blank: "When does Yuki _____ books?", answer: "read", hints: ["When", "read"] }
            ],
            reorderExamples: [
                { jp: "あなたはいつテニスをしますか。", en: "When do you play tennis?", blank: "_____ do you play tennis?", answer: "When", hints: ["When", "tennis"] },
                { jp: "私たちはいつ公園へ行きますか。", en: "When do we go to the park?", blank: "_____ do we go to the park?", answer: "When", hints: ["When", "park"] },
                { jp: "彼女はいつ家に帰りますか。", en: "When does she go home?", blank: "_____ does she go home?", answer: "When", hints: ["When", "home"] },
                { jp: "音楽の授業はいつですか。", en: "When is the music class?", blank: "_____ is the music class?", answer: "When", hints: ["When", "music"] },
                { jp: "あなたはいつ友だちに会いますか。", en: "When do you meet your friend?", blank: "_____ do you meet your friend?", answer: "When", hints: ["When", "meet"] }
            ],
            translationExamples: [
                { jp: "あなたはいつ朝食を食べますか。", en: "When do you eat breakfast?", blank: "_____ do you eat breakfast?", answer: "When", hints: ["When", "breakfast"], answers: ["When do you eat breakfast?"] },
                { jp: "彼の誕生日はいつですか。", en: "When is his birthday?", blank: "_____ is his birthday?", answer: "When", hints: ["When", "birthday"], answers: ["When is his birthday?"] }
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
            choiceExamples: [
                { jp: "私のかばんはどこですか。", en: "Where is my bag?", blank: "Where _____ my bag?", answer: "is", distractors: ["are", "do", "does"], hints: ["Where", "bag"] },
                { jp: "あなたはどこに住んでいますか。", en: "Where do you live?", blank: "_____ do you live?", answer: "Where", distractors: ["What", "Who", "When"], hints: ["Where", "live"] },
                { jp: "彼女はどこで英語を勉強しますか。", en: "Where does she study English?", blank: "Where _____ she study English?", answer: "does", distractors: ["do", "is", "are"], hints: ["Where", "study"] },
                { jp: "あなたの学校はどこですか。", en: "Where is your school?", blank: "Where is your _____?", answer: "school", distractors: ["bag", "book", "friend"], hints: ["Where", "school"] },
                { jp: "彼らはどこでサッカーをしますか。", en: "Where do they play soccer?", blank: "Where do they _____ soccer?", answer: "play", distractors: ["plays", "playing", "played"], hints: ["Where", "play"] }
            ],
            meaningExamples: [
                { jp: "彼はどこにいますか。", en: "Where is he?", blank: "_____ is he?", answer: "Where", hints: ["Where", "he"] },
                { jp: "ユキはどこで本を読みますか。", en: "Where does Yuki read books?", blank: "_____ does Yuki read books?", answer: "Where", hints: ["Where", "read"] },
                { jp: "私たちはどこで昼食を食べますか。", en: "Where do we eat lunch?", blank: "_____ do we eat lunch?", answer: "Where", hints: ["Where", "lunch"] }
            ],
            fillExamples: [
                { jp: "あなたはどこでテニスをしますか。", en: "Where do you play tennis?", blank: "Where _____ you play tennis?", answer: "do", hints: ["Where", "tennis"] },
                { jp: "ケンはどこに住んでいますか。", en: "Where does Ken live?", blank: "Where _____ Ken live?", answer: "does", hints: ["Where", "Ken"] },
                { jp: "駅はどこですか。", en: "Where is the station?", blank: "Where _____ the station?", answer: "is", hints: ["Where", "station"] },
                { jp: "あなたはどこへ行きますか。", en: "Where do you go?", blank: "Where do you _____?", answer: "go", hints: ["Where", "go"] },
                { jp: "彼女はどこで夕食を食べますか。", en: "Where does she have dinner?", blank: "Where does she _____ dinner?", answer: "have", hints: ["Where", "dinner"] }
            ],
            reorderExamples: [
                { jp: "公園はどこですか。", en: "Where is the park?", blank: "_____ is the park?", answer: "Where", hints: ["Where", "park"] },
                { jp: "あなたの友だちはどこにいますか。", en: "Where is your friend?", blank: "_____ is your friend?", answer: "Where", hints: ["Where", "friend"] },
                { jp: "彼らはどこで音楽を聞きますか。", en: "Where do they listen to music?", blank: "_____ do they listen to music?", answer: "Where", hints: ["Where", "music"] },
                { jp: "トムはどこで昼食を食べますか。", en: "Where does Tom eat lunch?", blank: "_____ does Tom eat lunch?", answer: "Where", hints: ["Where", "Tom"] },
                { jp: "私たちはどこで野球をしますか。", en: "Where do we play baseball?", blank: "_____ do we play baseball?", answer: "Where", hints: ["Where", "baseball"] }
            ],
            translationExamples: [
                { jp: "あなたはどこで本を読みますか。", en: "Where do you read books?", blank: "_____ do you read books?", answer: "Where", hints: ["Where", "books"], answers: ["Where do you read books?"] },
                { jp: "彼女の家はどこですか。", en: "Where is her house?", blank: "_____ is her house?", answer: "Where", hints: ["Where", "house"], answers: ["Where is her house?"] }
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
            ],
            choiceExamples: [
                { jp: "私は2匹の猫を飼っています。", en: "I have two cats.", blank: "I have two _____.", answer: "cats", distractors: ["cat", "cates", "caties"], hints: ["two", "cats"] },
                { jp: "私は3つの箱を持っています。", en: "I have three boxes.", blank: "I have three _____.", answer: "boxes", distractors: ["box", "boxs", "boxies"], hints: ["three", "boxes"] },
                { jp: "私はたくさんの町が好きです。", en: "I like many cities.", blank: "I like many _____.", answer: "cities", distractors: ["city", "citys", "cityes"], hints: ["many", "cities"] },
                { jp: "机の上に2本の鉛筆があります。", en: "There are two pencils on the desk.", blank: "There _____ two pencils on the desk.", answer: "are", distractors: ["is", "am", "be"], hints: ["There", "pencils"] },
                { jp: "彼女は4つのかばんを持っています。", en: "She has four bags.", blank: "She has _____ bags.", answer: "four", distractors: ["a", "one", "an"], hints: ["four", "bags"] }
            ],
            meaningExamples: [
                { jp: "私は2台のバスを見ます。", en: "I see two buses.", blank: "I see two _____.", answer: "buses", hints: ["two", "buses"] },
                { jp: "彼らは5冊の本を持っています。", en: "They have five books.", blank: "They have five _____.", answer: "books", hints: ["five", "books"] },
                { jp: "公園にはたくさんの子どもがいます。", en: "There are many children in the park.", blank: "There are many _____ in the park.", answer: "children", hints: ["many", "children"] }
            ],
            fillExamples: [
                { jp: "私は2匹の犬を飼っています。", en: "I have two dogs.", blank: "I have two _____.", answer: "dogs", hints: ["two", "dogs"] },
                { jp: "トムは3つの時計を持っています。", en: "Tom has three watches.", blank: "Tom has three _____.", answer: "watches", hints: ["three", "watches"] },
                { jp: "私たちはたくさんの物語を読みます。", en: "We read many stories.", blank: "We read many _____.", answer: "stories", hints: ["many", "stories"] },
                { jp: "箱の中に2個のオレンジがあります。", en: "There are two oranges in the box.", blank: "There are two _____ in the box.", answer: "oranges", hints: ["two", "oranges"] },
                { jp: "教室には6人の生徒がいます。", en: "There are six students in the classroom.", blank: "There are _____ students in the classroom.", answer: "six", hints: ["six", "students"] }
            ],
            reorderExamples: [
                { jp: "私は3冊のノートを持っています。", en: "I have three notebooks.", blank: "I have three _____.", answer: "notebooks", hints: ["three", "notebooks"] },
                { jp: "彼らは2匹の犬が好きです。", en: "They like two dogs.", blank: "They like two _____.", answer: "dogs", hints: ["two", "dogs"] },
                { jp: "机の上に4冊の本があります。", en: "There are four books on the desk.", blank: "There are four _____ on the desk.", answer: "books", hints: ["four", "books"] },
                { jp: "私はたくさんの国を知っています。", en: "I know many countries.", blank: "I know many _____.", answer: "countries", hints: ["many", "countries"] },
                { jp: "その箱の中に5個のりんごがあります。", en: "There are five apples in the box.", blank: "There are five _____ in the box.", answer: "apples", hints: ["five", "apples"] }
            ],
            translationExamples: [
                { jp: "私は2台の自転車を持っています。", en: "I have two bikes.", blank: "I have two _____.", answer: "bikes", hints: ["two", "bikes"], answers: ["I have two bikes."] },
                { jp: "公園にはたくさんの少女がいます。", en: "There are many girls in the park.", blank: "There are many _____ in the park.", answer: "girls", hints: ["many", "girls"], answers: ["There are many girls in the park."] }
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
            ],
            choiceExamples: [
                { jp: "ドアを開けなさい。", en: "Open the door.", blank: "_____ the door.", answer: "Open", distractors: ["Opens", "Opening", "To open"], hints: ["Open", "door"] },
                { jp: "ここで走ってはいけません。", en: "Don't run here.", blank: "_____ run here.", answer: "Don't", distractors: ["Do", "Does", "Not"], hints: ["Don't", "run"] },
                { jp: "静かにしてください。", en: "Please be quiet.", blank: "Please _____ quiet.", answer: "be", distractors: ["is", "are", "being"], hints: ["Please", "quiet"] },
                { jp: "私の話を聞きなさい。", en: "Listen to me.", blank: "_____ to me.", answer: "Listen", distractors: ["Listens", "Listening", "To listen"], hints: ["Listen", "me"] },
                { jp: "その窓を閉めなさい。", en: "Close the window.", blank: "Close _____ window.", answer: "the", distractors: ["a", "an", "to"], hints: ["Close", "window"] }
            ],
            meaningExamples: [
                { jp: "手を洗いなさい。", en: "Wash your hands.", blank: "_____ your hands.", answer: "Wash", hints: ["Wash", "hands"] },
                { jp: "この本を読んではいけません。", en: "Don't read this book.", blank: "_____ read this book.", answer: "Don't", hints: ["Don't", "read"] },
                { jp: "どうぞここに座ってください。", en: "Please sit here.", blank: "Please _____ here.", answer: "sit", hints: ["Please", "sit"] }
            ],
            fillExamples: [
                { jp: "その箱を開けなさい。", en: "Open the box.", blank: "_____ the box.", answer: "Open", hints: ["Open", "box"] },
                { jp: "この水を飲んではいけません。", en: "Don't drink this water.", blank: "Don't _____ this water.", answer: "drink", hints: ["Don't", "drink"] },
                { jp: "英語で話してください。", en: "Please speak English.", blank: "Please _____ English.", answer: "speak", hints: ["Please", "English"] },
                { jp: "黒板を見なさい。", en: "Look at the board.", blank: "Look _____ the board.", answer: "at", hints: ["Look", "board"] },
                { jp: "遅れてはいけません。", en: "Don't be late.", blank: "Don't _____ late.", answer: "be", hints: ["Don't", "late"] }
            ],
            reorderExamples: [
                { jp: "早く起きなさい。", en: "Get up early.", blank: "_____ up early.", answer: "Get", hints: ["Get", "early"] },
                { jp: "ここで写真を撮ってはいけません。", en: "Don't take pictures here.", blank: "_____ take pictures here.", answer: "Don't", hints: ["Don't", "pictures"] },
                { jp: "この歌を歌ってください。", en: "Please sing this song.", blank: "Please _____ this song.", answer: "sing", hints: ["Please", "song"] },
                { jp: "私を手伝いなさい。", en: "Help me.", blank: "_____ me.", answer: "Help", hints: ["Help", "me"] },
                { jp: "教室を掃除しなさい。", en: "Clean the classroom.", blank: "_____ the classroom.", answer: "Clean", hints: ["Clean", "classroom"] }
            ],
            translationExamples: [
                { jp: "ここで待ってください。", en: "Please wait here.", blank: "Please _____ here.", answer: "wait", hints: ["Please", "wait"], answers: ["Please wait here."] },
                { jp: "このペンを使ってはいけません。", en: "Don't use this pen.", blank: "Don't _____ this pen.", answer: "use", hints: ["Don't", "use"], answers: ["Don't use this pen."] }
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
            ],
            choiceExamples: [
                { jp: "私は英語が好きです。", en: "I like English.", blank: "_____ like English.", answer: "I", distractors: ["my", "me", "mine"], hints: ["I", "like"] },
                { jp: "これは私の本です。", en: "This is my book.", blank: "This is _____ book.", answer: "my", distractors: ["I", "me", "mine"], hints: ["my", "book"] },
                { jp: "ケンは私を知っています。", en: "Ken knows me.", blank: "Ken knows _____.", answer: "me", distractors: ["I", "my", "mine"], hints: ["me", "knows"] },
                { jp: "このペンは私のものです。", en: "This pen is mine.", blank: "This pen is _____.", answer: "mine", distractors: ["I", "my", "me"], hints: ["mine", "pen"] },
                { jp: "彼女は彼の妹です。", en: "She is his sister.", blank: "She is _____ sister.", answer: "his", distractors: ["he", "him", "hers"], hints: ["his", "sister"] }
            ],
            meaningExamples: [
                { jp: "彼は私たちを手伝います。", en: "He helps us.", blank: "He helps _____.", answer: "us", hints: ["helps", "us"] },
                { jp: "これは彼女のかばんです。", en: "This is her bag.", blank: "This is _____ bag.", answer: "her", hints: ["her", "bag"] },
                { jp: "その犬は彼らのものです。", en: "The dog is theirs.", blank: "The dog is _____.", answer: "theirs", hints: ["dog", "theirs"] }
            ],
            fillExamples: [
                { jp: "これは私のノートです。", en: "This is my notebook.", blank: "This is _____ notebook.", answer: "my", hints: ["my", "notebook"] },
                { jp: "ユキは彼を知っています。", en: "Yuki knows him.", blank: "Yuki knows _____.", answer: "him", hints: ["knows", "him"] },
                { jp: "このかばんは私のものです。", en: "This bag is mine.", blank: "This bag is _____.", answer: "mine", hints: ["bag", "mine"] },
                { jp: "彼は彼女の兄です。", en: "He is her brother.", blank: "He is _____ brother.", answer: "her", hints: ["her", "brother"] },
                { jp: "私たちは彼らの友達です。", en: "We are their friends.", blank: "We are _____ friends.", answer: "their", hints: ["their", "friends"] }
            ],
            reorderExamples: [
                { jp: "私は音楽が好きです。", en: "I like music.", blank: "_____ like music.", answer: "I", hints: ["I", "music"] },
                { jp: "この自転車は私のものです。", en: "This bike is mine.", blank: "This bike is _____.", answer: "mine", hints: ["bike", "mine"] },
                { jp: "タクは私を手伝います。", en: "Taku helps me.", blank: "Taku helps _____.", answer: "me", hints: ["helps", "me"] },
                { jp: "あれは私たちの学校です。", en: "That is our school.", blank: "That is _____ school.", answer: "our", hints: ["our", "school"] },
                { jp: "この本は彼女のものです。", en: "This book is hers.", blank: "This book is _____.", answer: "hers", hints: ["book", "hers"] }
            ],
            translationExamples: [
                { jp: "このノートは彼のものです。", en: "This notebook is his.", blank: "This notebook is _____.", answer: "his", hints: ["notebook", "his"], answers: ["This notebook is his."] },
                { jp: "彼らは私たちを知っています。", en: "They know us.", blank: "They know _____.", answer: "us", hints: ["know", "us"], answers: ["They know us."] }
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
            ],
            choiceExamples: [
                { jp: "私はサッカーをしているところです。", en: "I am playing soccer.", blank: "I am _____ soccer.", answer: "playing", distractors: ["play", "plays", "played"], hints: ["am", "playing"] },
                { jp: "彼女は英語を勉強しているところです。", en: "She is studying English.", blank: "She _____ studying English.", answer: "is", distractors: ["am", "are", "do"], hints: ["is", "studying"] },
                { jp: "彼らは走っているところです。", en: "They are running.", blank: "They are _____.", answer: "running", distractors: ["run", "runs", "ran"], hints: ["are", "running"] },
                { jp: "ケンは本を読んでいるところです。", en: "Ken is reading a book.", blank: "Ken is reading _____ book.", answer: "a", distractors: ["an", "the", "are"], hints: ["reading", "book"] },
                { jp: "私たちは昼食を食べているところです。", en: "We are eating lunch.", blank: "We _____ eating lunch.", answer: "are", distractors: ["am", "is", "do"], hints: ["are", "eating"] }
            ],
            meaningExamples: [
                { jp: "私は夕食を作っているところです。", en: "I am making dinner.", blank: "I am _____ dinner.", answer: "making", hints: ["am", "making"] },
                { jp: "彼女は泳いでいるところです。", en: "She is swimming.", blank: "She _____ swimming.", answer: "is", hints: ["is", "swimming"] },
                { jp: "彼らは音楽を聞いているところです。", en: "They are listening to music.", blank: "They are listening _____ music.", answer: "to", hints: ["listening", "music"] }
            ],
            fillExamples: [
                { jp: "私は手紙を書いているところです。", en: "I am writing a letter.", blank: "I am _____ a letter.", answer: "writing", hints: ["am", "writing"] },
                { jp: "ユキはテレビを見ているところです。", en: "Yuki is watching TV.", blank: "Yuki _____ watching TV.", answer: "is", hints: ["is", "watching"] },
                { jp: "私たちは朝食を食べているところです。", en: "We are eating breakfast.", blank: "We are _____ breakfast.", answer: "eating", hints: ["are", "eating"] },
                { jp: "ケンは部屋を掃除しているところです。", en: "Ken is cleaning his room.", blank: "Ken is cleaning _____ room.", answer: "his", hints: ["cleaning", "room"] },
                { jp: "彼らは公園で遊んでいるところです。", en: "They are playing in the park.", blank: "They _____ playing in the park.", answer: "are", hints: ["are", "playing"] }
            ],
            reorderExamples: [
                { jp: "彼らは速く走っているところです。", en: "They are running fast.", blank: "They are _____ fast.", answer: "running", hints: ["are", "running"] },
                { jp: "彼女はピアノを弾いているところです。", en: "She is playing the piano.", blank: "She is _____ the piano.", answer: "playing", hints: ["is", "playing"] },
                { jp: "私たちは水を飲んでいるところです。", en: "We are drinking water.", blank: "We are _____ water.", answer: "drinking", hints: ["are", "drinking"] },
                { jp: "タクは絵を描いているところです。", en: "Taku is drawing a picture.", blank: "Taku _____ drawing a picture.", answer: "is", hints: ["is", "drawing"] },
                { jp: "私は英語を話しているところです。", en: "I am speaking English.", blank: "I am _____ English.", answer: "speaking", hints: ["am", "speaking"] }
            ],
            translationExamples: [
                { jp: "彼女は本を読んでいるところです。", en: "She is reading a book.", blank: "She is _____ a book.", answer: "reading", hints: ["is", "reading"], answers: ["She is reading a book."] },
                { jp: "私たちは夕食を作っているところです。", en: "We are cooking dinner.", blank: "We are _____ dinner.", answer: "cooking", hints: ["are", "cooking"], answers: ["We are cooking dinner."] }
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
            ],
            choiceExamples: [
                { jp: "私は夕食を作っているところです。", en: "I am making dinner.", blank: "I am _____ dinner.", answer: "making", distractors: ["makeing", "make", "makes"], hints: ["make", "making"] },
                { jp: "彼は走っているところです。", en: "He is running.", blank: "He is _____.", answer: "running", distractors: ["runing", "run", "runs"], hints: ["run", "running"] },
                { jp: "私たちは英語を勉強しているところです。", en: "We are studying English.", blank: "We are _____ English.", answer: "studying", distractors: ["studing", "study", "studies"], hints: ["study", "studying"] },
                { jp: "彼女は泳いでいるところです。", en: "She is swimming.", blank: "She _____ swimming.", answer: "is", distractors: ["am", "are", "do"], hints: ["is", "swimming"] },
                { jp: "私は手紙を書いているところです。", en: "I am writing a letter.", blank: "I am _____ a letter.", answer: "writing", distractors: ["writeing", "write", "writes"], hints: ["write", "writing"] }
            ],
            meaningExamples: [
                { jp: "ケンは絵を描いているところです。", en: "Ken is drawing a picture.", blank: "Ken is _____ a picture.", answer: "drawing", hints: ["draw", "drawing"] },
                { jp: "彼らは座っているところです。", en: "They are sitting.", blank: "They are _____.", answer: "sitting", hints: ["sit", "sitting"] },
                { jp: "私はバスを待っているところです。", en: "I am waiting for the bus.", blank: "I am _____ for the bus.", answer: "waiting", hints: ["wait", "waiting"] }
            ],
            fillExamples: [
                { jp: "彼女はケーキを作っているところです。", en: "She is making a cake.", blank: "She is _____ a cake.", answer: "making", hints: ["make", "making"] },
                { jp: "彼は速く走っているところです。", en: "He is running fast.", blank: "He is _____ fast.", answer: "running", hints: ["run", "running"] },
                { jp: "私たちは数学を勉強しているところです。", en: "We are studying math.", blank: "We are _____ math.", answer: "studying", hints: ["study", "studying"] },
                { jp: "ユキは水を飲んでいるところです。", en: "Yuki is drinking water.", blank: "Yuki is _____ water.", answer: "drinking", hints: ["drink", "drinking"] },
                { jp: "私は名前を書いているところです。", en: "I am writing my name.", blank: "I am _____ my name.", answer: "writing", hints: ["write", "writing"] }
            ],
            reorderExamples: [
                { jp: "彼女は歌っているところです。", en: "She is singing.", blank: "She is _____.", answer: "singing", hints: ["sing", "singing"] },
                { jp: "彼らは公園で泳いでいるところです。", en: "They are swimming in the park.", blank: "They are _____ in the park.", answer: "swimming", hints: ["swim", "swimming"] },
                { jp: "私は朝食を食べているところです。", en: "I am eating breakfast.", blank: "I am _____ breakfast.", answer: "eating", hints: ["eat", "eating"] },
                { jp: "ケンは部屋を掃除しているところです。", en: "Ken is cleaning his room.", blank: "Ken is _____ his room.", answer: "cleaning", hints: ["clean", "cleaning"] },
                { jp: "彼はノートを読んでいるところです。", en: "He is reading a notebook.", blank: "He is _____ a notebook.", answer: "reading", hints: ["read", "reading"] }
            ],
            translationExamples: [
                { jp: "私は手紙を書いているところです。", en: "I am writing an email.", blank: "I am _____ an email.", answer: "writing", hints: ["write", "writing"], answers: ["I am writing an email."] },
                { jp: "彼女は庭で走っているところです。", en: "She is running in the garden.", blank: "She is _____ in the garden.", answer: "running", hints: ["run", "running"], answers: ["She is running in the garden."] }
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
            ],
            choiceExamples: [
                { jp: "私はサッカーができます。", en: "I can play soccer.", blank: "I can _____ soccer.", answer: "play", distractors: ["plays", "playing", "played"], hints: ["can", "play"] },
                { jp: "彼女は泳ぐことができます。", en: "She can swim.", blank: "She _____ swim.", answer: "can", distractors: ["cans", "is", "does"], hints: ["can", "swim"] },
                { jp: "彼らは英語を話せます。", en: "They can speak English.", blank: "They can _____ English.", answer: "speak", distractors: ["speaks", "speaking", "spoke"], hints: ["can", "speak"] },
                { jp: "ケンは速く走れます。", en: "Ken can run fast.", blank: "Ken can run _____.", answer: "fast", distractors: ["fastly", "run", "runs"], hints: ["can", "fast"] },
                { jp: "私たちはピアノを弾けます。", en: "We can play the piano.", blank: "We can play _____ piano.", answer: "the", distractors: ["a", "an", "to"], hints: ["can", "piano"] }
            ],
            meaningExamples: [
                { jp: "私は英語を読むことができます。", en: "I can read English.", blank: "I can _____ English.", answer: "read", hints: ["can", "read"] },
                { jp: "ユキは夕食を作れます。", en: "Yuki can cook dinner.", blank: "Yuki _____ cook dinner.", answer: "can", hints: ["can", "cook"] },
                { jp: "彼らは高く跳べます。", en: "They can jump high.", blank: "They can jump _____.", answer: "high", hints: ["can", "high"] }
            ],
            fillExamples: [
                { jp: "彼はテニスができます。", en: "He can play tennis.", blank: "He can _____ tennis.", answer: "play", hints: ["can", "play"] },
                { jp: "私は日本語を話せます。", en: "I can speak Japanese.", blank: "I _____ speak Japanese.", answer: "can", hints: ["can", "speak"] },
                { jp: "私たちはここで昼食を食べられます。", en: "We can eat lunch here.", blank: "We can _____ lunch here.", answer: "eat", hints: ["can", "eat"] },
                { jp: "ケンは自転車に乗れます。", en: "Ken can ride a bike.", blank: "Ken can ride _____ bike.", answer: "a", hints: ["can", "bike"] },
                { jp: "彼女は歌を歌えます。", en: "She can sing a song.", blank: "She can _____ a song.", answer: "sing", hints: ["can", "sing"] }
            ],
            reorderExamples: [
                { jp: "彼らは速く泳げます。", en: "They can swim fast.", blank: "They can _____ fast.", answer: "swim", hints: ["can", "swim"] },
                { jp: "私はこの本を読めます。", en: "I can read this book.", blank: "I can _____ this book.", answer: "read", hints: ["can", "read"] },
                { jp: "私たちはギターを弾けます。", en: "We can play the guitar.", blank: "We can play _____ guitar.", answer: "the", hints: ["can", "guitar"] },
                { jp: "タクは英語を書けます。", en: "Taku can write English.", blank: "Taku _____ write English.", answer: "can", hints: ["can", "write"] },
                { jp: "彼女はこの箱を運べます。", en: "She can carry this box.", blank: "She can _____ this box.", answer: "carry", hints: ["can", "carry"] }
            ],
            translationExamples: [
                { jp: "ケンは速く歩けます。", en: "Ken can walk fast.", blank: "Ken can _____ fast.", answer: "walk", hints: ["can", "walk"], answers: ["Ken can walk fast."] },
                { jp: "私たちは英語を勉強できます。", en: "We can study English.", blank: "We can _____ English.", answer: "study", hints: ["can", "study"], answers: ["We can study English."] }
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
            ],
            choiceExamples: [
                { jp: "私は泳げません。", en: "I can't swim.", blank: "I _____ swim.", answer: "can't", distractors: ["don't", "isn't", "doesn't"], hints: ["can't", "swim"] },
                { jp: "あなたはテニスができますか。", en: "Can you play tennis?", blank: "_____ you play tennis?", answer: "Can", distractors: ["Do", "Are", "Does"], hints: ["Can", "play"] },
                { jp: "彼女は英語を話せません。", en: "She can't speak English.", blank: "She can't _____ English.", answer: "speak", distractors: ["speaks", "speaking", "spoke"], hints: ["can't", "speak"] },
                { jp: "彼らは速く走れますか。", en: "Can they run fast?", blank: "Can _____ run fast?", answer: "they", distractors: ["them", "their", "theirs"], hints: ["Can", "they"] },
                { jp: "ケンはピアノを弾けません。", en: "Ken can't play the piano.", blank: "Ken can't play _____ piano.", answer: "the", distractors: ["a", "an", "to"], hints: ["can't", "piano"] }
            ],
            meaningExamples: [
                { jp: "私はこの本を読めません。", en: "I can't read this book.", blank: "I can't _____ this book.", answer: "read", hints: ["can't", "read"] },
                { jp: "ユキは夕食を作れますか。", en: "Can Yuki cook dinner?", blank: "_____ Yuki cook dinner?", answer: "Can", hints: ["Can", "cook"] },
                { jp: "彼らは日本語を話せません。", en: "They can't speak Japanese.", blank: "They _____ speak Japanese.", answer: "can't", hints: ["can't", "speak"] }
            ],
            fillExamples: [
                { jp: "彼はテニスができません。", en: "He can't play tennis.", blank: "He _____ play tennis.", answer: "can't", hints: ["can't", "play"] },
                { jp: "あなたは英語を書けますか。", en: "Can you write English?", blank: "_____ you write English?", answer: "Can", hints: ["Can", "write"] },
                { jp: "彼らはここで昼食を食べられますか。", en: "Can they eat lunch here?", blank: "Can _____ eat lunch here?", answer: "they", hints: ["Can", "they"] },
                { jp: "ケンは自転車に乗れません。", en: "Ken can't ride a bike.", blank: "Ken can't ride _____ bike.", answer: "a", hints: ["can't", "bike"] },
                { jp: "彼女は歌を歌えません。", en: "She can't sing a song.", blank: "She can't _____ a song.", answer: "sing", hints: ["can't", "sing"] }
            ],
            reorderExamples: [
                { jp: "彼らは速く泳げますか。", en: "Can they swim fast?", blank: "Can they _____ fast?", answer: "swim", hints: ["Can", "swim"] },
                { jp: "私はこの手紙を読めません。", en: "I can't read this letter.", blank: "I can't _____ this letter.", answer: "read", hints: ["can't", "read"] },
                { jp: "私たちはギターを弾けますか。", en: "Can we play the guitar?", blank: "Can we play _____ guitar?", answer: "the", hints: ["Can", "guitar"] },
                { jp: "タクは英語を書けません。", en: "Taku can't write English.", blank: "Taku _____ write English.", answer: "can't", hints: ["can't", "write"] },
                { jp: "彼女はこの箱を運べますか。", en: "Can she carry this box?", blank: "Can she _____ this box?", answer: "carry", hints: ["Can", "carry"] }
            ],
            translationExamples: [
                { jp: "彼らは速く走れますか。", en: "Can they walk fast?", blank: "Can they _____ fast?", answer: "walk", hints: ["Can", "walk"], answers: ["Can they walk fast?"] },
                { jp: "ケンは英語を勉強できません。", en: "Ken can't study English.", blank: "Ken can't _____ English.", answer: "study", hints: ["can't", "study"], answers: ["Ken can't study English."] }
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
            ],
            choiceExamples: [
                { jp: "私はその本をケンにあげました。", en: "I gave the book to Ken.", blank: "I gave the book _____ Ken.", answer: "to", distractors: ["for", "with", "by"], hints: ["gave", "to"] },
                { jp: "彼女は写真を私たちに見せました。", en: "She showed the picture to us.", blank: "She _____ the picture to us.", answer: "showed", distractors: ["gave", "made", "bought"], hints: ["showed", "to"] },
                { jp: "父は手紙を私に送りました。", en: "My father sent a letter to me.", blank: "My father sent a letter to _____.", answer: "me", distractors: ["I", "my", "mine"], hints: ["sent", "to"] },
                { jp: "先生は英語を生徒たちに教えました。", en: "The teacher taught English to the students.", blank: "The teacher _____ English to the students.", answer: "taught", distractors: ["teach", "teaches", "teaching"], hints: ["taught", "to"] },
                { jp: "ユキはそのニュースを友達に話しました。", en: "Yuki told the news to her friends.", blank: "Yuki told the news _____ her friends.", answer: "to", distractors: ["for", "with", "by"], hints: ["told", "to"] }
            ],
            meaningExamples: [
                { jp: "ケンはその地図を私に見せました。", en: "Ken showed the map to me.", blank: "Ken showed the map _____ me.", answer: "to", hints: ["showed", "to"] },
                { jp: "母はメールを彼に送りました。", en: "My mother sent an email to him.", blank: "My mother sent an email to _____.", answer: "him", hints: ["sent", "him"] },
                { jp: "私たちは日本語を彼らに教えました。", en: "We taught Japanese to them.", blank: "We _____ Japanese to them.", answer: "taught", hints: ["taught", "to"] }
            ],
            fillExamples: [
                { jp: "私はこのペンを彼女にあげました。", en: "I gave this pen to her.", blank: "I gave this pen _____ her.", answer: "to", hints: ["gave", "to"] },
                { jp: "彼は写真を私に見せました。", en: "He showed a picture to me.", blank: "He _____ a picture to me.", answer: "showed", hints: ["showed", "picture"] },
                { jp: "ユキは手紙をケンに送りました。", en: "Yuki sent a letter to Ken.", blank: "Yuki sent a letter to _____.", answer: "Ken", hints: ["sent", "Ken"] },
                { jp: "先生は音楽を私たちに教えました。", en: "The teacher taught music to us.", blank: "The teacher taught music _____ us.", answer: "to", hints: ["taught", "to"] },
                { jp: "父はその話を彼らに話しました。", en: "My father told the story to them.", blank: "My father _____ the story to them.", answer: "told", hints: ["told", "story"] }
            ],
            reorderExamples: [
                { jp: "彼女はその本を私にくれました。", en: "She gave the book to me.", blank: "She gave the book _____ me.", answer: "to", hints: ["gave", "to"] },
                { jp: "ケンは写真を彼女に見せました。", en: "Ken showed a picture to her.", blank: "Ken showed a picture to _____.", answer: "her", hints: ["showed", "her"] },
                { jp: "私はカードを友達に送りました。", en: "I sent a card to my friend.", blank: "I _____ a card to my friend.", answer: "sent", hints: ["sent", "card"] },
                { jp: "彼らは英語をケンに教えました。", en: "They taught English to Ken.", blank: "They taught English _____ Ken.", answer: "to", hints: ["taught", "to"] },
                { jp: "母はその知らせを私たちに話しました。", en: "My mother told the news to us.", blank: "My mother told the news to _____.", answer: "us", hints: ["told", "us"] }
            ],
            translationExamples: [
                { jp: "私はその本をユキにあげました。", en: "I gave the book to Yuki.", blank: "I gave the book _____ Yuki.", answer: "to", hints: ["gave", "to"], answers: ["I gave the book to Yuki."] },
                { jp: "先生は英語を私たちに教えました。", en: "The teacher taught English to us.", blank: "The teacher _____ English to us.", answer: "taught", hints: ["taught", "English"], answers: ["The teacher taught English to us."] }
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
            ],
            choiceExamples: [
                { jp: "母は私にケーキを作りました。", en: "My mother made a cake for me.", blank: "My mother made a cake _____ me.", answer: "for", distractors: ["to", "with", "by"], hints: ["made", "for"] },
                { jp: "私は妹にバッグを買いました。", en: "I bought a bag for my sister.", blank: "I _____ a bag for my sister.", answer: "bought", distractors: ["gave", "sent", "taught"], hints: ["bought", "for"] },
                { jp: "彼は友達に昼食を作りました。", en: "He cooked lunch for his friends.", blank: "He cooked lunch for _____.", answer: "his friends", distractors: ["he", "lunch", "cooked"], hints: ["cooked", "friends"] },
                { jp: "ユキは私たちにカードを作りました。", en: "Yuki made a card for us.", blank: "Yuki _____ a card for us.", answer: "made", distractors: ["make", "makes", "making"], hints: ["made", "card"] },
                { jp: "父は私に新しい机を買いました。", en: "My father bought a new desk for me.", blank: "My father bought a new desk _____ me.", answer: "for", distractors: ["to", "with", "by"], hints: ["bought", "for"] }
            ],
            meaningExamples: [
                { jp: "私はケンに昼食を作りました。", en: "I cooked lunch for Ken.", blank: "I cooked lunch _____ Ken.", answer: "for", hints: ["cooked", "for"] },
                { jp: "母は私たちに新しい本を買いました。", en: "My mother bought a new book for us.", blank: "My mother bought a new book for _____.", answer: "us", hints: ["bought", "us"] },
                { jp: "彼女は弟にカードを作りました。", en: "She made a card for her brother.", blank: "She _____ a card for her brother.", answer: "made", hints: ["made", "card"] }
            ],
            fillExamples: [
                { jp: "父は私に朝食を作りました。", en: "My father made breakfast for me.", blank: "My father made breakfast _____ me.", answer: "for", hints: ["made", "for"] },
                { jp: "私は友達にノートを買いました。", en: "I bought a notebook for my friend.", blank: "I _____ a notebook for my friend.", answer: "bought", hints: ["bought", "notebook"] },
                { jp: "ユキは家族に夕食を作りました。", en: "Yuki cooked dinner for her family.", blank: "Yuki cooked dinner for _____.", answer: "her family", hints: ["cooked", "family"] },
                { jp: "彼らは先生に花を買いました。", en: "They bought flowers for their teacher.", blank: "They bought flowers _____ their teacher.", answer: "for", hints: ["bought", "for"] },
                { jp: "母は妹にかばんを作りました。", en: "My mother made a bag for my sister.", blank: "My mother _____ a bag for my sister.", answer: "made", hints: ["made", "bag"] }
            ],
            reorderExamples: [
                { jp: "私は父にお茶を入れました。", en: "I made tea for my father.", blank: "I made tea _____ my father.", answer: "for", hints: ["made", "tea"] },
                { jp: "彼は母にペンを買いました。", en: "He bought a pen for his mother.", blank: "He bought a pen for _____.", answer: "his mother", hints: ["bought", "mother"] },
                { jp: "私たちは子どもたちに昼食を作りました。", en: "We cooked lunch for the children.", blank: "We _____ lunch for the children.", answer: "cooked", hints: ["cooked", "lunch"] },
                { jp: "ケンは友達にカードを作りました。", en: "Ken made a card for his friend.", blank: "Ken made a card _____ his friend.", answer: "for", hints: ["made", "card"] },
                { jp: "彼女は私に新しいペンを買いました。", en: "She bought a new pen for me.", blank: "She bought a new pen for _____.", answer: "me", hints: ["bought", "me"] }
            ],
            translationExamples: [
                { jp: "母は私に夕食を作りました。", en: "My mother cooked dinner for me.", blank: "My mother cooked dinner _____ me.", answer: "for", hints: ["cooked", "for"], answers: ["My mother cooked dinner for me."] },
                { jp: "私は妹に新しい本を買いました。", en: "I bought a new book for my sister.", blank: "I _____ a new book for my sister.", answer: "bought", hints: ["bought", "book"], answers: ["I bought a new book for my sister."] }
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
            ],
            choiceExamples: [
                { jp: "私は京都へ行きたいです。", en: "I want to go to Kyoto.", blank: "I want _____ go to Kyoto.", answer: "to", distractors: ["going", "went", "goes"], hints: ["want", "to"] },
                { jp: "彼女は医者になることを望んでいます。", en: "She hopes to be a doctor.", blank: "She _____ to be a doctor.", answer: "hopes", distractors: ["hope", "hoping", "hoped"], hints: ["hopes", "to"] },
                { jp: "私たちは明日出発することを計画しています。", en: "We plan to leave tomorrow.", blank: "We plan to _____ tomorrow.", answer: "leave", distractors: ["leaves", "leaving", "left"], hints: ["plan", "leave"] },
                { jp: "ケンは新しい本を買うことに決めました。", en: "Ken decided to buy a new book.", blank: "Ken _____ to buy a new book.", answer: "decided", distractors: ["decide", "decides", "deciding"], hints: ["decided", "to"] },
                { jp: "彼らは英語を学ぶ必要があります。", en: "They need to learn English.", blank: "They need _____ learn English.", answer: "to", distractors: ["learning", "learned", "learns"], hints: ["need", "to"] }
            ],
            meaningExamples: [
                { jp: "私は水を飲みたいです。", en: "I want to drink water.", blank: "I want to _____ water.", answer: "drink", hints: ["want", "drink"] },
                { jp: "彼は試合に勝つことを望んでいます。", en: "He hopes to win the game.", blank: "He _____ to win the game.", answer: "hopes", hints: ["hopes", "win"] },
                { jp: "私たちは公園へ行くことに決めました。", en: "We decided to go to the park.", blank: "We decided _____ go to the park.", answer: "to", hints: ["decided", "to"] }
            ],
            fillExamples: [
                { jp: "ユキは英語を勉強したいです。", en: "Yuki wants to study English.", blank: "Yuki wants _____ study English.", answer: "to", hints: ["wants", "study"] },
                { jp: "私は先生になることを望んでいます。", en: "I hope to be a teacher.", blank: "I hope to _____ a teacher.", answer: "be", hints: ["hope", "be"] },
                { jp: "彼らは明日練習することを計画しています。", en: "They plan to practice tomorrow.", blank: "They _____ to practice tomorrow.", answer: "plan", hints: ["plan", "practice"] },
                { jp: "彼女はその歌を歌うことに決めました。", en: "She decided to sing the song.", blank: "She decided to _____ the song.", answer: "sing", hints: ["decided", "sing"] },
                { jp: "ケンは新しい単語を学ぶ必要があります。", en: "Ken needs to learn new words.", blank: "Ken needs _____ learn new words.", answer: "to", hints: ["needs", "learn"] }
            ],
            reorderExamples: [
                { jp: "私はこの本を読みたいです。", en: "I want to read this book.", blank: "I want _____ read this book.", answer: "to", hints: ["want", "read"] },
                { jp: "彼女は早く家に帰ることを望んでいます。", en: "She hopes to go home early.", blank: "She hopes to _____ home early.", answer: "go", hints: ["hopes", "go"] },
                { jp: "私たちは日曜日に会うことを計画しています。", en: "We plan to meet on Sunday.", blank: "We _____ to meet on Sunday.", answer: "plan", hints: ["plan", "meet"] },
                { jp: "タクは手紙を書くことに決めました。", en: "Taku decided to write a letter.", blank: "Taku decided to _____ a letter.", answer: "write", hints: ["decided", "write"] },
                { jp: "彼らは早く始める必要があります。", en: "They need to start early.", blank: "They need _____ start early.", answer: "to", hints: ["need", "start"] }
            ],
            translationExamples: [
                { jp: "私は英語を話したいです。", en: "I want to speak English.", blank: "I want _____ speak English.", answer: "to", hints: ["want", "speak"], answers: ["I want to speak English."] },
                { jp: "彼女は新しい本を買うことに決めました。", en: "She decided to buy a new book.", blank: "She decided to _____ a new book.", answer: "buy", hints: ["decided", "buy"], answers: ["She decided to buy a new book."] }
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
            ],
            choiceExamples: [
                { jp: "私は明日出かけないでしょう。", en: "I won't go out tomorrow.", blank: "I _____ go out tomorrow.", answer: "won't", distractors: ["don't", "didn't", "aren't"], hints: ["won't", "go"] },
                { jp: "あなたは私を手伝ってくれますか。", en: "Will you help me?", blank: "_____ you help me?", answer: "Will", distractors: ["Do", "Are", "Did"], hints: ["Will", "help"] },
                { jp: "彼女は今夜テレビを見ないでしょう。", en: "She won't watch TV tonight.", blank: "She won't _____ TV tonight.", answer: "watch", distractors: ["watches", "watching", "watched"], hints: ["won't", "watch"] },
                { jp: "彼らは試合に勝つでしょうか。", en: "Will they win the game?", blank: "Will _____ win the game?", answer: "they", distractors: ["them", "their", "theirs"], hints: ["Will", "they"] },
                { jp: "ケンは明日ここに来ないでしょう。", en: "Ken won't come here tomorrow.", blank: "Ken _____ come here tomorrow.", answer: "won't", distractors: ["doesn't", "isn't", "didn't"], hints: ["won't", "come"] }
            ],
            meaningExamples: [
                { jp: "私たちは日曜日に学校へ行かないでしょう。", en: "We won't go to school on Sunday.", blank: "We _____ go to school on Sunday.", answer: "won't", hints: ["won't", "Sunday"] },
                { jp: "彼は明日早く起きるでしょうか。", en: "Will he get up early tomorrow?", blank: "Will he _____ up early tomorrow?", answer: "get", hints: ["Will", "get"] },
                { jp: "あなたたちは今夜英語を勉強するでしょうか。", en: "Will you study English tonight?", blank: "_____ you study English tonight?", answer: "Will", hints: ["Will", "study"] }
            ],
            fillExamples: [
                { jp: "私はこの本を読まないでしょう。", en: "I won't read this book.", blank: "I won't _____ this book.", answer: "read", hints: ["won't", "read"] },
                { jp: "ユキは明日忙しくないでしょう。", en: "Yuki won't be busy tomorrow.", blank: "Yuki won't _____ busy tomorrow.", answer: "be", hints: ["won't", "be"] },
                { jp: "彼らはここで昼食を食べるでしょうか。", en: "Will they have lunch here?", blank: "Will _____ have lunch here?", answer: "they", hints: ["Will", "they"] },
                { jp: "あなたは明日来てくれますか。", en: "Will you come tomorrow?", blank: "_____ you come tomorrow?", answer: "Will", hints: ["Will", "come"] },
                { jp: "ケンはそのかばんを使わないでしょう。", en: "Ken won't use the bag.", blank: "Ken _____ use the bag.", answer: "won't", hints: ["won't", "use"] }
            ],
            reorderExamples: [
                { jp: "私たちはその映画を見ないでしょう。", en: "We won't watch the movie.", blank: "We _____ watch the movie.", answer: "won't", hints: ["won't", "movie"] },
                { jp: "彼女はこの歌を歌うでしょうか。", en: "Will she sing this song?", blank: "Will she _____ this song?", answer: "sing", hints: ["Will", "song"] },
                { jp: "彼らは明日手伝ってくれるでしょうか。", en: "Will they help tomorrow?", blank: "Will _____ help tomorrow?", answer: "they", hints: ["Will", "they"] },
                { jp: "私は今夜テレビを見ないでしょう。", en: "I won't watch TV tonight.", blank: "I won't _____ TV tonight.", answer: "watch", hints: ["won't", "TV"] },
                { jp: "あなたは駅へ行くでしょうか。", en: "Will you go to the station?", blank: "_____ you go to the station?", answer: "Will", hints: ["Will", "station"] }
            ],
            translationExamples: [
                { jp: "私は明日ここに来ないでしょう。", en: "I won't come here tomorrow.", blank: "I _____ come here tomorrow.", answer: "won't", hints: ["won't", "come"], answers: ["I won't come here tomorrow."] },
                { jp: "彼らはこの部屋を掃除するでしょうか。", en: "Will they clean this room?", blank: "Will they _____ this room?", answer: "clean", hints: ["Will", "clean"], answers: ["Will they clean this room?"] }
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
            ],
            choiceExamples: [
                { jp: "あなたはここで走ってはいけません。", en: "You must not run here.", blank: "You must _____ run here.", answer: "not", distractors: ["don't", "doesn't", "can't"], hints: ["must", "not"] },
                { jp: "私は今行かなければなりませんか。", en: "Must I go now?", blank: "_____ I go now?", answer: "Must", distractors: ["Do", "Am", "Did"], hints: ["Must", "go"] },
                { jp: "彼らはそのドアを開けてはいけません。", en: "They must not open the door.", blank: "They must not _____ the door.", answer: "open", distractors: ["opens", "opening", "opened"], hints: ["must", "open"] },
                { jp: "私たちはこの本を読まなければなりませんか。", en: "Must we read this book?", blank: "Must _____ read this book?", answer: "we", distractors: ["us", "our", "ours"], hints: ["Must", "we"] },
                { jp: "ケンはここで食べてはいけません。", en: "Ken must not eat here.", blank: "Ken must _____ eat here.", answer: "not", distractors: ["no", "don't", "doesn't"], hints: ["must", "not"] }
            ],
            meaningExamples: [
                { jp: "あなたはこの水を飲んではいけません。", en: "You must not drink this water.", blank: "You must not _____ this water.", answer: "drink", hints: ["must", "drink"] },
                { jp: "彼女は今宿題をしなければなりませんか。", en: "Must she do her homework now?", blank: "_____ she do her homework now?", answer: "Must", hints: ["Must", "homework"] },
                { jp: "彼らはこの部屋を使ってはいけません。", en: "They must not use this room.", blank: "They must _____ use this room.", answer: "not", hints: ["must", "not"] }
            ],
            fillExamples: [
                { jp: "私は遅れてはいけません。", en: "I must not be late.", blank: "I must not _____ late.", answer: "be", hints: ["must", "be"] },
                { jp: "あなたたちはここで待たなければなりませんか。", en: "Must you wait here?", blank: "_____ you wait here?", answer: "Must", hints: ["Must", "wait"] },
                { jp: "ケンはその箱を開けてはいけません。", en: "Ken must not open the box.", blank: "Ken must _____ open the box.", answer: "not", hints: ["must", "box"] },
                { jp: "私たちは早く出発しなければなりませんか。", en: "Must we leave early?", blank: "Must _____ leave early?", answer: "we", hints: ["Must", "we"] },
                { jp: "彼女はここで写真を撮ってはいけません。", en: "She must not take pictures here.", blank: "She must not _____ pictures here.", answer: "take", hints: ["must", "take"] }
            ],
            reorderExamples: [
                { jp: "あなたはこのペンを使ってはいけません。", en: "You must not use this pen.", blank: "You must _____ use this pen.", answer: "not", hints: ["must", "pen"] },
                { jp: "彼らは今帰らなければなりませんか。", en: "Must they go home now?", blank: "_____ they go home now?", answer: "Must", hints: ["Must", "home"] },
                { jp: "私はこの本を読んではいけません。", en: "I must not read this book.", blank: "I must not _____ this book.", answer: "read", hints: ["must", "read"] },
                { jp: "彼は部屋を掃除しなければなりませんか。", en: "Must he clean the room?", blank: "Must _____ clean the room?", answer: "he", hints: ["Must", "he"] },
                { jp: "私たちはここで走ってはいけません。", en: "We must not run here.", blank: "We must not _____ here.", answer: "run", hints: ["must", "run"] }
            ],
            translationExamples: [
                { jp: "あなたはこのドアを開けてはいけません。", en: "You must not open this door.", blank: "You must _____ open this door.", answer: "not", hints: ["must", "not"], answers: ["You must not open this door."] },
                { jp: "私たちは今出発しなければなりませんか。", en: "Must we leave now?", blank: "Must we _____ now?", answer: "leave", hints: ["Must", "leave"], answers: ["Must we leave now?"] }
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
            ],
            choiceExamples: [
                { jp: "あなたはこのペンを使ってもよいです。", en: "You may use this pen.", blank: "You _____ use this pen.", answer: "may", distractors: ["are", "do", "does"], hints: ["may", "use"] },
                { jp: "彼は遅れるかもしれません。", en: "He may be late.", blank: "He may _____ late.", answer: "be", distractors: ["is", "are", "to be"], hints: ["may", "be"] },
                { jp: "私たちはここで昼食を食べてもよいです。", en: "We may eat lunch here.", blank: "We may _____ lunch here.", answer: "eat", distractors: ["eats", "eating", "ate"], hints: ["may", "eat"] },
                { jp: "彼女は今日来るかもしれません。", en: "She may come today.", blank: "She _____ come today.", answer: "may", distractors: ["is", "does", "has"], hints: ["may", "come"] },
                { jp: "彼らは教室に入ってもよいです。", en: "They may enter the classroom.", blank: "They may _____ the classroom.", answer: "enter", distractors: ["enters", "entering", "entered"], hints: ["may", "enter"] }
            ],
            meaningExamples: [
                { jp: "あなたはこの本を読んでもよいです。", en: "You may read this book.", blank: "You may _____ this book.", answer: "read", hints: ["may", "read"] },
                { jp: "明日は雨が降るかもしれません。", en: "It may rain tomorrow.", blank: "It may _____ tomorrow.", answer: "rain", hints: ["may", "rain"] },
                { jp: "ここで待ってもよいですか。", en: "May I wait here?", blank: "_____ I wait here?", answer: "May", hints: ["May", "wait"] }
            ],
            fillExamples: [
                { jp: "ケンはその答えを知っているかもしれません。", en: "Ken may know the answer.", blank: "Ken may _____ the answer.", answer: "know", hints: ["may", "know"] },
                { jp: "あなたは窓を開けてもよいです。", en: "You may open the window.", blank: "You may _____ the window.", answer: "open", hints: ["may", "open"] },
                { jp: "彼らは明日早く来るかもしれません。", en: "They may come early tomorrow.", blank: "They _____ come early tomorrow.", answer: "may", hints: ["may", "come"] },
                { jp: "私はここで座ってもよいですか。", en: "May I sit here?", blank: "_____ I sit here?", answer: "May", hints: ["May", "sit"] },
                { jp: "彼女は忙しいかもしれません。", en: "She may be busy.", blank: "She may _____ busy.", answer: "be", hints: ["may", "be"] }
            ],
            reorderExamples: [
                { jp: "私たちはこの机を使ってもよいです。", en: "We may use this desk.", blank: "We may _____ this desk.", answer: "use", hints: ["may", "use"] },
                { jp: "その電車は遅れるかもしれません。", en: "The train may be late.", blank: "The train may _____ late.", answer: "be", hints: ["may", "late"] },
                { jp: "ここで水を飲んでもよいですか。", en: "May I drink water here?", blank: "_____ I drink water here?", answer: "May", hints: ["May", "drink"] },
                { jp: "ユキは今日学校へ行くかもしれません。", en: "Yuki may go to school today.", blank: "Yuki may _____ to school today.", answer: "go", hints: ["may", "go"] },
                { jp: "あなたはこの写真を見てもよいです。", en: "You may see this picture.", blank: "You may _____ this picture.", answer: "see", hints: ["may", "see"] }
            ],
            translationExamples: [
                { jp: "あなたはこの部屋を使ってもよいです。", en: "You may use this room.", blank: "You may _____ this room.", answer: "use", hints: ["may", "use"], answers: ["You may use this room."] },
                { jp: "彼は今家にいるかもしれません。", en: "He may be at home now.", blank: "He may _____ at home now.", answer: "be", hints: ["may", "be"], answers: ["He may be at home now."] }
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
            ],
            choiceExamples: [
                { jp: "私は暇なとき本を読みます。", en: "I read books when I am free.", blank: "I read books _____ I am free.", answer: "when", distractors: ["because", "if", "that"], hints: ["when", "free"] },
                { jp: "彼女は家に帰るとき音楽を聞きます。", en: "She listens to music when she goes home.", blank: "She _____ to music when she goes home.", answer: "listens", distractors: ["listen", "listening", "listened"], hints: ["when", "listens"] },
                { jp: "私たちは雨が降るとき家にいます。", en: "We stay home when it rains.", blank: "We stay home when it _____.", answer: "rains", distractors: ["rain", "raining", "rained"], hints: ["when", "rains"] },
                { jp: "ケンは勉強するとき辞書を使います。", en: "Ken uses a dictionary when he studies.", blank: "Ken _____ a dictionary when he studies.", answer: "uses", distractors: ["use", "using", "used"], hints: ["when", "uses"] },
                { jp: "私は母が忙しいとき手伝います。", en: "I help my mother when she is busy.", blank: "I help my mother when she _____ busy.", answer: "is", distractors: ["are", "am", "be"], hints: ["when", "busy"] }
            ],
            meaningExamples: [
                { jp: "私は眠いとき早く寝ます。", en: "I go to bed early when I am sleepy.", blank: "I go to bed early _____ I am sleepy.", answer: "when", hints: ["when", "sleepy"] },
                { jp: "彼は昼食を食べるとき水を飲みます。", en: "He drinks water when he has lunch.", blank: "He _____ water when he has lunch.", answer: "drinks", hints: ["when", "drinks"] },
                { jp: "彼らは時間があるときサッカーをします。", en: "They play soccer when they have time.", blank: "They play soccer when they _____ time.", answer: "have", hints: ["when", "time"] }
            ],
            fillExamples: [
                { jp: "私は寒いとき窓を閉めます。", en: "I close the window when it is cold.", blank: "I close the window _____ it is cold.", answer: "when", hints: ["when", "cold"] },
                { jp: "ユキは幸せなとき歌を歌います。", en: "Yuki sings a song when she is happy.", blank: "Yuki _____ a song when she is happy.", answer: "sings", hints: ["when", "sings"] },
                { jp: "私たちは忙しいとき母を手伝います。", en: "We help our mother when she is busy.", blank: "We help our mother when she _____ busy.", answer: "is", hints: ["when", "busy"] },
                { jp: "彼は英語を勉強するときノートを使います。", en: "He uses a notebook when he studies English.", blank: "He uses a notebook when he _____ English.", answer: "studies", hints: ["when", "studies"] },
                { jp: "あなたは家に帰るとき何をしますか。", en: "What do you do when you go home?", blank: "What do you do when you _____ home?", answer: "go", hints: ["when", "home"] }
            ],
            reorderExamples: [
                { jp: "私は日曜日のとき公園へ行きます。", en: "I go to the park when it is Sunday.", blank: "I go to the park _____ it is Sunday.", answer: "when", hints: ["when", "Sunday"] },
                { jp: "彼女は朝食を食べるとき牛乳を飲みます。", en: "She drinks milk when she has breakfast.", blank: "She drinks milk when she _____ breakfast.", answer: "has", hints: ["when", "breakfast"] },
                { jp: "彼らは学校へ行くときバスを使います。", en: "They use the bus when they go to school.", blank: "They _____ the bus when they go to school.", answer: "use", hints: ["when", "bus"] },
                { jp: "ケンは雨のとき家にいます。", en: "Ken stays home when it rains.", blank: "Ken _____ home when it rains.", answer: "stays", hints: ["when", "rains"] },
                { jp: "私は時間があるとき絵を描きます。", en: "I draw pictures when I have time.", blank: "I draw pictures when I _____ time.", answer: "have", hints: ["when", "time"] }
            ],
            translationExamples: [
                { jp: "私は疲れているとき音楽を聞きます。", en: "I listen to music when I am tired.", blank: "I listen to music _____ I am tired.", answer: "when", hints: ["when", "tired"], answers: ["I listen to music when I am tired."] },
                { jp: "彼女は家にいるとき本を読みます。", en: "She reads books when she is at home.", blank: "She reads books when she _____ at home.", answer: "is", hints: ["when", "home"], answers: ["She reads books when she is at home."] }
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
            ],
            choiceExamples: [
                { jp: "机の上に本があります。", en: "There is a book on the desk.", blank: "There _____ a book on the desk.", answer: "is", distractors: ["are", "am", "be"], hints: ["There", "book"] },
                { jp: "公園にたくさんの子どもたちがいます。", en: "There are many children in the park.", blank: "There _____ many children in the park.", answer: "are", distractors: ["is", "am", "be"], hints: ["There", "children"] },
                { jp: "私の町には図書館があります。", en: "There is a library in my town.", blank: "There is _____ library in my town.", answer: "a", distractors: ["an", "the", "some"], hints: ["There", "library"] },
                { jp: "箱の中に3つのりんごがあります。", en: "There are three apples in the box.", blank: "There are three _____ in the box.", answer: "apples", distractors: ["apple", "appleses", "applees"], hints: ["three", "apples"] },
                { jp: "教室には生徒がいません。", en: "There are no students in the classroom.", blank: "There are _____ students in the classroom.", answer: "no", distractors: ["not", "don't", "isn't"], hints: ["There", "no"] }
            ],
            meaningExamples: [
                { jp: "テーブルの上にコップがあります。", en: "There is a cup on the table.", blank: "There _____ a cup on the table.", answer: "is", hints: ["There", "cup"] },
                { jp: "庭に2匹の犬がいます。", en: "There are two dogs in the garden.", blank: "There _____ two dogs in the garden.", answer: "are", hints: ["There", "dogs"] },
                { jp: "駅の近くに公園があります。", en: "There is a park near the station.", blank: "There is a park _____ the station.", answer: "near", hints: ["There", "station"] }
            ],
            fillExamples: [
                { jp: "壁に時計があります。", en: "There is a clock on the wall.", blank: "There _____ a clock on the wall.", answer: "is", hints: ["There", "clock"] },
                { jp: "教室に5人の生徒がいます。", en: "There are five students in the classroom.", blank: "There _____ five students in the classroom.", answer: "are", hints: ["There", "students"] },
                { jp: "かばんの中に英語の本があります。", en: "There is an English book in the bag.", blank: "There is _____ English book in the bag.", answer: "an", hints: ["There", "English"] },
                { jp: "机の下に猫がいます。", en: "There is a cat under the desk.", blank: "There is a cat _____ the desk.", answer: "under", hints: ["There", "desk"] },
                { jp: "箱の中に鉛筆はありません。", en: "There are no pencils in the box.", blank: "There are no _____ in the box.", answer: "pencils", hints: ["There", "pencils"] }
            ],
            reorderExamples: [
                { jp: "かごの中に2個のオレンジがあります。", en: "There are two oranges in the basket.", blank: "There are two _____ in the basket.", answer: "oranges", hints: ["There", "oranges"] },
                { jp: "私たちの学校には音楽室があります。", en: "There is a music room in our school.", blank: "There is a music room _____ our school.", answer: "in", hints: ["There", "school"] },
                { jp: "公園には多くの木があります。", en: "There are many trees in the park.", blank: "There are many _____ in the park.", answer: "trees", hints: ["There", "trees"] },
                { jp: "ドアの近くに女の子がいます。", en: "There is a girl by the door.", blank: "There is a girl _____ the door.", answer: "by", hints: ["There", "door"] },
                { jp: "テーブルの上に水はありません。", en: "There is no water on the table.", blank: "There is _____ water on the table.", answer: "no", hints: ["There", "water"] }
            ],
            translationExamples: [
                { jp: "部屋に3つのいすがあります。", en: "There are three chairs in the room.", blank: "There are three _____ in the room.", answer: "chairs", hints: ["There", "chairs"], answers: ["There are three chairs in the room."] },
                { jp: "学校の近くに図書館があります。", en: "There is a library near the school.", blank: "There is a library _____ the school.", answer: "near", hints: ["There", "library"], answers: ["There is a library near the school."] }
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
            ],
            choiceExamples: [
                { jp: "私は忙しいのでテレビを見ません。", en: "I don't watch TV because I am busy.", blank: "I don't watch TV _____ I am busy.", answer: "because", distractors: ["when", "if", "that"], hints: ["because", "busy"] },
                { jp: "彼女は病気なので学校を休みました。", en: "She was absent because she was sick.", blank: "She was absent because she _____ sick.", answer: "was", distractors: ["is", "are", "be"], hints: ["because", "sick"] },
                { jp: "私たちは雨だったので家にいました。", en: "We stayed home because it was rainy.", blank: "We _____ home because it was rainy.", answer: "stayed", distractors: ["stay", "stays", "staying"], hints: ["because", "stayed"] },
                { jp: "ケンは英語が好きなので毎日勉強します。", en: "Ken studies every day because he likes English.", blank: "Ken studies every day because he _____ English.", answer: "likes", distractors: ["like", "liking", "liked"], hints: ["because", "likes"] },
                { jp: "私は寒かったので窓を閉めました。", en: "I closed the window because it was cold.", blank: "I closed the window because it _____ cold.", answer: "was", distractors: ["is", "are", "be"], hints: ["because", "cold"] }
            ],
            meaningExamples: [
                { jp: "私は疲れていたので早く寝ました。", en: "I went to bed early because I was tired.", blank: "I went to bed early _____ I was tired.", answer: "because", hints: ["because", "tired"] },
                { jp: "彼はお腹がすいていたので昼食を食べました。", en: "He ate lunch because he was hungry.", blank: "He _____ lunch because he was hungry.", answer: "ate", hints: ["because", "lunch"] },
                { jp: "彼らは音楽が好きなので歌います。", en: "They sing because they like music.", blank: "They sing because they _____ music.", answer: "like", hints: ["because", "music"] }
            ],
            fillExamples: [
                { jp: "私は雨だったので走りませんでした。", en: "I didn't run because it was rainy.", blank: "I didn't run _____ it was rainy.", answer: "because", hints: ["because", "rainy"] },
                { jp: "ユキは忙しいので母を手伝えません。", en: "Yuki can't help her mother because she is busy.", blank: "Yuki can't help her mother because she _____ busy.", answer: "is", hints: ["because", "busy"] },
                { jp: "私たちは寒かったので家にいました。", en: "We stayed home because it was cold.", blank: "We _____ home because it was cold.", answer: "stayed", hints: ["because", "cold"] },
                { jp: "彼はその本が好きなので読みます。", en: "He reads the book because he likes it.", blank: "He reads the book because he _____ it.", answer: "likes", hints: ["because", "likes"] },
                { jp: "私は眠かったので早く起きませんでした。", en: "I didn't get up early because I was sleepy.", blank: "I didn't get up early because I _____ sleepy.", answer: "was", hints: ["because", "sleepy"] }
            ],
            reorderExamples: [
                { jp: "彼女は幸せなのでほほえみます。", en: "She smiles because she is happy.", blank: "She smiles _____ she is happy.", answer: "because", hints: ["because", "happy"] },
                { jp: "私は英語が好きなので毎日勉強します。", en: "I study every day because I like English.", blank: "I study every day because I _____ English.", answer: "like", hints: ["because", "English"] },
                { jp: "彼らは暑かったので水を飲みました。", en: "They drank water because it was hot.", blank: "They _____ water because it was hot.", answer: "drank", hints: ["because", "water"] },
                { jp: "ケンは病気なので学校へ行きません。", en: "Ken doesn't go to school because he is sick.", blank: "Ken doesn't go to school because he _____ sick.", answer: "is", hints: ["because", "sick"] },
                { jp: "私たちは天気がよかったので公園へ行きました。", en: "We went to the park because it was sunny.", blank: "We went to the park because it _____ sunny.", answer: "was", hints: ["because", "sunny"] }
            ],
            translationExamples: [
                { jp: "私は忙しいのでテレビを見ません。", en: "I don't watch TV because I am busy.", blank: "I don't watch TV _____ I am busy.", answer: "because", hints: ["because", "busy"], answers: ["I don't watch TV because I am busy."] },
                { jp: "彼女は本が好きなので図書館へ行きます。", en: "She goes to the library because she likes books.", blank: "She goes to the library because she _____ books.", answer: "likes", hints: ["because", "books"], answers: ["She goes to the library because she likes books."] }
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
            ],
            choiceExamples: [
                { jp: "もし明日晴れなら、私たちは公園へ行きます。", en: "If it is sunny tomorrow, we will go to the park.", blank: "_____ it is sunny tomorrow, we will go to the park.", answer: "If", distractors: ["Because", "When", "That"], hints: ["If", "sunny"] },
                { jp: "もし時間があれば、私はあなたを手伝います。", en: "If I have time, I will help you.", blank: "If I _____ time, I will help you.", answer: "have", distractors: ["has", "having", "had"], hints: ["If", "time"] },
                { jp: "もし雨が降れば、私たちは家にいます。", en: "If it rains, we will stay home.", blank: "If it _____, we will stay home.", answer: "rains", distractors: ["rain", "raining", "rained"], hints: ["If", "rains"] },
                { jp: "もし彼女が来たら、私はうれしいです。", en: "If she comes, I will be happy.", blank: "If she comes, I _____ be happy.", answer: "will", distractors: ["am", "do", "was"], hints: ["If", "will"] },
                { jp: "もしケンが忙しければ、私は待ちます。", en: "If Ken is busy, I will wait.", blank: "If Ken _____ busy, I will wait.", answer: "is", distractors: ["are", "am", "be"], hints: ["If", "busy"] }
            ],
            meaningExamples: [
                { jp: "もし寒ければ、窓を閉めます。", en: "If it is cold, I will close the window.", blank: "_____ it is cold, I will close the window.", answer: "If", hints: ["If", "cold"] },
                { jp: "もしあなたが助けを必要とするなら、私は来ます。", en: "If you need help, I will come.", blank: "If you _____ help, I will come.", answer: "need", hints: ["If", "help"] },
                { jp: "もし彼らが早く着けば、私たちは始めます。", en: "If they arrive early, we will start.", blank: "If they arrive early, we _____ start.", answer: "will", hints: ["If", "start"] }
            ],
            fillExamples: [
                { jp: "もし時間があれば、私は本を読みます。", en: "If I have time, I will read a book.", blank: "_____ I have time, I will read a book.", answer: "If", hints: ["If", "time"] },
                { jp: "もし彼がここに来たら、私たちは話します。", en: "If he comes here, we will talk.", blank: "If he _____ here, we will talk.", answer: "comes", hints: ["If", "comes"] },
                { jp: "もし晴れなら、彼らは野球をします。", en: "If it is sunny, they will play baseball.", blank: "If it is sunny, they _____ play baseball.", answer: "will", hints: ["If", "baseball"] },
                { jp: "もしあなたがこの本を読むなら、私はうれしいです。", en: "If you read this book, I will be happy.", blank: "If you _____ this book, I will be happy.", answer: "read", hints: ["If", "read"] },
                { jp: "もしその店が開いていれば、私たちは行きます。", en: "If the shop is open, we will go.", blank: "If the shop _____ open, we will go.", answer: "is", hints: ["If", "shop"] }
            ],
            reorderExamples: [
                { jp: "もし雨なら、私は家にいます。", en: "If it is rainy, I will stay home.", blank: "_____ it is rainy, I will stay home.", answer: "If", hints: ["If", "rainy"] },
                { jp: "もし彼女が忙しければ、私は待ちます。", en: "If she is busy, I will wait.", blank: "If she _____ busy, I will wait.", answer: "is", hints: ["If", "busy"] },
                { jp: "もしあなたが英語を勉強するなら、私は手伝います。", en: "If you study English, I will help you.", blank: "If you _____ English, I will help you.", answer: "study", hints: ["If", "study"] },
                { jp: "もし彼らが勝てば、私たちはうれしいです。", en: "If they win, we will be happy.", blank: "If they win, we _____ be happy.", answer: "will", hints: ["If", "win"] },
                { jp: "もし彼が家にいれば、私は電話します。", en: "If he is at home, I will call him.", blank: "If he _____ at home, I will call him.", answer: "is", hints: ["If", "home"] }
            ],
            translationExamples: [
                { jp: "もし明日晴れなら、私たちは公園へ行きます。", en: "If it is sunny tomorrow, we will go to the park.", blank: "_____ it is sunny tomorrow, we will go to the park.", answer: "If", hints: ["If", "sunny"], answers: ["If it is sunny tomorrow, we will go to the park."] },
                { jp: "もしあなたが手伝ってくれるなら、私はうれしいです。", en: "If you help me, I will be happy.", blank: "If you _____ me, I will be happy.", answer: "help", hints: ["If", "help"], answers: ["If you help me, I will be happy."] }
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
            ],
            choiceExamples: [
                { jp: "私は彼が親切だと思います。", en: "I think that he is kind.", blank: "I think _____ he is kind.", answer: "that", distractors: ["what", "when", "because"], hints: ["think", "that"] },
                { jp: "彼女はケンが正しいと思っています。", en: "She thinks that Ken is right.", blank: "She _____ that Ken is right.", answer: "thinks", distractors: ["think", "thinking", "thought"], hints: ["thinks", "that"] },
                { jp: "私たちは英語は大切だと思います。", en: "We think that English is important.", blank: "We think that English _____ important.", answer: "is", distractors: ["are", "am", "be"], hints: ["that", "important"] },
                { jp: "私はその映画はおもしろいと思います。", en: "I think that the movie is interesting.", blank: "I think that the movie _____ interesting.", answer: "is", distractors: ["are", "am", "be"], hints: ["that", "movie"] },
                { jp: "彼らはユキが忙しいと思っています。", en: "They think that Yuki is busy.", blank: "They think _____ Yuki is busy.", answer: "that", distractors: ["what", "when", "because"], hints: ["think", "that"] }
            ],
            meaningExamples: [
                { jp: "私はこの本は簡単だと思います。", en: "I think that this book is easy.", blank: "I think _____ this book is easy.", answer: "that", hints: ["think", "book"] },
                { jp: "彼は私たちが正しいと思っています。", en: "He thinks that we are right.", blank: "He thinks that we _____ right.", answer: "are", hints: ["that", "right"] },
                { jp: "私たちは彼女が英語を好きだと思います。", en: "We think that she likes English.", blank: "We think that she _____ English.", answer: "likes", hints: ["that", "likes"] }
            ],
            fillExamples: [
                { jp: "私は彼が忙しいと思います。", en: "I think that he is busy.", blank: "I think _____ he is busy.", answer: "that", hints: ["think", "busy"] },
                { jp: "彼女はその歌がよいと思っています。", en: "She thinks that the song is good.", blank: "She _____ that the song is good.", answer: "thinks", hints: ["thinks", "song"] },
                { jp: "彼らは私が疲れていると思っています。", en: "They think that I am tired.", blank: "They think that I _____ tired.", answer: "am", hints: ["that", "tired"] },
                { jp: "私はケンが毎日勉強すると思います。", en: "I think that Ken studies every day.", blank: "I think that Ken _____ every day.", answer: "studies", hints: ["that", "studies"] },
                { jp: "私たちは彼らが家にいると思います。", en: "We think that they are at home.", blank: "We think that they _____ at home.", answer: "are", hints: ["that", "home"] }
            ],
            reorderExamples: [
                { jp: "私は彼女が親切だと思います。", en: "I think that she is kind.", blank: "I think _____ she is kind.", answer: "that", hints: ["think", "kind"] },
                { jp: "彼はこの問題が難しいと思っています。", en: "He thinks that this question is difficult.", blank: "He thinks that this question _____ difficult.", answer: "is", hints: ["that", "question"] },
                { jp: "私たちはケンがサッカーをすると思います。", en: "We think that Ken plays soccer.", blank: "We think that Ken _____ soccer.", answer: "plays", hints: ["that", "plays"] },
                { jp: "ユキは英語が大切だと思っています。", en: "Yuki thinks that English is important.", blank: "Yuki _____ that English is important.", answer: "thinks", hints: ["thinks", "English"] },
                { jp: "私は彼らがこの本を読むと思います。", en: "I think that they read this book.", blank: "I think that they _____ this book.", answer: "read", hints: ["that", "read"] }
            ],
            translationExamples: [
                { jp: "私は数学がおもしろいと思います。", en: "I think that math is interesting.", blank: "I think _____ math is interesting.", answer: "that", hints: ["think", "math"], answers: ["I think that math is interesting."] },
                { jp: "彼女は私たちが幸せだと思っています。", en: "She thinks that we are happy.", blank: "She thinks that we _____ happy.", answer: "are", hints: ["thinks", "happy"], answers: ["She thinks that we are happy."] }
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
            meaningExamples: [
                { jp: "ユキはアオイより若いです。", en: "Yuki is younger than Aoi.", blank: "Yuki is younger _____ Aoi.", answer: "than", hints: ["younger", "than"] },
                { jp: "この机はあの机より古いです。", en: "This desk is older than that one.", blank: "This desk is _____ than that one.", answer: "older", hints: ["older", "than"] },
                { jp: "理科は英語より難しいです。", en: "Science is more difficult than English.", blank: "Science is _____ difficult than English.", answer: "more", hints: ["more", "than"] }
            ],
            fillExamples: [
                { jp: "このかばんはあのかばんより新しいです。", en: "This bag is newer than that one.", blank: "This bag is _____ than that one.", answer: "newer", hints: ["newer", "than"] },
                { jp: "私の猫はあなたの猫より小さいです。", en: "My cat is smaller than your cat.", blank: "My cat is _____ than your cat.", answer: "smaller", hints: ["smaller", "than"] },
                { jp: "この問題はあの問題より簡単です。", en: "This question is easier than that one.", blank: "This question is easier _____ that one.", answer: "than", hints: ["easier", "than"] },
                { jp: "この歌はあの歌より人気があります。", en: "This song is more popular than that one.", blank: "This song is _____ popular than that one.", answer: "more", hints: ["more", "popular"] },
                { jp: "タクはケンより速いです。", en: "Taku is faster than Ken.", blank: "Taku is _____ than Ken.", answer: "faster", hints: ["faster", "than"] }
            ],
            reorderExamples: [
                { jp: "私の家はあなたの家より大きいです。", en: "My house is bigger than your house.", blank: "My house is _____ than your house.", answer: "bigger" },
                { jp: "理科は数学より簡単です。", en: "Science is easier than math.", blank: "Science is _____ than math.", answer: "easier" },
                { jp: "この本はあの本より難しいです。", en: "This book is more difficult than that one.", blank: "This book is _____ difficult than that one.", answer: "more" },
                { jp: "ケンはユキより背が高いです。", en: "Ken is taller than Yuki.", blank: "Ken is taller _____ Yuki.", answer: "than" },
                { jp: "この自転車はあの自転車より新しいです。", en: "This bike is newer than that one.", blank: "This bike is _____ than that one.", answer: "newer" }
            ],
            translationExamples: [
                { jp: "ケンはタクより背が高いです。", en: "Ken is taller than Taku.", blank: "Ken is taller _____ Taku.", answer: "than", hints: ["taller", "than"], answers: ["Ken is taller than Taku."] },
                { jp: "この町はあの町より人気があります。", en: "This town is more popular than that one.", blank: "This town is _____ popular than that one.", answer: "more", hints: ["more", "popular"], answers: ["This town is more popular than that one."] }
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
            ],
            choiceExamples: [
                { jp: "この町はあの町より古いです。", en: "This town is older than that town.", blank: "This town is _____ than that town.", answer: "older", distractors: ["old", "oldest", "more old"], hints: ["older", "than"] },
                { jp: "この箱はあの箱より大きいです。", en: "This box is bigger than that box.", blank: "This box is _____ than that box.", answer: "bigger", distractors: ["big", "biggest", "more big"], hints: ["bigger", "than"] },
                { jp: "ユキはケンより幸せそうです。", en: "Yuki is happier than Ken.", blank: "Yuki is _____ than Ken.", answer: "happier", distractors: ["happy", "happiest", "more happy"], hints: ["happier", "than"] },
                { jp: "この問題はあの問題より難しいです。", en: "This question is more difficult than that one.", blank: "This question is _____ difficult than that one.", answer: "more", distractors: ["most", "er", "the"], hints: ["more", "difficult"] },
                { jp: "この歌はあの歌よりよいです。", en: "This song is better than that one.", blank: "This song is _____ than that one.", answer: "better", distractors: ["good", "best", "more good"], hints: ["better", "than"] }
            ],
            meaningExamples: [
                { jp: "この公園はあの公園より広いです。", en: "This park is larger than that park.", blank: "This park is _____ than that park.", answer: "larger", hints: ["larger", "than"] },
                { jp: "この本はあの本より簡単です。", en: "This book is easier than that one.", blank: "This book is easier _____ that one.", answer: "than", hints: ["easier", "than"] },
                { jp: "この計画はあの計画より大切です。", en: "This plan is more important than that one.", blank: "This plan is _____ important than that one.", answer: "more", hints: ["more", "important"] }
            ],
            fillExamples: [
                { jp: "この建物はあの建物より古いです。", en: "This building is older than that building.", blank: "This building is _____ than that building.", answer: "older", hints: ["older", "than"] },
                { jp: "この犬はあの犬より大きいです。", en: "This dog is bigger than that dog.", blank: "This dog is _____ than that dog.", answer: "bigger", hints: ["bigger", "than"] },
                { jp: "アオイはユキより幸せそうです。", en: "Aoi is happier than Yuki.", blank: "Aoi is _____ than Yuki.", answer: "happier", hints: ["happier", "than"] },
                { jp: "この授業はあの授業よりおもしろいです。", en: "This class is more interesting than that one.", blank: "This class is _____ interesting than that one.", answer: "more", hints: ["more", "interesting"] },
                { jp: "この考えはあの考えよりよいです。", en: "This idea is better than that one.", blank: "This idea is _____ than that one.", answer: "better", hints: ["better", "than"] }
            ],
            reorderExamples: [
                { jp: "この町はあの町より新しいです。", en: "This town is newer than that town.", blank: "This town is _____ than that town.", answer: "newer", hints: ["newer", "than"] },
                { jp: "この箱はあの箱より小さいです。", en: "This box is smaller than that box.", blank: "This box is _____ than that box.", answer: "smaller", hints: ["smaller", "than"] },
                { jp: "この歌はあの歌よりよいです。", en: "This song is better than that song.", blank: "This song is _____ than that song.", answer: "better", hints: ["better", "than"] },
                { jp: "この市はあの市より古いです。", en: "This city is older than that city.", blank: "This city is _____ than that city.", answer: "older", hints: ["older", "than"] },
                { jp: "この部屋はあの部屋より大きいです。", en: "This room is bigger than that room.", blank: "This room is _____ than that room.", answer: "bigger", hints: ["bigger", "than"] }
            ],
            translationExamples: [
                { jp: "この質問はあの質問より大切です。", en: "This question is more important than that one.", blank: "This question is _____ important than that one.", answer: "more", hints: ["more", "important"], answers: ["This question is more important than that one."] },
                { jp: "この動画はあの動画よりよいです。", en: "This video is better than that one.", blank: "This video is _____ than that one.", answer: "better", hints: ["better", "than"], answers: ["This video is better than that one."] }
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
            meaningExamples: [
                { jp: "タクは私たちのチームで一番背が高いです。", en: "Taku is the tallest in our team.", blank: "Taku is the _____ in our team.", answer: "tallest", hints: ["tallest", "team"] },
                { jp: "この辞書は3冊の中で一番新しいです。", en: "This dictionary is the newest of the three.", blank: "This dictionary is the newest _____ the three.", answer: "of", hints: ["newest", "of"] },
                { jp: "この山はその国で一番高いです。", en: "This mountain is the highest in the country.", blank: "This mountain is the _____ in the country.", answer: "highest", hints: ["highest", "country"] }
            ],
            fillExamples: [
                { jp: "富士山は日本で一番有名です。", en: "Mt. Fuji is the most famous in Japan.", blank: "Mt. Fuji is the _____ famous in Japan.", answer: "most", hints: ["most", "famous"] },
                { jp: "この山は日本で一番高いです。", en: "This mountain is the highest in Japan.", blank: "This mountain is the _____ in Japan.", answer: "highest", hints: ["highest", "Japan"] },
                { jp: "ミキは私たちの学校で一番人気があります。", en: "Miki is the most popular in our school.", blank: "Miki is the _____ popular in our school.", answer: "most", hints: ["most", "popular"] },
                { jp: "これは5つの中で一番よい考えです。", en: "This is the best idea of the five.", blank: "This is the _____ idea of the five.", answer: "best", hints: ["best", "idea"] },
                { jp: "この本は4冊の中で一番新しいです。", en: "This book is the newest of the four.", blank: "This book is the newest _____ the four.", answer: "of", hints: ["newest", "of"] }
            ],
            reorderExamples: [
                { jp: "この山はその島で一番高いです。", en: "This mountain is the highest on the island.", blank: "This mountain is the _____ on the island.", answer: "highest" },
                { jp: "ユキは私たちのクラスで一番人気があります。", en: "Yuki is the most popular in our class.", blank: "Yuki is the _____ popular in our class.", answer: "most" },
                { jp: "これはすべての中で一番よい計画です。", en: "This is the best plan of all.", blank: "This is the _____ plan of all.", answer: "best" },
                { jp: "タクはクラスで一番背が高いです。", en: "Taku is the tallest in his class.", blank: "Taku is the _____ in his class.", answer: "tallest" },
                { jp: "この本は3冊の中で一番新しいです。", en: "This book is the newest of the three.", blank: "This book is the newest _____ the three.", answer: "of" }
            ],
            translationExamples: [
                { jp: "彼は私たちのチームで一番人気があります。", en: "He is the most popular in our team.", blank: "He is the _____ popular in our team.", answer: "most", hints: ["is", "most"], answers: ["He is the most popular in our team."] },
                { jp: "これはすべての中で一番よい答えです。", en: "This is the best answer of all.", blank: "This is the _____ answer of all.", answer: "best", hints: ["best", "answer"], answers: ["This is the best answer of all."] }
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
            ],
            choiceExamples: [
                { jp: "この建物は町で一番古いです。", en: "This building is the oldest in the town.", blank: "This building is the _____ in the town.", answer: "oldest", distractors: ["older", "old", "more old"], hints: ["oldest", "town"] },
                { jp: "この湖は日本で一番大きいです。", en: "This lake is the largest in Japan.", blank: "This lake is the _____ in Japan.", answer: "largest", distractors: ["larger", "large", "more large"], hints: ["largest", "Japan"] },
                { jp: "ユキは3人の中で一番幸せそうです。", en: "Yuki is the happiest of the three.", blank: "Yuki is the _____ of the three.", answer: "happiest", distractors: ["happier", "happy", "most happy"], hints: ["happiest", "three"] },
                { jp: "この花は庭で一番美しいです。", en: "This flower is the most beautiful in the garden.", blank: "This flower is the _____ beautiful in the garden.", answer: "most", distractors: ["more", "better", "the"], hints: ["most", "beautiful"] },
                { jp: "これはすべての中で一番悪い結果です。", en: "This is the worst result of all.", blank: "This is the _____ result of all.", answer: "worst", distractors: ["bad", "worse", "most bad"], hints: ["worst", "result"] }
            ],
            meaningExamples: [
                { jp: "この公園は町で一番大きいです。", en: "This park is the largest in the town.", blank: "This park is the _____ in the town.", answer: "largest", hints: ["largest", "town"] },
                { jp: "この絵は部屋で一番美しいです。", en: "This picture is the most beautiful in the room.", blank: "This picture is the _____ beautiful in the room.", answer: "most", hints: ["most", "beautiful"] },
                { jp: "タクは5人の中で一番幸せそうです。", en: "Taku is the happiest of the five.", blank: "Taku is the happiest _____ the five.", answer: "of", hints: ["happiest", "of"] }
            ],
            fillExamples: [
                { jp: "この学校は町で一番古いです。", en: "This school is the oldest in the town.", blank: "This school is the _____ in the town.", answer: "oldest", hints: ["oldest", "town"] },
                { jp: "この川は日本で一番長いです。", en: "This river is the longest in Japan.", blank: "This river is the _____ in Japan.", answer: "longest", hints: ["longest", "Japan"] },
                { jp: "アオイは3人の中で一番幸せそうです。", en: "Aoi is the happiest of the three.", blank: "Aoi is the _____ of the three.", answer: "happiest", hints: ["happiest", "three"] },
                { jp: "この歌はすべての中で一番よいです。", en: "This song is the best of all.", blank: "This song is the _____ of all.", answer: "best", hints: ["best", "all"] },
                { jp: "これはすべての中で一番難しい問題です。", en: "This is the most difficult question of all.", blank: "This is the _____ difficult question of all.", answer: "most", hints: ["most", "difficult"] }
            ],
            reorderExamples: [
                { jp: "この家は町で一番古いです。", en: "This house is the oldest in the town.", blank: "This house is the _____ in the town.", answer: "oldest", hints: ["oldest", "town"] },
                { jp: "この庭は学校で一番美しいです。", en: "This garden is the most beautiful in the school.", blank: "This garden is the _____ beautiful in the school.", answer: "most", hints: ["most", "beautiful"] },
                { jp: "これはすべての中で一番悪い考えです。", en: "This is the worst idea of all.", blank: "This is the _____ idea of all.", answer: "worst", hints: ["worst", "idea"] },
                { jp: "この寺は町で一番古いです。", en: "This temple is the oldest in the town.", blank: "This temple is the _____ in the town.", answer: "oldest", hints: ["oldest", "town"] },
                { jp: "この湖は3つの中で一番大きいです。", en: "This lake is the largest of the three.", blank: "This lake is the largest _____ the three.", answer: "of", hints: ["largest", "of"] }
            ],
            translationExamples: [
                { jp: "この写真は部屋で一番美しいです。", en: "This photo is the most beautiful in the room.", blank: "This photo is the _____ beautiful in the room.", answer: "most", hints: ["most", "beautiful"], answers: ["This photo is the most beautiful in the room."] },
                { jp: "これはすべての中で一番悪い計画です。", en: "This is the worst plan of all.", blank: "This is the _____ plan of all.", answer: "worst", hints: ["worst", "plan"], answers: ["This is the worst plan of all."] }
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
            meaningExamples: [
                { jp: "ユキはアオイと同じくらい背が高いです。", en: "Yuki is as tall as Aoi.", blank: "Yuki is as tall _____ Aoi.", answer: "as", hints: ["as", "tall"] },
                { jp: "この映画はあの映画と同じくらいおもしろいです。", en: "This movie is as interesting as that one.", blank: "This movie is as _____ as that one.", answer: "interesting", hints: ["as", "interesting"] },
                { jp: "私は父ほど速く歩けません。", en: "I can't walk as fast as my father.", blank: "I can't walk as _____ as my father.", answer: "fast", hints: ["as", "fast"] }
            ],
            fillExamples: [
                { jp: "この猫はあの猫ほど大きくありません。", en: "This cat is not as big as that cat.", blank: "This cat is not as _____ as that cat.", answer: "big", hints: ["as", "big"] },
                { jp: "数学は英語と同じくらい大切です。", en: "Math is as important as English.", blank: "Math is as _____ as English.", answer: "important", hints: ["as", "important"] },
                { jp: "タクはケンと同じくらい速く泳げます。", en: "Taku can swim as fast as Ken.", blank: "Taku can swim as _____ as Ken.", answer: "fast", hints: ["as", "fast"] },
                { jp: "この机はあの机ほど新しくありません。", en: "This desk is not as new as that desk.", blank: "This desk is not as _____ as that desk.", answer: "new", hints: ["as", "new"] },
                { jp: "この歌はあの歌と同じくらいよいです。", en: "This song is as good as that one.", blank: "This song is as _____ as that one.", answer: "good", hints: ["as", "good"] }
            ],
            reorderExamples: [
                { jp: "私は姉ほど速く泳げません。", en: "I can't swim as fast as my sister.", blank: "I can't swim as _____ as my sister.", answer: "fast" },
                { jp: "この自転車はあの自転車ほど古くありません。", en: "This bike is not as old as that bike.", blank: "This bike is not as _____ as that bike.", answer: "old" },
                { jp: "理科は英語と同じくらい大切です。", en: "Science is as important as English.", blank: "Science is as _____ as English.", answer: "important" },
                { jp: "タクはケンと同じくらい背が高いです。", en: "Taku is as tall as Ken.", blank: "Taku is as tall _____ Ken.", answer: "as" },
                { jp: "この歌はあの歌と同じくらいおもしろいです。", en: "This song is as interesting as that one.", blank: "This song is as _____ as that one.", answer: "interesting" }
            ],
            translationExamples: [
                { jp: "この犬はあの犬ほど小さくありません。", en: "This dog is not as small as that dog.", blank: "This dog is not as _____ as that dog.", answer: "small", hints: ["as", "small"], answers: ["This dog is not as small as that dog."] },
                { jp: "この本はあの本と同じくらい大切です。", en: "This book is as important as that one.", blank: "This book is as _____ as that one.", answer: "important", hints: ["as", "important"], answers: ["This book is as important as that one."] }
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
                { jp: "Oは目的格 them です。", en: "The game made them happy.", blank: "The game made _____ happy.", answer: "them", distractors: ["they", "their", "theirs"] },
                { jp: "keep + O + C で「OをCのままにする」です。", en: "Please keep the classroom clean.", blank: "Please keep the classroom _____.", answer: "clean", distractors: ["cleans", "cleaning", "to clean"] },
                { jp: "make + O + C の C を確認します。", en: "The movie made her famous.", blank: "The movie made her _____.", answer: "famous", distractors: ["fame", "famously", "to famous"] }
            ],
            fillExamples: [
                { jp: "私たちはその犬をポチと呼びます。", en: "We call the dog Pochi.", blank: "We call the dog _____.", answer: "Pochi" },
                { jp: "その手紙は母を幸せにしました。", en: "The letter made my mother happy.", blank: "The letter _____ my mother happy.", answer: "made" },
                { jp: "窓を開けたままにしないでください。", en: "Don't keep the window open.", blank: "Don't keep the window _____.", answer: "open" },
                { jp: "彼らは自分たちの猫をミミと名づけました。", en: "They named their cat Mimi.", blank: "They named their cat _____.", answer: "Mimi" },
                { jp: "その話は私を悲しくしました。", en: "The story made me sad.", blank: "The story made _____ sad.", answer: "me" }
            ],
            meaningExamples: [
                { jp: "SVOCでは O と C が「O = C」の関係です。", en: "The song made him popular.", blank: "The song made him popular. の O は _____.", answer: "him", distractors: ["The song", "made", "popular"] },
                { jp: "SVOCでは O と C が「O = C」の関係です。", en: "This book made English easy.", blank: "This book made English easy. の C は _____.", answer: "easy", distractors: ["This book", "made", "English"] },
                { jp: "keep + O + C で「OをCのままにする」です。", en: "Please keep your room warm.", blank: "Please keep your room warm. の意味は _____.", answer: "部屋を暖かく保つ", distractors: ["部屋が暖める", "部屋を呼ぶ", "部屋を有名にする"] }
            ],
            reorderExamples: [
                { jp: "彼らは自分たちのチームをスターズと名づけました。", en: "They named their team Stars.", blank: "They named their team _____.", answer: "Stars" },
                { jp: "この歌は私たちを元気にしました。", en: "This song made us cheerful.", blank: "This song made us _____.", answer: "cheerful" },
                { jp: "箱を閉めたままにしてください。", en: "Please keep the box closed.", blank: "Please keep the box _____.", answer: "closed" },
                { jp: "私たちはその男の子をタクと呼びます。", en: "We call the boy Taku.", blank: "We call the boy _____.", answer: "Taku" },
                { jp: "その知らせは彼を忙しくしました。", en: "The news made him busy.", blank: "The news made him _____.", answer: "busy" }
            ],
            translationExamples: [
                { jp: "どうぞドアを開けたままにしてください。", en: "Please keep the door open.", blank: "Please keep the door _____.", answer: "open", hints: ["keep", "open"], answers: ["Please keep the door open."] },
                { jp: "私たちはその赤ちゃんをハナと名づけました。", en: "We named the baby Hana.", blank: "We named the baby _____.", answer: "Hana", hints: ["named", "Hana"], answers: ["We named the baby Hana."] }
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
            ],
            choiceExamples: [
                { jp: "私はこのコンピューターの使い方を知っています。", en: "I know how to use this computer.", blank: "I know _____ to use this computer.", answer: "how", distractors: ["what", "where", "when"], hints: ["how", "use"] },
                { jp: "彼女は何を言えばよいかわかりません。", en: "She doesn't know what to say.", blank: "She doesn't know _____ to say.", answer: "what", distractors: ["how", "where", "which"], hints: ["what", "say"] },
                { jp: "どこで会えばよいか教えてください。", en: "Tell me where to meet.", blank: "Tell me _____ to meet.", answer: "where", distractors: ["what", "when", "how"], hints: ["where", "meet"] },
                { jp: "私たちはどちらの道を行くべきか決めました。", en: "We decided which way to go.", blank: "We decided _____ way to go.", answer: "which", distractors: ["what", "where", "when"], hints: ["which", "way"] },
                { jp: "ケンはいつ出発すべきかを知っています。", en: "Ken knows when to leave.", blank: "Ken knows when to _____.", answer: "leave", distractors: ["leaves", "left", "leaving"], hints: ["when", "leave"] }
            ],
            meaningExamples: [
                { jp: "私は昼食の作り方を知っています。", en: "I know how to make lunch.", blank: "I know _____ to make lunch.", answer: "how", hints: ["how", "make"] },
                { jp: "彼は何を読めばよいかわかりません。", en: "He doesn't know what to read.", blank: "He doesn't know _____ to read.", answer: "what", hints: ["what", "read"] },
                { jp: "どこで待てばよいか教えてください。", en: "Please tell me where to wait.", blank: "Please tell me _____ to wait.", answer: "where", hints: ["where", "wait"] }
            ],
            fillExamples: [
                { jp: "ユキはいつ出ればよいかを学びました。", en: "Yuki learned when to leave.", blank: "Yuki learned _____ to leave.", answer: "when", hints: ["when", "leave"] },
                { jp: "私たちはどの本を買うべきか決めました。", en: "We decided which book to buy.", blank: "We decided _____ book to buy.", answer: "which", hints: ["which", "book"] },
                { jp: "私はこの単語の書き方を知っています。", en: "I know how to write this word.", blank: "I know how to _____ this word.", answer: "write", hints: ["how", "write"] },
                { jp: "彼女は何をすべきかわかりません。", en: "She doesn't know what to do.", blank: "She doesn't know what to _____.", answer: "do", hints: ["what", "do"] },
                { jp: "どこに座ればよいか教えてください。", en: "Tell me where to sit.", blank: "Tell me where to _____.", answer: "sit", hints: ["where", "sit"] }
            ],
            reorderExamples: [
                { jp: "私はこの地図の読み方を知っています。", en: "I know how to read this map.", blank: "I know _____ to read this map.", answer: "how", hints: ["how", "read"] },
                { jp: "彼らはどこで昼食を食べるべきか話し合いました。", en: "They talked about where to have lunch.", blank: "They talked about _____ to have lunch.", answer: "where", hints: ["where", "lunch"] },
                { jp: "ミキはどの歌を歌うべきか選びました。", en: "Miki chose which song to sing.", blank: "Miki chose _____ song to sing.", answer: "which", hints: ["which", "song"] },
                { jp: "私はいつ電話すべきかわかりません。", en: "I don't know when to call.", blank: "I don't know _____ to call.", answer: "when", hints: ["when", "call"] },
                { jp: "何を持っていくべきか教えてください。", en: "Please tell me what to bring.", blank: "Please tell me _____ to bring.", answer: "what", hints: ["what", "bring"] }
            ],
            translationExamples: [
                { jp: "私はこのカメラの使い方を知っています。", en: "I know how to use this camera.", blank: "I know _____ to use this camera.", answer: "how", hints: ["how", "use"], answers: ["I know how to use this camera."] },
                { jp: "私たちはどの電車に乗るべきか決めました。", en: "We decided which train to take.", blank: "We decided _____ train to take.", answer: "which", hints: ["which", "train"], answers: ["We decided which train to take."] }
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
            ],
            fillExamples: [
                { jp: "ピアノを弾く少女は私の友達です。", en: "The girl who plays the piano is my friend.", blank: "The girl _____ plays the piano is my friend.", answer: "who", hints: ["girl", "who"] },
                { jp: "公園で走っている少年はタクです。", en: "The boy who is running in the park is Taku.", blank: "The boy who _____ running in the park is Taku.", answer: "is", hints: ["who", "running"] },
                { jp: "英語を話す男性は私たちの先生です。", en: "The man who speaks English is our teacher.", blank: "The man who _____ English is our teacher.", answer: "speaks", hints: ["who", "speaks"] },
                { jp: "私たちを手伝ってくれた女性は親切でした。", en: "The woman who helped us was kind.", blank: "The woman who helped _____ was kind.", answer: "us", hints: ["who", "helped"] },
                { jp: "図書館で働いている人は私の母です。", en: "The person who works at the library is my mother.", blank: "The person who _____ at the library is my mother.", answer: "works", hints: ["who", "works"] }
            ],
            reorderExamples: [
                { jp: "日本語を勉強している生徒はケンです。", en: "The student who studies Japanese is Ken.", blank: "The student _____ studies Japanese is Ken.", answer: "who", hints: ["student", "who"] },
                { jp: "この歌を歌っている少女はユキです。", en: "The girl who is singing this song is Yuki.", blank: "The girl who is _____ this song is Yuki.", answer: "singing", hints: ["who", "singing"] },
                { jp: "速く走る少年は私の兄です。", en: "The boy who runs fast is my brother.", blank: "The boy who _____ fast is my brother.", answer: "runs", hints: ["who", "runs"] },
                { jp: "私に英語を教えている先生は親切です。", en: "The teacher who teaches me English is kind.", blank: "The teacher who teaches _____ English is kind.", answer: "me", hints: ["who", "me"] },
                { jp: "そのドアを開けた男性は私の父です。", en: "The man who opened the door is my father.", blank: "The man who _____ the door is my father.", answer: "opened", hints: ["who", "opened"] }
            ],
            translationExamples: [
                { jp: "英語を話す少女は私の友達です。", en: "The girl who speaks English is my friend.", blank: "The girl _____ speaks English is my friend.", answer: "who", hints: ["girl", "who"], answers: ["The girl who speaks English is my friend."] },
                { jp: "私を助けてくれた少年はケンです。", en: "The boy who helped me is Ken.", blank: "The boy who helped _____ is Ken.", answer: "me", hints: ["who", "helped"], answers: ["The boy who helped me is Ken."] }
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
            ],
            fillExamples: [
                { jp: "たくさんの写真がある本は古いです。", en: "The book which has many pictures is old.", blank: "The book _____ has many pictures is old.", answer: "which", hints: ["book", "which"] },
                { jp: "ケンが使っている自転車は新しいです。", en: "The bike which Ken uses is new.", blank: "The bike which Ken _____ is new.", answer: "uses", hints: ["which", "uses"] },
                { jp: "公園へ行くバスは遅れています。", en: "The bus which goes to the park is late.", blank: "The bus which _____ to the park is late.", answer: "goes", hints: ["which", "goes"] },
                { jp: "私たちが見た映画はおもしろかったです。", en: "The movie which we watched was interesting.", blank: "The movie which _____ watched was interesting.", answer: "we", hints: ["which", "we"] },
                { jp: "寝ている猫は私のものです。", en: "The cat which is sleeping is mine.", blank: "The cat which _____ sleeping is mine.", answer: "is", hints: ["which", "sleeping"] }
            ],
            reorderExamples: [
                { jp: "ユキが読んだ本は長かったです。", en: "The book which Yuki read was long.", blank: "The book _____ Yuki read was long.", answer: "which", hints: ["book", "which"] },
                { jp: "私が買ったペンは青いです。", en: "The pen which I bought is blue.", blank: "The pen which I _____ is blue.", answer: "bought", hints: ["which", "bought"] },
                { jp: "彼らが作ったケーキはおいしかったです。", en: "The cake which they made was good.", blank: "The cake which _____ made was good.", answer: "they", hints: ["which", "they"] },
                { jp: "空を飛んでいる鳥は美しいです。", en: "The bird which is flying in the sky is beautiful.", blank: "The bird which is _____ in the sky is beautiful.", answer: "flying", hints: ["which", "flying"] },
                { jp: "父が運転する車は白いです。", en: "The car which my father drives is white.", blank: "The car which my father _____ is white.", answer: "drives", hints: ["which", "drives"] }
            ],
            translationExamples: [
                { jp: "私が昨日買った本はおもしろいです。", en: "The book which I bought yesterday is interesting.", blank: "The book _____ I bought yesterday is interesting.", answer: "which", hints: ["book", "which"], answers: ["The book which I bought yesterday is interesting."] },
                { jp: "ケンが使っているカメラは新しいです。", en: "The camera which Ken uses is new.", blank: "The camera which Ken _____ is new.", answer: "uses", hints: ["which", "uses"], answers: ["The camera which Ken uses is new."] }
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
            ],
            choiceExamples: [
                { jp: "テニスをする少年は私の兄です。", en: "The boy who plays tennis is my brother.", blank: "The boy _____ plays tennis is my brother.", answer: "who", distractors: ["which", "where", "what"], hints: ["boy", "who"] },
                { jp: "これは父が私にくれたペンです。", en: "This is a pen which my father gave me.", blank: "This is a pen _____ my father gave me.", answer: "which", distractors: ["who", "where", "when"], hints: ["pen", "which"] },
                { jp: "私はフランス語を話す少女を知っています。", en: "I know a girl who speaks French.", blank: "I know a girl who _____ French.", answer: "speaks", distractors: ["speak", "speaking", "spoke"], hints: ["who", "speaks"] },
                { jp: "私たちが見た映画はわくわくしました。", en: "The movie which we watched was exciting.", blank: "The movie which _____ watched was exciting.", answer: "we", distractors: ["us", "our", "ours"], hints: ["which", "we"] },
                { jp: "私たちを助けてくれた先生は親切です。", en: "The teacher who helped us is kind.", blank: "The teacher who helped _____ is kind.", answer: "us", distractors: ["we", "our", "ours"], hints: ["who", "us"] }
            ],
            meaningExamples: [
                { jp: "人を説明するときは who を使います。", en: "The student who studies English is Yuki.", blank: "The student _____ studies English is Yuki.", answer: "who", hints: ["student", "who"] },
                { jp: "物を説明するときは which を使います。", en: "The bag which Ken uses is black.", blank: "The bag _____ Ken uses is black.", answer: "which", hints: ["bag", "which"] },
                { jp: "関係代名詞の後ろが説明する名詞を確認します。", en: "The girl who is singing is my sister.", blank: "who is singing が説明する語は _____.", answer: "The girl", distractors: ["singing", "my sister", "is"], hints: ["who", "girl"] }
            ],
            fillExamples: [
                { jp: "英語を教えている先生は親切です。", en: "The teacher who teaches English is kind.", blank: "The teacher _____ teaches English is kind.", answer: "who", hints: ["teacher", "who"] },
                { jp: "私が読んだ本は長かったです。", en: "The book which I read was long.", blank: "The book _____ I read was long.", answer: "which", hints: ["book", "which"] },
                { jp: "速く走る少年はケンです。", en: "The boy who runs fast is Ken.", blank: "The boy who _____ fast is Ken.", answer: "runs", hints: ["who", "runs"] },
                { jp: "ユキが歌った歌は美しかったです。", en: "The song which Yuki sang was beautiful.", blank: "The song which _____ sang was beautiful.", answer: "Yuki", hints: ["which", "Yuki"] },
                { jp: "寝ている犬は大きいです。", en: "The dog which is sleeping is big.", blank: "The dog which _____ sleeping is big.", answer: "is", hints: ["which", "sleeping"] }
            ],
            reorderExamples: [
                { jp: "私を知っている男性は私のおじです。", en: "The man who knows me is my uncle.", blank: "The man _____ knows me is my uncle.", answer: "who", hints: ["man", "who"] },
                { jp: "彼女が買ったかばんは赤いです。", en: "The bag which she bought is red.", blank: "The bag _____ she bought is red.", answer: "which", hints: ["bag", "which"] },
                { jp: "ピアノを弾いている少女はアオイです。", en: "The girl who is playing the piano is Aoi.", blank: "The girl who is _____ the piano is Aoi.", answer: "playing", hints: ["who", "playing"] },
                { jp: "私たちが使った部屋は広かったです。", en: "The room which we used was large.", blank: "The room which _____ used was large.", answer: "we", hints: ["which", "we"] },
                { jp: "ケンを助けた先生は若いです。", en: "The teacher who helped Ken is young.", blank: "The teacher who _____ Ken is young.", answer: "helped", hints: ["who", "helped"] }
            ],
            translationExamples: [
                { jp: "サッカーをする少年は私の友達です。", en: "The boy who plays soccer is my friend.", blank: "The boy _____ plays soccer is my friend.", answer: "who", hints: ["boy", "who"], answers: ["The boy who plays soccer is my friend."] },
                { jp: "私が使っているペンは新しいです。", en: "The pen which I use is new.", blank: "The pen _____ I use is new.", answer: "which", hints: ["pen", "which"], answers: ["The pen which I use is new."] }
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

    Object.values(window.GRAMMAR_CHECK_TESTS).forEach(dedupeTestQuestions);

    const heSheIs = window.GRAMMAR_CHECK_TESTS["g1-be-verb-he-she-is"];
    if (heSheIs) {
        heSheIs.sections[0].questions[4].translation = "彼は先生です。";
        heSheIs.sections[1].questions[1].translation = "彼は医者です。";
        heSheIs.sections[2].questions[3].question = "彼はいとこです。";
        heSheIs.sections[2].questions[3].words = ["He", "is", "my", "cousin."];
        heSheIs.sections[2].questions[3].answer = "He is my cousin.";
    }

    const contactClause = window.GRAMMAR_CHECK_TESTS["g3-contact-clause"];
    if (contactClause) {
        contactClause.sections[2].questions[3].question = "私が店で買った本はおもしろいです。";
        contactClause.sections[2].questions[3].words = ["The", "book", "I", "bought", "at", "the", "store", "is", "interesting."];
        contactClause.sections[2].questions[3].answer = "The book I bought at the store is interesting.";
    }
})();

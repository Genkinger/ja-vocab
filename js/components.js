Vue.component('vocab-table',
{
    template: 
    `
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>漢字</th>
                    <th>かな</th>
                    <th>タイプ</th>
                    <th>翻訳</th>
                </tr>
            </thead>
            <tfoot>
            </tfoot>
            <tbody>
                <tr v-for="word in vocab" :key="word.id">
                    <td>{{word.id}}</td>
                    <td><a :href="'https://jisho.org/search/' + word.kanji">{{word.kanji}}</a></td>
                    <td><a :href="'https://jisho.org/search/' + word.kana">{{word.kana}}</a></td>
                    <td>{{word.type}}</td>
                    <td>{{word.english}}</td>
                </tr>
            </tbody>
        </table>
    `,
    props: ['vocab']
    
})
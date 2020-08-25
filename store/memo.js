export const state = () => ({
    memo:[],
    page:0,
})
export const mutations = {
    insert:function(state, obj){
        var d = new Date();
        var fmt = d.getFullYear() + '-' + (d.getMonth()+1)
        + '-' + d.getDate() + '-' + d.getHours() + ':'
        + d.getMinutes();
        state.memo.unshift({ //memoに画面入力と日付を格納
            title: obj.title,
            content: obj.content,
            created: fmt
        });
    },
    set_page:function(state,p){
        state.page = p; //引数のページ数をステートに保存する
    },
    remove: function(state,obj){ //メモを消す
        var num = 0; 
        for(let i=0;i<state.memo.length;i++){
            const ob = state.memo[i];
            if(ob.title == obj.title 
                && ob.content == obj.content 
                && ob.created == obj.created){
                    alert('remove it! --' + ob.title)
                    state.memo.splice(i,1); //memoのi番めから1つ消す
                    return
            }
        }
    }
}
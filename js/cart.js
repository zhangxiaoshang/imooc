var vm = new Vue({
    el: '#app',
    data: {
        totalMoney: 0,
        productList: []
    },
    mounted: function() {
        this.cartView();
    },
    methods: {
        cartView: function() {
            var _this = this;
            this.$http.get("data/cart.json").then(function(res) {
                _this.productList = res.body.result.productList;
                _this.totalMoney = res.body.result.totalMoney;
            })
        }
    }
})
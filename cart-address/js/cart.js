
var vm = new Vue({
    el: "#app",
    data: {
        totalMoney: 0,
        productList: [],
        checkedAll: false, //单选是v-for遍历的，所以不能直接在data里加字段
        // 全选按钮不用遍历，因此直接在data中加字段
        totalPrice: 0,
        delFlag: false,
        delIndex: 0
    },

    filters: {
        formatMoney: function(value) {
            return "￥" + value.toFixed(2);
        }
    },

    // 取代ready()
    mounted: function() {
        this.loadList();

    },

     // 手动调用的所有外加方法
    methods: {
        loadList: function() {

            this.$http.get("data/cartData.json", { id: "123" }).then(res => {
                this.productList = res.data.result.list;
                this.totalMoney = res.data.result.totalMoney;
            });
        },
        changeMoney: function(product, way) {

            product.productQuantity += way;
            if (product.productQuantity < 1) {
                product.productQuantity = 1;
            }

        },
        selectProduct: function(item) {
            if (typeof item.checked == 'undefined') {
                this.$set(item, "checked", true);
                 } else {
                item.checked = !item.checked; //否则取反
            }

            var flagAll = true;
            this.productList.forEach(item => {

                flagAll = flagAll && item.checked;
            });
            this.checkedAll = flagAll;
        },


        selectAll: function(flag) {

            if (flag == 1) {
                this.checkedAll = !this.checkedAll;
            } else {
                this.checkedAll = false;
            }

            //2.改变单选按钮状态
            this.productList.forEach((item, index) => {

                if (typeof item.checked == 'undefined') {
                    this.$set(item, "checked", this.checkedAll);


                } else {
                    item.checked = this.checkedAll;
                }
            });

        },


        delConfirm: function(curIndex) {
            this.delFlag = true;
            this.delIndex = curIndex;
        },
        delProduct: function() {
            this.delFlag = false;
            this.productList.splice(this.delIndex, 1); //this.delIndex由delComfirm函数保存下来的
        }
    },


   // 计算属性依赖上下文变化，自动计算
    computed: {
        calTotalPrice: function() {

            this.totalPrice = 0;
            this.productList.forEach((item, index) => {
                if (item.checked == true) {
                    this.totalPrice += (item.productPrice) * (item.productQuantity);
                }
            });
            return this.totalPrice;
        }
    }
});




  // 全局注册过滤函数
Vue.filter("money", function(value, type) {

    return value.toFixed(2) + type;
});

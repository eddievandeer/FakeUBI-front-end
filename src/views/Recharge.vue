<template>
      <div class="main-body">
            <div id="recharge-main">
                  <div class="container">
                        <div class="row">
                              <div class="col-md-2"></div>
                              <div class="col-md-8 recharge-main">
                                    <div class="select-user">
                                          <span>充值用户：{{ now_user }}</span>
                                    </div>
                                    <hr>
                                    <p>请选择充值金额</p>
                                    <div id="buttons" align="center">
                                          <button type="button" class="btn set-amount"
                                                @focus="setAmount(50)">50元</button>
                                          <button type="button" class="btn set-amount"
                                                @focus="setAmount(150)">150元</button>
                                          <button type="button" class="btn set-amount"
                                                @focus="setAmount(300)">300元</button>
                                          <br>
                                          <button type="button" class="btn set-amount"
                                                @focus="setAmount(500)">500元</button>
                                          <button type="button" class="btn set-amount"
                                                @focus="setAmount(1000)">1000元</button>
                                          <input type="text" class="btn set-amount" placeholder="自定义金额"
                                                v-model="customized_amount">
                                    </div>
                                    <br>
                                    <!-- 模态框 -->
                                    <div class="modal fade" id="myModal2">
                                          <div class="modal-dialog modal-lg">
                                                <div class="modal-content payment">

                                                      <!-- 模态框头部 -->
                                                      <div class="modal-header">
                                                            <h4 class="modal-title">支付方式</h4>
                                                            <button type="button" class="close"
                                                                  data-dismiss="modal">&times;</button>
                                                      </div>

                                                      <!-- 模态框主体 -->
                                                      <div class="modal-body" style="height: 600px;">
                                                            <div align="center">
                                                                  <div>
                                                                        请选择支付方式
                                                                        <input type="button" class="btn payment-method"
                                                                              value="微信支付"
                                                                              @click="setMethod('Wechat')" />
                                                                        <input type="button" class="btn payment-method"
                                                                              value="支付宝支付"
                                                                              @click="setMethod('Alipay')" />
                                                                  </div>
                                                                  <br>
                                                                  <img class="QRcode"
                                                                        :src="require(`../assets/img/${QRcode_url}.jpg`)"
                                                                        alt="加载失败!">
                                                                  <br>
                                                                  <br>
                                                                  <button type="button" class="btn btn-primary btn-lg"
                                                                        @click="do_recharge()">&nbsp;&nbsp;&nbsp;完成支付&nbsp;&nbsp;&nbsp;</button>
                                                            </div>
                                                      </div>

                                                      <!-- 模态框底部 -->
                                                      <div class="modal-footer">
                                                            <button type="button" class="btn btn-danger"
                                                                  data-dismiss="modal">取消</button>
                                                      </div>

                                                </div>
                                          </div>
                                    </div>
                                    <div class="text-center">
                                          <a href="javascript:;" data-toggle="modal" data-target="#myModal2">
                                                <input type="button" class="btn btn-primary btn-lg"
                                                      @click="ifdo_recharge()" value="       确认充值        ">
                                          </a>
                                    </div>
                                    <br>
                                    <br>
                              </div>
                              <div class="col-md-2"></div>
                        </div>
                  </div>
            </div>

      </div>
</template>
<script>
      export default {
            data() {
                  return {
                        now_user: "",
                        customized_amount: "",
                        amount: "",
                        QRcode_url: "Wechat"
                  }
            },
            methods: {
                  setAmount(amount) {
                        this.amount = amount;
                        this.customized_amount = "";
                  },
                  ifdo_recharge() {
                        let final_amount;
                        if (this.customized_amount == "" && this.amount == "") {
                              alert("未选择充值金额！");
                        }
                  },
                  setMethod(url) {
                        this.QRcode_url = url;
                  },
                  async do_recharge() {
                        let a = confirm("确认充值");
                        if (a) {
                              let final_amount;
                              if (this.customized_amount == "") {
                                    final_amount = this.amount;
                              } else {
                                    final_amount = this.customized_amount;
                              }
                              try {
                                    let response = await this.$http.get("/recharge/doRecharge", {
                                          params: {
                                                amount: parseInt(final_amount)
                                          }
                                    })
                                    alert(response.data);
                                    location.reload();
                              } catch (err) {
                                    console.error(err);
                                    alert('充值失败！请检查当前网络状态！')
                              }
                        }
                  }
            }
      }
</script>

<style lang="scss" scoped>
      hr {
            margin-top: 5px;
            border-top: 0.5px solid rgb(218, 218, 218);
      }

      .recharge-main {
            width: auto;
            height: auto;
            margin-top: 80px;
            padding-top: 20px;
            background-color: rgba(16, 16, 16, 0.5);
      }

      .recharge-main span {
            font-size: 24px;
            color: #00B3FF;
      }

      .recharge-main p {
            font-size: 18px;
            color: white;
      }

      .set-amount {
            width: 150px;
            height: 80px;
            background: rgb(255, 255, 255);
            color: #464646;
            font-size: 22px;
            margin: 0px 10px 20px 0;
            border: 1px solid #cfcfcf;
            outline: none;
      }

      .set-amount:hover {
            color: #3ea4f1;
            border: 2px solid #3ea4f1;
      }

      .set-amount:focus {
            color: #3ea4f1;
            border: 2px solid #3ea4f1;
      }

      .payment-method {
            width: 130px;
            height: 50px;
            background: rgb(70, 215, 255);
            color: #e4f6ff;
            font-size: 20px;
            margin: 0px 10px;
            border: 1px solid #cfcfcf;
            outline: none;
      }

      .payment-method:hover {
            color: #ffffff;
            border: 2px solid #3ea4f1;
      }

      .payment-method:focus {
            color: #ffffff;
            border: 2px solid #3ea4f1;
      }

      .QRcode {
            height: 420px;
      }
</style>
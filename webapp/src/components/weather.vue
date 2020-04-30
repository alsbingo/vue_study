<template>
<div>
   <el-table :data="list" v-loading="loading">
     <el-table-column label="日期" prop="date" :formatter="dateFilter"></el-table-column>
     <el-table-column label="温度" prop="temperatureC"></el-table-column>
     <el-table-column label="概要" prop="summary"></el-table-column>
     <el-table-column label="操作">
         <template slot-scope="scope">
             <el-button @click="detail(scope.row)" type="text" size="small">查看</el-button>
         </template>
     </el-table-column>
   </el-table>

 <el-dialog style="text-align:left;" title="收货地址" :visible.sync="dialogFormVisible">
  <el-form ref="form" :model="selectItem" label-width="100px">
    <el-form-item label="日期">
        <el-date-picker v-model="selectItem.date" type="datetime" readonly ></el-date-picker>
    </el-form-item>
    <el-form-item label="概况">
        <el-input v-model="selectItem.summary" readonly ></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>



<script>
//import axios from "/axios"
import moment from 'moment'
export default {
    name:"Weather",
    data(){
        return {
            list:null,
            dialogFormVisible:false,
            selectItem:{
                date:null,
                summary:null
            },
            loading:true,
        };
    },
    created:function(){
        this.$axios.get("/weatherforecast")
        .then(res => {
            this.loading=false;
            this.list=res.data;
        })
        .catch(err => {
            console.error(err); 
        })
    },
    methods:{
        detail(row){
            if (row!=null){
                console.log(row);
                this.selectItem=row;
                this.dialogFormVisible=true;
            }
        },
        dateFilter(row){
return moment(row.date).format("YYYY-MM-DD HH:mm:ss"); 
        }
    }
}
</script>
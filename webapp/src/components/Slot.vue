<template>
    <div>
        <h3>默认slot</h3>
        <firstSlot>
        </firstSlot>
         <h3>作用域</h3>
        <firstSlot v-slot="info">
            <!-- <ul slot-scope="info">
            <li v-for="item in info.user" :key="item.index">{{item.name}}</li>
            </ul> -->
            <p slot="slot2">hello</p>
            <el-table :data="info.data">
                <el-table-column label="Name" prop="name"></el-table-column>
                <el-table-column label="Age" prop="age"></el-table-column>
                <el-table-column label="Gender" prop="gender"></el-table-column>
            </el-table>
            
        </firstSlot>
          <h3>作用域2</h3>
          <firstSlot>
              <template v-slot:slot2='info'>
              <el-table v-bind:data="info.user">
                  <el-table-column label="Name" prop="name"/>
                  <el-table-column label="Age" prop="age"></el-table-column>
                <el-table-column label="Gender" prop="gender"></el-table-column>
              </el-table>
              </template>
          </firstSlot>
    </div>
</template>

<script>
import firstSlot from '../components/slots/firstSlot'

export default {
    name:'Slot',
    components: {
        firstSlot,
    }
}
</script>
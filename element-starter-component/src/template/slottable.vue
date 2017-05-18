<template>
    <tbody>
        <tr v-for="item in content">
            <td v-for="el in item" v-text="el" ></td>
        </tr>
    </tbody>

</template>
<script>

    export default{
        data(){
            return {
                content:[
                        {key:1,value:'td1',no:'1'},
                        {key:2,value:'td2',no:'2'},
                        {key:3,value:'td3',no:'2'},
                        ]
            }
        }
    }
</script>
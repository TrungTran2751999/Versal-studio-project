
<template>
    <v-data-table-server
    :loading="this.$props.loading" 
    v-show="this.$props.loading"
    >
        <template v-slot:[`headers`]>
            <tr></tr>
        </template>
        <template v-slot:[`item`] = "{item}">
        <tr>
            <td>{{ item.IdUser }}</td>
        </tr>
        </template>
        <template v-slot:loading>
            <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
        </template>
    </v-data-table-server>
</template>
<script>
    export default{
        props:{
            loading: Boolean
        },
        data(){
            return{
                headersLoading:[
                    { title: 'Idkh', key: 'Idkh', align: 'start', sortable:false},
                    { title: 'Tên khách hàng', key: 'TenKh', align: 'start' ,sortable:false},
                    { title: 'Tổng tiền', key: 'TongTien', align: 'start' ,sortable:false},
                    { title: 'M3', key: 'M3TinhTien', align: 'start' ,sortable:false},
                    { title: 'Tháng', key: 'Thang', align: 'start' ,sortable:false},
                    { title: 'Năm', key: 'Nam', align: 'start' ,sortable:false},
                    { title: 'Địa chỉ', key: 'DiaChi', align: 'start' ,sortable:false},
                ]
            }
        }
    }
</script>

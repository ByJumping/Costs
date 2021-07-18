<template>
    <div class="payments-list">
        <table>
            <tr>
                <th>№</th>
                <th>Дата</th>
                <th>Категория</th>
                <th>Стоимость</th>
                <th colspan="2" class="col col_value">Value</th>
            </tr>
            <tr v-for="(item, idx) in list" :key="idx">
                <td>{{ idx + 1 }}</td>
<!--                <td>{{ item.date }}</td>-->
<!--                <td>{{ item.category }}</td>-->
<!--                <td>{{ item.value }}</td>-->
                <td class="cell">{{ (item && item.date) ? item.date : '' }}</td>
                <td class="cell">{{ (item && item.category) ? item.category  : '' }}</td>
                <td class="cell">{{ (item && item.value) ? item.value : '' }}</td>
                <td class="cell"><button @click="showMenu(idx + offset, $event)">Открыть</button></td>
            </tr>
        </table>
        <context-menu class="menu" :style="styleObj" :list="menuList"></context-menu>
    </div>
</template>

<script>
const EDIT = 'edit';
const DELETE = 'delete';
export const events = {
    EDIT,
    DELETE
}
export default {
    name: "PaymentsDisplay",
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            menuList:[
                {
                    name: 'Редактировать',
                    event: EDIT
                },
                {
                    name: 'Удалить',
                    event: DELETE
                }
            ],
            options: {
                idx: 0
            },
            styleObj: {
                top: 0,
                left: 0
            }
        }
    },
    mounted() {
        this.$contextMenu.EventBus.$on(EDIT, this.editNote);
        this.$contextMenu.EventBus.$on(DELETE, this.deleteNote);
    },
    destroyed() {
        this.$contextMenu.EventBus.$off(EDIT, this.editNote);
        this.$contextMenu.EventBus.$off(DELETE, this.deleteNote);
    },
    methods: {
        showMenu(idx, event) {
            this.$contextMenu.show({idx});
            const rect = event.currentTarget.getBoundingClientRect();
            this.styleObj.top = rect.bottom + 12 + 'px';
            this.styleObj.left = rect.right + 'px';
        },
        editNote({ idx }) {
            this.$emit(EDIT, idx);
        },
        deleteNote({ idx }){
            this.$emit(DELETE, idx);
        }
    }
}

</script>

<style lang="scss" scoped>
th {
  font-size: 13px;
  font-weight: normal;
  background: #b9c9fe;
  border-top: 4px solid #aabcfe;
  border-bottom: 1px solid white;
  color: #039;
  padding: 8px;
}
td {
  background: #e8edff;
  border-bottom: 1px solid white;
  color: #669;
  border-top: 1px solid transparent;
  padding: 8px;
}
tr:hover td {
  background: #ccddff;
}
.menu {
  position: absolute;
  transform: translateX(-100%);
  top: 0;
}
</style>

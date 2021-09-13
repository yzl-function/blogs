import {h} from "vue";
import {NAvatar, NSwitch} from "naive-ui";
import {formatDate} from "@/utils";
import TableAction from '@/components/BasicTable/TableAction.vue'
import {isFunction } from "lodash-es";


export const columns = ({handleUpdate}) => {
  return [
    {type: 'selection', key: 'selection'},
    {title: '序号', key: 'number', render: (row, index) => index + 1},
    {
      title: 'logo', key: 'avatar',
      render({avatar}) {
        return h(
          NAvatar,
          {
            round: true,
            objectFit: 'cover',
            size: 48,
            src: avatar || `https://gravatar.loli.net/avatar/${avatar}?s=48&d=retro`
          }
        )
      }
    },
    {title: '名称', key: 'name', ellipsis: true,},
    {title: '简述', key: 'outline', ellipsis: true,},
    {
      title: '状态', key: 'status',
      render(row) {
        return h(
          NSwitch,
          {
            defaultValue: row.status === '正常',
            onUpdateValue: (val) => isFunction(handleUpdate) && handleUpdate(row, val)
          },
          {
            checked: () => '正常',
            unchecked: () => '其他'
          }
        )
      }
    },
    {
      title: '创建时间',
      key: 'createdAt',
      render(row) {
        return h(
          'span',
          null,
          {
            default: () => row.createdAt && formatDate(row.createdAt)
          }
        )
      }
    }
  ]
}

export const createActionColumn = ({handleDel, handleEdit}) => {
  return {
    width: 150,
    title: '操作',
    key: 'action',
    fixed: 'right',
    align: 'center',
    render(record) {
      return h(TableAction, {
        style: 'button',
        actions: createActions(record, handleDel, handleEdit),
      });
    }
  }
}

function createActions(record, handleDel, handleEdit) {
  return [
    {
      label: '编辑',
      onClick: () => handleEdit(record),
    },
    {
      label: '删除',
      onClick: handleDel.bind(null, record),
    }
  ]
}

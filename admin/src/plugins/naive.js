import {
  create,
  NAvatar,
  NButton,
  NCard,
  NCheckbox,
  NDataTable,
  NDatePicker,
  NDrawer,
  NDrawerContent,
  NForm,
  NFormItem,
  NFormItemGi,
  NGi,
  NGrid,
  NIcon,
  NImage,
  NInput,
  NInputNumber,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NList,
  NListItem,
  NLoadingBarProvider,
  NMessageProvider,
  NModal,
  NRadio,
  NRadioButton,
  NRadioGroup,
  NSelect,
  NSkeleton,
  NSpace,
  NSpin,
  NSwitch,
  NTabPane,
  NTabs,
  NText,
  NThing,
  NTooltip,
  NTag,
} from 'naive-ui';

const naive = create({
  components: [
    NForm,
    NFormItem,
    NInput,
    NIcon,
    NCheckbox,
    NButton,
    NLoadingBarProvider,
    NMessageProvider,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NSpace,
    NCard,
    NDataTable,
    NSelect,
    NModal,
    NText,
    NFormItemGi,
    NGrid,
    NAvatar,
    NGi,
    NList,
    NListItem,
    NThing,
    NSkeleton,
    NSpin,
    NTabs,
    NTabPane,
    NDrawer,
    NDrawerContent,
    NSwitch,
    NTooltip,
    NRadioGroup,
    NRadio,
    NInputNumber,
    NImage,
    NRadioButton,
    NDatePicker,
    NTag,
  ],
});

export function setupNaive(app) {
  app.use(naive);
}
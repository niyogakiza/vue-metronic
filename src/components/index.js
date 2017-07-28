/**
 * Created by dell on 2017/7/28.
 */
import { Accordions, AccordionPane } from '@/components/accordions'
import { Alert } from '@/components/alert'
import { Badge } from '@/components/badge'
import { Btn, LinkBtn, BtnGroup, BtnToolbar, BtnDropdown, BtnDropdownDivider } from '@/components/button'
import { Checkbox, CheckboxGroup } from '@/components/checkbox'
import { Datepicker } from '@/components/datepicker'
import { Masker, GoTop } from '@/components/element'
import { Formbox, FormboxGroup } from '@/components/form'
import { Icon, Fa, FaStack } from '@/components/icon'
import { Lable } from '@/components/lable'
import { List, ListItem } from '@/components/list'
import { Modal } from '@/components/modal'
import { QuickNav } from '@/components/nav'
import { Note } from '@/components/note'
import { Pagination } from '@/components/pagination'
import { Panel } from '@/components/panel'
import { Popover, PopoverConfirm } from '@/components/popover'
import { Portlet } from '@/components/portlet'
import { ProgressBar } from '@/components/progress'
import { Radio, RadioGroup } from '@/components/radio'
import { Selectbox } from '@/components/selectbox'
import { Tabs, TabPane } from '@/components/tabs'
import { Textbox, TextboxGroup } from '@/components/textbox'
import { Tooltip } from '@/components/tooltip'
import { Well } from '@/components/well'

const components = {
  Accordions,
  AccordionPane,
  Alert,
  Badge,
  Btn,
  LinkBtn,
  BtnGroup,
  BtnToolbar,
  BtnDropdown,
  BtnDropdownDivider,
  Checkbox,
  CheckboxGroup,
  Datepicker,
  Masker,
  GoTop,
  Formbox,
  FormboxGroup,
  Icon,
  Fa,
  FaStack,
  Lable,
  List,
  ListItem,
  Modal,
  QuickNav,
  Note,
  Pagination,
  Panel,
  Popover,
  PopoverConfirm,
  Portlet,
  ProgressBar,
  Radio,
  RadioGroup,
  Selectbox,
  Tabs,
  TabPane,
  Textbox,
  TextboxGroup,
  Tooltip,
  Well
}

components.install = (Vue) => {
  for (let name in components) {
    Vue.component(name, components[name])
  }
}

export default components

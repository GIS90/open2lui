const excelMergeSteps = [
  {
    element: '#btn-operation',
    popover: {
      title: '操作说明',
      description: '合并功能的操作说明、注意要点，详情请点击查看',
      position: 'right',
      offset: 10
    },
    padding: 0
  },
  {
    element: '#btn-upload',
    popover: {
      title: '上传文件',
      description: '上传.xls、.xlsx格式文件',
      position: 'bottom',
      offset: 10
    },
    padding: 0
  },
  {
    element: '#data-container',
    popover: {
      title: '数据域',
      description: '用户数据展示区域，可根据个性化需求对用户进行设置、删除以及下载',
      position: 'top',
      offset: 10
    },
    padding: 0
  },
  {
    element: '#btn-merge',
    popover: {
      title: '合并',
      description: '文件合并操作，需要设置新文件名称、间隔（默认为0）',
      position: 'right',
      offset: 10
    },
    padding: 0
  }
]

export default excelMergeSteps

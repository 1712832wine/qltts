// This items using for render inputs in form interns
export const fields = [
    {
        label: 'Name',
        name: 'name',
        type: 'text',
        rules: [
            {
                required: true,
                message: 'Please input your name!',
            },
        ]
    },
    {
        label: 'Phone',
        name: 'phone',
        type: 'text',
        rules: [
            {
                required: true,
                message: 'Please input your phone!',
            },
        ]
    },
    {
        label: 'Major',
        name: 'major',
        type: 'text',
    },
    {
        label: 'School Year',
        name: 'school_year',
        type: 'text',
    },
    {
        label: 'CV File',
        name: 'cv_file',
        type: 'text',
    },
    {
        label: 'Date_Range',
        name: 'date_range',
        type: 'date_range',
        rules: [
            {
                required: true,
                message: 'Please select date start and date end!',
            },
        ]
    },
    {
        label: 'Result',
        name: 'result',
        type: 'select',
        rules: [
            {
                required: true,
                message: 'Please select result!',
            },
        ],
        options: [
            {
                value: 'Đạt',
                text: 'Đạt'
            },
            {
                value: 'Không đạt',
                text: 'Không đạt'
            }
        ]
    },
]



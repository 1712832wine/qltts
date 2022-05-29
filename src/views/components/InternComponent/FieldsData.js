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
            { required: true, message: 'Please input your username!' },
            { min: 9, message: 'Phone must be minimum 9 characters.' },
            { max: 15, message: 'Phone must be maximum 15 characters.' },
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
                value: 1,
                text: 'Đạt'
            },
            {
                value: 0,
                text: 'Không đạt'
            }
        ]
    },
]



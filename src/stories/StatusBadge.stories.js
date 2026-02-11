import StatusBadge from './StatusBadge'

export default {
    title: 'Excercise/StatusBadge',
    component: StatusBadge,
    parameters: {layout: 'centered'},
    args: {status: "online", size: "md"},
    argTypes: {
    status:   {
        control: "status",
        options: ["online", "offline", "busy"],
    },
    size: {
        control: "inline-radio",
        options: ["sm", "md"]
        },
    }
}

export const Default = {}

export const Offline = {
    args: { status: "offline"}
}

export const Busy = {
    args: { status: "busy" }
}
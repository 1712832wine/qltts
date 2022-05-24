import { Button, Modal, Tag } from 'antd';
import { useState } from 'react';


export default function ViewDetail({ item }) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const MyTag = () => {
        let color = item.result ? 'green' : 'red'
        return (
            <Tag color={color} key={item.key}>
                {item.result ? 'Đạt' : 'Không Đạt'}
            </Tag>
        )
    }

    return (

        <>
            <Button type="primary" onClick={showModal}>
                View
            </Button>
            <Modal title="Intern view detail" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p><b>Name:</b> {item.name}</p>
                <p><b>Phone:</b> {item.phone}</p>
                <p><b>Major:</b> {item.major}</p>
                <p><b>School year:</b> {item.school_year}</p>
                <p><b>Date start:</b> {item.start_date}</p>
                <p><b>Date end:</b> {item.end_date}</p>
                <p>
                    <b className="mr-2">Result:</b>
                    {MyTag()}
                </p>

            </Modal>
        </>
    )
}

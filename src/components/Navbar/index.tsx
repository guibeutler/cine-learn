import React from 'react'
import { Avatar, Col, Menu, Row } from 'antd'
import { UserOutlined, FlagOutlined, DownOutlined } from '@ant-design/icons'
import LogoImg from '../../assets/logo-cine-learn.png'
import './style.css'

function Navbar() {
	const menuItems = (
		<Menu
			mode="horizontal"
			style={{ border: 'none', display: 'flex', alignItems: 'center' }}
		>
			<Menu.Item key="language" style={{ display: 'flex' }}>
				<Row style={{ display: 'flex', alignItems: 'center' }}>
					<Col>
						<Avatar
							style={{ backgroundColor: '#5271FF' }}
							size="large"
							icon={<FlagOutlined style={{ fontSize: '18px' }} />}
						/>
					</Col>
					<Col>
						<p>EN</p>
					</Col>
					<DownOutlined />
				</Row>
			</Menu.Item>
			<Menu.Item key="user">
				<Avatar
					style={{ backgroundColor: '#5271FF' }}
					size="large"
					icon={<UserOutlined style={{ fontSize: '18px' }} />}
				/>
			</Menu.Item>
		</Menu>
	)

	return (
		<header>
			<Row
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Col>
					<img src={LogoImg} alt="logo" />
				</Col>
				<Col style={{ marginRight: '15px' }}>{menuItems}</Col>
			</Row>
		</header>
	)
}

export default Navbar

import React from 'react'
import {Panel, PanelHeader, Button, Group, Div, Cell, Avatar} from '@vkontakte/vkui'
import {UserInfo} from '@vkontakte/vk-connect'

export default class Home extends React.Component<{
	id: string
	go: (id: string) => void
	fetchedUser: UserInfo | null
}> {
    render() {
        const {id, go, fetchedUser} = this.props
        return (
        	<Panel id={id}>
                <PanelHeader>Example</PanelHeader>
                {fetchedUser &&
					<Group>
						<Cell
							before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
							description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
						>
							{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
						</Cell>
					</Group>
                }

                <Group title="Navigation Example">
                    <Div>
                        <Button size="xl" level="2" onClick={() => go('persik')} data-to="persik">
                            Show me the Persik, please
                        </Button>
                    </Div>
                </Group>
            </Panel>
        )
    }
}

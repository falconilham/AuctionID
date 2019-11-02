import React from 'react'
import { Card, Placeholder } from 'semantic-ui-react'

export const Placeholders = () => (
  <Card.Group doubling itemsPerRow={3} stackable>
    {_.map(cards, (card) => (
      <Card key={card.header}>
        {loading ? (
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
        ) : (
          <Image src={card.avatar} />
        )}
      </Card>
    ))}
  </Card.Group>
)

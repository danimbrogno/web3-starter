import { ponder } from '@ponder/core';

ponder.on('ExampleContract:EventName', async ({ event, context }) => {
  // Handle event
  // Example:
  // await context.db.exampleTable.insert({
  //   id: event.transaction.hash,
  //   blockNumber: event.block.number,
  //   // ... other fields
  // });
});

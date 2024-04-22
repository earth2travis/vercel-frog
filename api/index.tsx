import { Frog } from 'frog';
import { Column, Columns, Row, Rows, Heading, Text, vars } from './ui.js';
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel';

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  ui: { vars },
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
});

app.frame('/', c => {
  return c.res({
    image: (
      <Rows grow>
        <Row
          backgroundColor="death"
          color="nipple"
          textTransform="uppercase"
          borderTopColor={'angel'}
          borderTopWidth={'4'}
          borderRightColor={'angel'}
          borderRightWidth={'4'}
          borderLeftColor={'angel'}
          borderLeftWidth={'4'}
          height="1/5"
        >
          <Columns grow>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/6">
              <Heading>Yeet</Heading>
            </Column>
          </Columns>
        </Row>
        <Row
          backgroundColor="nipple"
          borderTopColor={'angel'}
          borderTopWidth={'2'}
          borderRightColor={'angel'}
          borderRightWidth={'4'}
          borderBottomColor={'angel'}
          borderBottomWidth={'2'}
          borderLeftColor={'angel'}
          borderLeftWidth={'4'}
          height="3/5"
        >
          <Columns grow>
            <Column
              backgroundColor="death"
              color="angel"
              textAlign="center"
              textTransform="uppercase"
              alignHorizontal="center"
              alignVertical="center"
              paddingRight="12"
              paddingLeft="12"
              width="1/1"
            >
              <Heading wrap="balance">Yeeter Not Active</Heading>
            </Column>
          </Columns>
        </Row>
        <Row
          backgroundColor="death"
          color="angel"
          textTransform="uppercase"
          borderRightColor={'angel'}
          borderRightWidth={'4'}
          borderBottomColor={'angel'}
          borderBottomWidth={'4'}
          borderLeftColor={'angel'}
          borderLeftWidth={'4'}
          height="1/5"
        >
          <Columns grow>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="18">Goal</Heading>
              <Text size="18" weight="400">
                xxx
              </Text>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="18">Raised</Heading>
              <Text size="18" weight="400">
                xxx
              </Text>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="18">Ends</Heading>
              <Text size="18" weight="400">
                xxx
              </Text>
            </Column>
            <Column alignHorizontal="center" alignVertical="center" width="1/4">
              <Heading size="18">Tribute</Heading>
              <Text size="18" weight="400">
                xxx
              </Text>
            </Column>
          </Columns>
        </Row>
      </Rows>
    ),
  });
});

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined';
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development';
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic });

export const GET = handle(app);
export const POST = handle(app);

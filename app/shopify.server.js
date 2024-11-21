export async function loader({ request }) {
    const { admin } = await shopify.authenticate.admin(request);
  
    const response = await admin.graphql(`
      {
        products(first: 25) {
          nodes {
            title
            description
          }
        }
      }
    `);
  
    const {
      data: {
        products: { nodes },
      },
    } = await response.json();
  
    return json(nodes);
  }
  
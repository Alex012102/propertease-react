const sampleWorkOrders = [
  {
    address: {
      streetAddress: "123 Maple St",
      city: "Springfield",
      state: "IL",
      zipCode: "62704",
    },
    status: "New",
    createdAt: "2024-10-15T08:30:00Z",
    lastUpdatedAt: "2024-10-16T12:45:00Z",
    title: "Leaky Faucet Repair",
    description:
      "The kitchen faucet is leaking steadily. Water is dripping non-stop, and it’s causing a small puddle under the sink. Might need to replace the faucet or tighten the connections. Please check for any other leaks in the plumbing while inspecting the faucet. Tenant has mentioned that it started leaking two days ago.",
    priority: "High",
  },
  {
    address: {
      streetAddress: "456 Oak Ave",
      city: "Chicago",
      state: "IL",
      zipCode: "60611",
    },
    status: "In Progress",
    createdAt: "2024-10-10T09:00:00Z",
    lastUpdatedAt: "2024-10-15T14:20:00Z",
    title: "Broken Window Replacement",
    description:
      "The living room window was shattered during a storm last week. Glass was cleaned up, but the window remains open and needs to be replaced. A temporary covering is in place. Replacement window should be similar to the original in size and style.",
    priority: "Medium",
  },
  {
    address: {
      streetAddress: "789 Pine Rd",
      city: "Naperville",
      state: "IL",
      zipCode: "60540",
    },
    status: "Completed",
    createdAt: "2024-10-05T10:15:00Z",
    lastUpdatedAt: "2024-10-07T16:30:00Z",
    title: "Air Conditioner Maintenance",
    description:
      "Scheduled maintenance for the central AC unit was completed without issues.",
    priority: "Low",
  },
  {
    address: {
      streetAddress: "101 Birch St",
      city: "Peoria",
      state: "IL",
      zipCode: "61602",
    },
    status: "Pending",
    createdAt: "2024-10-17T11:00:00Z",
    lastUpdatedAt: "2024-10-17T11:00:00Z",
    title: "Roof Inspection",
    description:
      "Following the recent heavy rain, the roof needs to be inspected for any leaks or damage. There’s a small water stain visible on the ceiling in one of the upstairs rooms. It’s unclear if it’s an active leak or old damage that’s been exposed. A thorough inspection of the roof and attic is required. Please provide an estimate for any repairs if necessary.",
    priority: "High",
  },
  {
    address: {
      streetAddress: "202 Cedar St",
      city: "Evanston",
      state: "IL",
      zipCode: "60201",
    },
    status: "Assigned",
    createdAt: "2024-10-14T08:45:00Z",
    lastUpdatedAt: "2024-10-16T15:00:00Z",
    title: "Clogged Drain",
    description: "The bathroom drain is clogged and draining very slowly.",
    priority: "Medium",
  },
  {
    address: {
      streetAddress: "303 Elm Dr",
      city: "Rockford",
      state: "IL",
      zipCode: "61101",
    },
    status: "New",
    createdAt: "2024-10-12T09:00:00Z",
    lastUpdatedAt: "2024-10-12T09:00:00Z",
    title: "Pest Control - Ant Infestation",
    description:
      "Tenant reported an ant infestation in the kitchen area. Needs urgent attention.",
    priority: "High",
  },
  {
    address: {
      streetAddress: "404 Oak St",
      city: "Aurora",
      state: "IL",
      zipCode: "60506",
    },
    status: "Pending",
    createdAt: "2024-10-16T11:30:00Z",
    lastUpdatedAt: "2024-10-16T11:30:00Z",
    title: "Water Heater Inspection",
    description:
      "The water heater is making strange noises. It might need an inspection to avoid potential breakdown.",
    priority: "Medium",
  },
  {
    address: {
      streetAddress: "505 Pine Ln",
      city: "Champaign",
      state: "IL",
      zipCode: "61820",
    },
    status: "Assigned",
    createdAt: "2024-10-13T08:15:00Z",
    lastUpdatedAt: "2024-10-13T08:15:00Z",
    title: "Broken Garage Door",
    description:
      "Garage door won’t open fully. It’s stuck about halfway and needs repair.",
    priority: "Medium",
  },
  {
    address: {
      streetAddress: "606 Spruce Ct",
      city: "Decatur",
      state: "IL",
      zipCode: "62521",
    },
    status: "In Progress",
    createdAt: "2024-10-12T10:00:00Z",
    lastUpdatedAt: "2024-10-15T09:00:00Z",
    title: "Tree Removal Request",
    description:
      "There is a large tree in the front yard that’s leaning after a recent storm. It poses a risk of falling onto the house, and the tenant has requested it to be removed immediately.",
    priority: "High",
  },
  {
    address: {
      streetAddress: "707 Willow St",
      city: "Bloomington",
      state: "IL",
      zipCode: "61701",
    },
    status: "Completed",
    createdAt: "2024-10-05T12:45:00Z",
    lastUpdatedAt: "2024-10-06T14:10:00Z",
    title: "Gutter Cleaning",
    description:
      "Gutters were cleaned out and downspouts unclogged. No further issues were reported by the tenant.",
    priority: "Low",
  },
];

export default sampleWorkOrders;

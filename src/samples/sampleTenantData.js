const sampleTenantData = [
  {
    tenantName: "John Doe",
    tenantAddress: "123 Elm St, Springfield, IL, 62701",
    tenantBalance: 1200.5,
    leaseTerm: {
      start: "2023-01-01",
      end: "2024-01-01",
    },
    mostRecentMessage:
      "Reminder: Your rent is due in five days; please ensure timely payment.",
    timeSent: "9:53am",
  },
  {
    tenantName: "Jane Smith",
    tenantAddress: "456 Oak Ave, Lincoln, NE, 68502",
    tenantBalance: 800.0,
    leaseTerm: {
      start: "2022-06-15",
      end: "2023-06-15",
    },
    mostRecentMessage:
      "Thank you for your prompt payment last month; your balance is now low.",
    timeSent: "10/2",
  },
  {
    tenantName: "Alice Johnson",
    tenantAddress: "789 Pine Rd, Madison, WI, 53703",
    tenantBalance: 1500.75,
    leaseTerm: {
      start: "2023-03-01",
      end: "2024-03-01",
    },
    mostRecentMessage:
      "Please remember to submit your maintenance requests through the portal; it's important.",
    timeSent: "9/12",
  },
  {
    tenantName: "Bob Brown",
    tenantAddress: "321 Maple St, Columbus, OH, 43215",
    tenantBalance: 950.25,
    leaseTerm: {
      start: "2022-09-01",
      end: "2023-09-01",
    },
    mostRecentMessage:
      "We noticed some issues with your heating; please let us know if it persists.",
    timeSent: "9/3",
  },
  {
    tenantName: "Emily Davis",
    tenantAddress: "654 Cedar Blvd, Atlanta, GA, 30301",
    tenantBalance: 400.0,
    leaseTerm: {
      start: "2023-05-01",
      end: "2024-05-01",
    },
    mostRecentMessage:
      "Your lease renewal is approaching; let's discuss your options at your convenience.",
    timeSent: "7/23",
  },
];

export default sampleTenantData;

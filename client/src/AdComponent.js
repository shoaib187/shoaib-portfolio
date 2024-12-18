import React, { useEffect } from "react";

const AdComponent = ({ adSlotId, sizes }) => {
  useEffect(() => {
    const adUnits = [
      {
        code: adSlotId, // ID for the ad slot
        mediaTypes: {
          banner: {
            sizes: sizes, // Ad sizes for the slot
          },
        },
        bids: [
          {
            bidder: "appnexus", // Example bidder
            // params: { placementId: "12345678" }, // Replace with your placement ID
            params: {},
          },
          {
            bidder: "openx", // Another example bidder
            // params: {
            //   unit: "540123456", // Replace with your unit ID
            //   delDomain: "example-d.openx.net", // Replace with your OpenX domain
            // },
            params: {},
          },
        ],
      },
    ];

    // Initialize Prebid.js and configure bidding
    window.pbjs = window.pbjs || {};
    window.pbjs.que = window.pbjs.que || [];
    window.pbjs.que.push(() => {
      window.pbjs.addAdUnits(adUnits);
      window.pbjs.requestBids({
        bidsBackHandler: () => {
          window.pbjs.setTargetingForGPTAsync();
          window.googletag.cmd.push(() => {
            window.googletag.display(adSlotId);
          });
        },
      });
    });

    // GPT Ad Slot Setup
    window.googletag.cmd.push(() => {
      window.googletag
        .defineSlot(`/1234567/my-ad-unit`, sizes, adSlotId)
        .addService(window.googletag.pubads());
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
    });

    return () => {
      // Cleanup: Remove the ad slot when the component unmounts
      window.googletag.cmd.push(() => {
        window.googletag.destroySlots([adSlotId]);
      });
    };
  }, [adSlotId, sizes]);

  return (
    <div
      id={adSlotId}
      style={{
        width: sizes[0][0],
        height: sizes[0][1],
        border: "1px solid #ccc",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      {/* Ad content will be rendered here */}
    </div>
  );
};

export default AdComponent;

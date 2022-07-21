import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { CollectionsOverViewCon } from "./collections-overview.styles";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <CollectionsOverViewCon>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverViewCon>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionsForPreview,
// });

export default CollectionsOverview;

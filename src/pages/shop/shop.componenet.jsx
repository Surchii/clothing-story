import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";

import CollectionPageContainer from "../../pages/collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  const fetchCollectionStartHandler = () => dispatch(fetchCollectionsStart());

  useEffect(() => {
    dispatch(fetchCollectionStartHandler());
  }, [fetchCollectionStartHandler]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />

      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;

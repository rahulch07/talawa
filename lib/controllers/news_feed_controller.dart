import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:talawa/model/posts.dart';
import 'package:talawa/services/preferences.dart';
import 'package:talawa/services/queries_.dart';
import 'package:talawa/utils/api_functions.dart';

class NewsFeedProvider with ChangeNotifier {
  Preferences preferences = Preferences();
  ApiFunctions apiFunctions = ApiFunctions();

  List<Posts> _postList = [];
  String exception;
  final Map<String, bool> _likePostMap = <String, bool>{};
  String _currOrgId;

  /// Get the list of post by the organization
  List<Posts> get getPostList {
    return _postList;
  }

  /// Getter checks if the server response list fetched by getPosts is Empty
  bool get isPostEmpty {
    return _postList.isEmpty;
  }

  //Getter to return null org
  bool get isCurrOrgIdNull {
    return _currOrgId == null;
  }

  /// Getter for the Liked posts
  Map<String, bool> get getLikePostMap {
    return _likePostMap;
  }

  /// Getter for error which might occured during fetching posts
  bool get isErrorOccurred {
    return exception != null;
  }

  /// Function to addlike
  Future<void> addLike(String postID) async {
    final Map result = await Queries().addLike(postID) as Map;
    debugPrint(result.toString());
    getPosts();
  }

  /// Function to remove the likes
  Future<void> removeLike(String postID) async {
    final Map result = await Queries().removeLike(postID) as Map;
    debugPrint(result.toString());
    getPosts();
  }

  // void : function to set the map of userLikedPost
  void updateLikepostMap(String currentUserID) {
    // traverse through post objects.
    for (final item in _postList) {
      _likePostMap[item.id] = false;
      //Get userIds who liked the post.
      final _likedBy = item.likedBy;
      for (final user in _likedBy) {
        if (user.id == currentUserID) {
          //if(userId is in the list we make value true;)
          _likePostMap[item.id.toString()] = true;
        }
      }
    }
  }

  //function to get the current posts
  Future<void> getPosts() async {
    final String currentOrgID = await preferences.getCurrentOrgId();
    final String currentUserID = await preferences.getUserId();
    _currOrgId = currentOrgID;
    if (currentOrgID != null) {
      final String query = Queries().getPostsById(currentOrgID);
      final Map result = await apiFunctions.gqlquery(query);
      if (result['exception'] != null) {
        exception = result['exception'] as String;
      } else {
        _postList = result == null
            ? []
            : postsFromJson(
                json.encode(result['postsByOrganization'].reversed.toList()));
        exception = null;
        updateLikepostMap(currentUserID);
        notifyListeners();
      }
    } else {
      _postList = [];
      updateLikepostMap(currentUserID);
    }
  }

  // bool : Method to get (true/false) if a user has liked a post or Not.
  bool hasUserLiked(String postId) {
    return _likePostMap[postId];
  }
}

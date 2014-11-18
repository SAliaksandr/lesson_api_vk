/**
 * VK Application script
 */

/**
 *
 * @type {Object}
 */
var Application = {

    /**
     * Run application
     */
    run : function()
    {
        $('#app-status').html('Application active');

        // load current user info
        VK.api('users.get', { fields : 'first_name, last_name, photo_50'  }, this.onUserInfoResponse.bind(this));


    },

    onUserInfoResponse  : function(data)
    {
        var users = data.response;
        var currentUser = users[0];

        $('#firstname').text(currentUser.first_name);
        $('#lastname').text(currentUser.last_name);
        $('#user-photo').attr('src', currentUser.photo_50);
    }

};
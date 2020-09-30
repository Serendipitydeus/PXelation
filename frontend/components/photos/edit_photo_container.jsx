import {connect} from 'react-redux';
import { fetchPhoto, updatePhoto, deletePhoto } from '../../actions/photo_actions';
import PhotoEdit from './photo_edit';

const mSTP = (state, ownProps) => {
    const photo = state.entities.photos[ownProps.match.params.photoId];
    return {photo};
};

const mDTP = dispatch => ({
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    deletePhoto: photoId => dispatch(deletePhoto(photoId))
});

export default connect(mSTP, mDTP)(PhotoEdit);
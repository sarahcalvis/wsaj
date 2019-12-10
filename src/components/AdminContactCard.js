import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import MiriamsFace from '../img/headshot.jpg';
import firebase from "../firebase.js"
import { withStyles } from '@material-ui/styles';


const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: '100px',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class AdminContactCard extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }
      this.handleChange = this.handleChange.bind(this);
      this.validateAll = this.validateAll.bind(this);
      this.signUp = this.signUp.bind(this);
      this.cancel = this.cancel.bind(this);
    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
    
        this.setState({
          fields
        });
      }
    
    validateAll(){
    
        for (const [value] of Object.entries(this.state.errors)) {
            if (!value || value !== ""){
            return false;
            }
        }
        return true;
    }

    signUp(e) {
        e.preventDefault();

        if (this.validateAll()) {
            // Add a new document in collection "shows"
            var db = firebase.firestore();
            db.collection("execContacts").doc(this.state.fields["execName"]).set({
                execName: this.state.fields["execName"],
                phoneNumber: this.state.fields["phoneNumber"],
                emailAddress: this.state.fields["emailAddress"],
                description: this.state.fields["description"],
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            //Clear Form
            let fields = {};
            fields["execName"] = "";
            fields["phoneNumber"] = "";
            fields["emailAddress"] = "";
            fields["description"] = "";
            this.setState({ fields: fields });
        }

    }

    cancel(e) {
        e.preventDefault();
        
        //Clear Form
        //DONT save CHANGES
        let fields = {};
        fields["execName"] = "";
        fields["phoneNumber"] = "";
        fields["emailAddress"] = "";
        fields["description"] = "";
        this.setState({ fields: fields });
    }
  
    render() {
      const { classes } = this.props;

      return (
        <Card className={classes.card}>
        <CardHeader
            title="Name"
            subheader="Exec Position"
        />
        <CardMedia
            className={classes.media}
            image={MiriamsFace}
            title="headshot"
        />
        <CardContent>
            <Typography variant="h4">
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="exec-name"
                    name="execName"
                    label="Exec Name"
                    autoFocus
                    onChange={this.handleChange}
                    error={!this.state.errors["execName"] ? false : this.state.errors["execName"] !== ""}
                    helperText={this.state.errors["execName"]}
                />
            </Typography>
            <Typography variant="h4">
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    autoFocus
                    onChange={this.handleChange}
                    error={!this.state.errors["description"] ? false : this.state.errors["description"] !== ""}
                    helperText={this.state.errors["description"]}
                />
            </Typography>
            <Typography paragraph>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="phone-number"
                    name="phoneNumber"
                    label="Phone Number"
                    autoFocus
                    onChange={this.handleChange}
                    error={!this.state.errors["phoneNumber"] ? false : this.state.errors["phoneNumber"] !== ""}
                    helperText={this.state.errors["phoneNumber"]}
                />
            </Typography>
            <Typography paragraph>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email-address"
                    name="emailAddress"
                    label="Email Address"
                    autoFocus
                    onChange={this.handleChange}
                    error={!this.state.errors["emailAddress"] ? false : this.state.errors["emailAddress"] !== ""}
                    helperText={this.state.errors["emailAddress"]}
                />
            </Typography>
            </CardContent>
        </Card>
    );
  }
}

export default withStyles(styles)(AdminContactCard);

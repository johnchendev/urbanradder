import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import * as classNames from "classnames";
import * as React from "react";

import i18n from "../../i18n";
import CardTitle from "../CardTitle";
import FormSpacer from "../FormSpacer";
import Toggle from "../Toggle";

interface SeoFormProps {
  description?: string;
  descriptionPlaceholder: string;
  disabled?: boolean;
  loading?: boolean;
  helperText?: string;
  title: string;
  titlePlaceholder: string;
  onChange(event: any);
  onClick?();
}

const decorate = withStyles(theme => ({
  addressBar: {
    color: "#006621",
    fontSize: "13px",
    lineHeight: "16px",
    marginBottom: "2px",
    overflow: "hidden" as "hidden",
    textOverflow: "ellipsis" as "ellipsis",
    whiteSpace: "nowrap" as "nowrap"
  },
  container: {
    width: "100%"
  },
  descriptionBar: {
    color: "#545454",
    fontSize: "13px",
    lineHeight: "18px",
    overflowWrap: "break-word" as "break-word"
  },
  helperText: {
    marginBottom: theme.spacing.unit * 3
  },
  label: {
    flex: 1
  },
  labelContainer: {
    display: "flex" as "flex"
  },
  preview: {
    minHeight: theme.spacing.unit * 10
  },
  title: {
    padding: 0
  },
  titleBar: {
    color: "#1a0dab",
    fontSize: "18px",
    lineHeight: "21px",
    overflowWrap: "break-word" as "break-word",
    textDecoration: "none",
    wordWrap: "break-word" as "break-word"
  }
}));

const SeoForm = decorate<SeoFormProps>(
  ({
    classes,
    description,
    descriptionPlaceholder,
    disabled,
    helperText,
    loading,
    title,
    titlePlaceholder,
    onChange
  }) => (
    <Toggle>
      {(toggled, { toggle }) => (
        <Card>
          <CardTitle
            title={i18n.t("Search Engine Preview")}
            toolbar={
              <Button color="secondary" variant="flat" onClick={toggle}>
                {i18n.t("Edit website SEO")}
              </Button>
            }
          />
          <CardContent>
            {helperText && (
              <Typography
                className={classNames({ [classes.helperText]: toggled })}
              >
                {helperText}
              </Typography>
            )}
            {toggled && (
              <div className={classes.container}>
                <TextField
                  name="seoTitle"
                  label={
                    <div className={classes.labelContainer}>
                      <div className={classes.label}>
                        {i18n.t("Search engine title")}
                      </div>
                      <span>
                        {i18n.t(
                          "{{ letters }} of {{ maxLetters }} characters",
                          { letters: title.length, maxLetters: 70 }
                        )}
                      </span>
                    </div>
                  }
                  helperText={i18n.t(
                    "If empty, the preview shows what will be autogenerated."
                  )}
                  value={title.slice(0, 69)}
                  disabled={loading || disabled}
                  InputLabelProps={{ shrink: true }}
                  placeholder={titlePlaceholder}
                  onChange={onChange}
                  fullWidth
                />
                <FormSpacer />
                <TextField
                  name="seoDescription"
                  label={
                    <div className={classes.labelContainer}>
                      <div className={classes.label}>
                        {i18n.t("Search engine description")}
                      </div>
                      <span>
                        {i18n.t(
                          "{{ letters }} of {{ maxLetters }} characters",
                          { letters: description.length, maxLetters: 300 }
                        )}
                      </span>
                    </div>
                  }
                  helperText={i18n.t(
                    "If empty, the preview shows what will be autogenerated."
                  )}
                  value={description ? description.slice(0, 299) : undefined}
                  onChange={onChange}
                  disabled={loading || disabled}
                  fullWidth
                  multiline
                  placeholder={descriptionPlaceholder}
                  InputLabelProps={{ shrink: true }}
                  rows={10}
                />
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </Toggle>
  )
);
SeoForm.displayName = "SeoForm";
export default SeoForm;
